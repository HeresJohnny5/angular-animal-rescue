// CORE MODULES
const fs = require("fs");

// EXPRESS MODULES
const express = require("express");
const app = express();

app.use(express.json());

const pets = JSON.parse(fs.readFileSync(`${__dirname}/data/pets-data.json`));

const getAllPets = (req, res) => {
  res.status(200).json({
    results: pets.length,
    status: "success",
    data: {
      pets
    }
  });
};

const getPet = (req, res) => {
  const id = parseInt(req.params.id);
  const pet = pets.find(pet => pet.id === id);

  if (!pet) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID"
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      pet
    }
  });
};

const createPet = (req, res) => {
  const newId = pets[pets.length - 1].id + 1;
  const newPet = Object.assign({ id: newId }, req.body);

  pets.push(newPet);

  fs.writeFile(
    `${__dirname}/data/pets-data.json`,
    JSON.stringify(pets),
    err => {
      res.status(201).json({
        // status code 201 means created
        status: "success",
        data: {
          pet: newPet
        }
      });
    }
  );
};

const updatePet = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedPet = req.body;

  const pet = pets.find(pet => pet.id === id);

  if (!pet) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID"
    });
  }

  for (let key in updatedPet) {
    if (pet.hasOwnProperty(key)) {
      pet[key] = updatedPet[key];
    }
  }

  pets[id] = pet;

  fs.writeFile(
    `${__dirname}/data/pets-data.json`,
    JSON.stringify(pets),
    err => {
      res.status(200).json({
        // status code 201 means created
        status: "success",
        data: {
          pet
        }
      });
    }
  );
};

app
  .route("/api/v1/pets")
  .get(getAllPets)
  .post(createPet);
app
  .route("/api/v1/pets/:id")
  .get(getPet)
  .patch(updatePet);

// SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
