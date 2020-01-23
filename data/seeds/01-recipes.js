
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {
      name: "Grilled Cheese Sandwich"
    },
    {
      name: "Cereal"
    }
  ]);
};
