'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class City extends Model {
    province() {
        return this.belongsTo("App/Models/Province")
    }
    profile() {
        return this.hasOne("App/Models/Profile")
    }
}

module.exports = City
