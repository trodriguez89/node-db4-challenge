
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').insert([
    {
      instructions: "Take the 2 slices of bread, butter them, put butter side down on pan on stove. Then put the slices of cheese on top of the bread. Toast until golden brown and flip the sandwich to the other side.",
      recipes_id: 1
    },
    {
      instructions: "Take out 1 bowl, and 1 spoon. Pour in cereal FIRST and then pour in desired milk. Eat and enjoy!",
      recipes_id: 2
    }
  ])

};
