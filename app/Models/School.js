'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class School extends Model {
    profile() {
        return this.hasMany("App/Models/Profile")
    }
}

module.exports = School
