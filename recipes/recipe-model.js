const db = require("../data/dbConfig");

module.exports = {
    getRecipes,
    getRecipeById,
    getShoppingList,
    getInstructions,
    addRecipe,
    addIngredients,
    addSteps
}

function getRecipes() {
    return db("recipes");
};

function getRecipeById(id) {
    return db("recipes")
    .where({id})
    .first();
};

// function getShoppingList(id){
//     return db("ingredients")
//     .where({recipes_id: id})
// };

function getShoppingList(id){
    return db("ingredients")
    .join("recipes", "ingredients.recipes_id", "recipes.id")
    .select("ingredients.name", "ingredients.quantity")
    .where("recipes.id", id)
};

function getInstructions(id){
    return db("steps")
    .join("recipes", "steps.recipes_id", "recipes.id")
    .select("steps.step_number", "steps.instructions")
    .where("recipes.id", id)
    .orderBy("steps.step_number")
};

function addRecipe(newRecipe){
    return db("recipes")
    .insert(newRecipe)
    .then(ids => {
        return getRecipeById(ids[0])
    })
};

function addIngredients(ingredients, id) {
    return db("ingredients")
    .insert({ name: ingredients.name, quantity: ingredients.quantity, recipes_id: id})
};

function addSteps(steps, id){
    return db("steps")
    .insert({ step_number: steps.step_number, instructions: steps.instructions, recipes_id: id })
};
