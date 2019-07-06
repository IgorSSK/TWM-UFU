'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdministratorSchema extends Schema {
  up () {

    this.alter('administrators', (table) => {
      table.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
    })


  }

  down () {
    this.table('administrators', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AdministratorSchema
