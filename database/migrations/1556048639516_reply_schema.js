'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReplySchema extends Schema {
  up () {
    this.create('replies', (table) => {
      table.increments()
      table.integer("discussion_id").unsigned().references('id').inTable("discussions").onDelete("CASCADE")
      table.text("reply").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('replies')
  }
}

module.exports = ReplySchema
