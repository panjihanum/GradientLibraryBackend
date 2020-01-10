'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiscussionSchema extends Schema {
  up () {
    this.create('discussions', (table) => {
      table.increments()
      table.integer("user_Id").unsigned().references("id").inTable("users").onDelete("CASCADE")
      table.integer("ebook_id").unsigned().references("id").inTable("ebooks").onDelete("CASCADE")
      table.text("discussion").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('discussions')
  }
}

module.exports = DiscussionSchema
