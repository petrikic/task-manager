'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BoardSchema extends Schema {
  up () {
    this.create('board', (table) => {
      table.increments('id').primary()
      table.string('name', 64).notNullable()
      table.integer("user_id").unsigned().references("id").inTable("user")
      table.timestamps()
    })
  }

  down () {
    this.drop('board')
  }
}

module.exports = BoardSchema
