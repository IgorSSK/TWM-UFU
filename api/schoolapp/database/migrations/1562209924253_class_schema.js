'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClassSchema extends Schema {
  up () {
    this.create('classes', (table) => {
      table.increments()
      table.string('className', 30).notNullable()
      table.integer('module').notNullable()
      table.string('codeClass', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('classes')
  }
}

module.exports = ClassSchema
