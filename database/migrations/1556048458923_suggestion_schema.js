'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SuggestionSchema extends Schema {
  up () {
    this.create('suggestions', (table) => {
      table.increments()
      table.text("message").notNullable()
      table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE")
      table.string("file").nullable()
      table.string("picture").nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('suggestions')
  }
}

module.exports = SuggestionSchema
