'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Publisher extends Model {
    ebook() {
        return this.hasMany("App/Models/Ebook")
    }
}

module.exports = Publisher
