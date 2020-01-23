
exports.seed = function (knex) {
  // Deletes ALL existing entries
      return knex('steps').insert([
        {
          step_number: 1,
          instructions: "Take the 2 slices of bread, butter them, put butter side down on pan on stove.",
          recipes_id: 1
        },
        {
          step_number: 2,
          instructions: "Then put the slices of cheese on top of the bread. Toast until golden brown",
          recipes_id: 1
        },
        {
          step_number: 1,
          instructions: "Take out 1 bowl, and 1 spoon.",
          recipes_id: 2
        },
        {
          step_number: 2,
          instructions: "Pour in cereal FIRST and then pour in desired milk. Eat and enjoy!",
          recipes_id: 2
        }
      ])
};
