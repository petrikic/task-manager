'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BoardSchema extends Schema {
  up () {
    this.create('board', (table) => {
      table.increments('id').primary()
      table.string('name', 64).notNullable()
    })
  }

  down () {
    this.drop('board')
  }
}

module.exports = BoardSchema
