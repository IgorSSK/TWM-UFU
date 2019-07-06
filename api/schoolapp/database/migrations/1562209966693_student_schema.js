'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments()
      table.integer('class_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('classes')
      table.string('studentName', 50).notNullable()
      table.string('studentPhone', 15).notNullable()
      table.bool('status')
      table.string('firstResponsibleName', 50).notNullable()
      table.string('firstResponsiblePhone', 15).notNullable()
      table.string('secondResponsibleName', 50).nullable()
      table.string('secondResponsiblePhone', 15).nullable()
      table.string('address', 100).nullable()
      table.integer('amountFaults')
      table.timestamps()
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentSchema
