
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    {
      name: "Sliced Bread",
      quantity: "2 slices",
      recipes_id: 1
    },
    {
      name: "Cheese",
      quantity: "3 slices",
      recipes_id: 1
    },
    {
      name: "Fruit Loops",
      quantity: "200oz",
      recipes_id: 2
    },
    {
      name: "Milk",
      quantity: "100oz",
      recipes_id: 2
    }
  ])

};
