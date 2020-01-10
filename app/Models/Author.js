'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Author extends Model {
    ebook() {
        return this.hasOne("App/Models/Ebook")
    }
}

module.exports = Author
