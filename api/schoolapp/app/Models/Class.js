'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Class extends Model {
    students () {
        return this.hasMany('App/Models/Student')
    }

    news () {
      return this.hasMany('App/Models/News')
    }
}

module.exports = Class
