
exports.up = function (knex) {
    return knex.schema.createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("name")
        .notNullable();
    })
    .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("name")
        .notNullable();
        tbl.float("quantity")
        .notNullable()
        tbl.integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable("steps", tbl => {
        tbl.increments();
        tbl.integer("step_number")
        .notNullable();
        tbl.text("instructions", 4000)
        .notNullable();
        tbl.integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");


};
