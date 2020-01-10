'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Gender extends Model {
    profile() {
        return this.hasOne("App/Models/Profile")
    }
}

module.exports = Gender
