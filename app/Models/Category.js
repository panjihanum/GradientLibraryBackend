'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class Category extends Model {
    filter() {
        return this.hasMany("App/Models/Filter")
    }
}

module.exports = Category
