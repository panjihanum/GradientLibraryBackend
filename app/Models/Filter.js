'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Filter extends Model {
    category() {
        return this.belongsTo("App/Models/Category")
    }
    ebook() {
        return this.hasMany("App/Models/Ebook")
    }
}

module.exports = Filter
