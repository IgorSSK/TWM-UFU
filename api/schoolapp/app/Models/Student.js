'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
    _class () {
      return this.belongsTo('App/Models/Class')
    }

    history () {
      return this.hasMany('App/Models/StudentHistory')
    }
}

module.exports = Student
