'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdministratorSchema extends Schema {
  up () {
    this.create('administrators', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('phoneNumber', 15).notNullable()
      table.string('email', 45).notNullable()
      table.bool('supervisorPermit').notNullable()
      table.timestamps()
    })

    this.alter('administrators', (table) => {
      table.integer('classId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('classes')
    })

    this.alter('students', (table) => {
      table.integer('classId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('classes')
    })

  }

  down () {
    this.drop('administrators')
  }
}

module.exports = AdministratorSchema
