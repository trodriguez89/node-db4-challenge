const express = require("express");

const Recipes = require("./recipe-model");

const router = express.Router();

// GET requests
router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "something went wrong" })
    })
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Recipes.getRecipeById(id)
    .then(recipe => {
      res.json(recipe)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "something went wrong" })
    })
});

router.get("/:id/shoppingList", (req, res) => {
  const id = req.params.id;
  Recipes.getShoppingList(id)
    .then(ingredients => {
      res.json(ingredients)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "something went wrong" })
    })
});

router.get("/:id/instructions", (req, res) => {
  const id = req.params.id;
  Recipes.getInstructions(id)
    .then(steps => {
      res.json(steps)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "something went wrong" })
    })
});

//POST requests
router.post("/", (req, res) => {
  const body = req.body;
  Recipes.addRecipe(body)
    .then(recipe => {
      res.status(201).json(recipe)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "something went wrong" })
    })
});

router.post("/:id/shoppingList", (req, res) => {
  const body = req.body;
  const id = req.params.id;
  Recipes.getRecipeById(id)
    .then(recipe => {
      if (recipe) {
        Recipes.addIngredients(body, id)
          .then(ingredient => {
            res.status(201).json(ingredient)
          })
      } else {
        res.status(404).json({ message: "could not find recipe with given id" })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "something went wrong" })
    })
});

router.post("/:id/instructions", (req, res) => {
  const body = req.body;
  const id = req.params.id;
  Recipes.getRecipeById(id)
    .then(recipe => {
      if (recipe) {
        Recipes.addSteps(body, id)
          .then(steps => {
            res.status(201).json(steps)
          })
      } else {
        res.status(404).json({ message: "could not find recipe with given id" })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "something went wrong" })
    })
});


module.exports = router;