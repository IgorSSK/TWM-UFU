'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentsSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments()
      table.string('studentName', 50).notNullable()
      table.string('studentPhone', 15).notNullable()
      table.bool('status').notNullable()
      table.string('firstResponsibleName', 50).notNullable()
      table.string('firstResponsiblePhone', 15).notNullable()
      table.string('secondResponsibleName', 50)
      table.string('secondResponsiblePhone', 15)
      table.integer('amountFaults')

      table.timestamps()
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentsSchema
