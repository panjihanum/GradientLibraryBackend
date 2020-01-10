'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments()
      table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE")
      table.string("full_name").notNullable()
      table.text("address").notNullable()
      table.integer("city_id").unsigned().references("id").inTable("cities").onDelete("CASCADE")
      table.date("birth_of_date").nullable()
      table.integer("gender_id").unsigned().references("id").inTable("genders").onDelete("CASCADE")
      table.integer("school_id").unsigned().references("id").inTable("schools").onDelete("CASCADE")
      table.string("picture").nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
