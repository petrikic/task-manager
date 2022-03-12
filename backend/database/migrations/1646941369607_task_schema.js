'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('task', (table) => {
      table.increments('id').primary()
      table.string('name', 64).notNullable()
      table.string('content', 128)
      table.integer("board_id").unsigned().references("id").inTable("board")
      table.integer("pool_id").unsigned().references("id").inTable("pool_status")
      table.integer("user_id").unsigned().references("id").inTable("user")
      table.timestamps()
    })
  }

  down () {
    this.drop('task')
  }
}

module.exports = TaskSchema
