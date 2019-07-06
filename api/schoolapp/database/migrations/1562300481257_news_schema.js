'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewsSchema extends Schema {
  up () {
    this.create('news', (table) => {
      table.increments()
      table.integer('id_administrator')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('administrators')
      table.integer('id_class')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('classes')
      table.string('title', 25)
      table.string('body', 1000)
      table.timestamps()
    })
  }

  down () {
    this.drop('news')
  }
}

module.exports = NewsSchema
