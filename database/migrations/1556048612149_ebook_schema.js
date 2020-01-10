'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EbookSchema extends Schema {
  up () {
    this.create('ebooks', (table) => {
      table.increments()
      table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE")
      table.integer("filter_id").unsigned().references("id").inTable("filters").onDelete("CASCADE")
      table.text("description").notNullable()
      table.string("title", 60).notNullable()
      table.integer("author_id").unsigned().references("id").inTable("authors").onDelete("CASCADE")
      table.integer("publisher_id").unsigned().references("id").inTable("publishers").onDelete("CASCADE")
      table.string("file").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ebooks')
  }
}

module.exports = EbookSchema
