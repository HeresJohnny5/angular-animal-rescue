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

app.route("/api/v1/pets").get(getAllPets);

// SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
