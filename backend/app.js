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

app.route("/api/v1/pets").get(getAllPets);
app.route("/api/v1/pets/:id").get(getPet);

// SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
