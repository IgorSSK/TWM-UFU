'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
    _class () {
        return this.hasOne('App/Models/Class')
    }
}

module.exports = Student
