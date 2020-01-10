'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Reply extends Model {
    discussion() {
        return this.hasMany("App/Models/Discussion")
    }
}

module.exports = Reply
