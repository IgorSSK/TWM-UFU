'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentHistorySchema extends Schema {
  up () {
    this.create('student_histories', (table) => {
      table.increments()
      table.integer('class_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('classes')
      table.integer('student_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('students')
      table.bool('present')
      table.integer('amountFaults')
      table.timestamps()
    })
  }

  down () {
    this.drop('student_histories')
  }
}

module.exports = StudentHistorySchema
