'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Discussion extends Model {
    user() {
        return this.belongsTo("App/Models/User")
    }
    ebook() {
        return this.hasOne("App/Models/Ebook")
    }
}

module.exports = Discussion
