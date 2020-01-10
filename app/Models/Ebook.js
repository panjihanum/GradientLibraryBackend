'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ebook extends Model {
    user() {
        return this.hasOne("")
    }
    filter() {
        return this.belongsTo("App/Models/Filter")
    }
    author() {
        return this.belongsTo("App/Models/Author")
    }
    picture() {
        return this.hasMany("App/Models/Picture")
    }
}

module.exports = Ebook
