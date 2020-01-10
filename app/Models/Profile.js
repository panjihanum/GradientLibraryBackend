'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profile extends Model {
    filter() {
        return this.belongsTo("App/Models/Filter")
    }
    author() {
        return this.belongsTo("App/Models/Author")
    }
    publisher() {
        return this.belongsTo("App/Models/Publisher")
    }
    picture() {
        return this.belongsTo("App/Models/Picture")
    }
    user() {
        return this.belongsTo("App/Models/User")
    }
    discussion() {
        return this.hasMany("App/Models/Discussion")
    }
}

module.exports = Profile
