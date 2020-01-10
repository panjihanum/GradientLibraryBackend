'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FiltersSchema extends Schema {
  up () {
    this.create('filters', (table) => {
      table.increments()
      table.string("filter", 35).notNullable()
      table.integer("category_id").unsigned().references("id").inTable("categories").onDelete("CASCADE")
      table.string("picture").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('filters')
  }
}

module.exports = FiltersSchema
