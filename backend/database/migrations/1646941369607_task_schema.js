'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('task', (table) => {
      table.increments('id').primary()
      table.string('name', 64).notNullable()
      table.string('content', 128).notNullable()
      table.integer("id_board").unsigned().references("id").inTable("board")
      table.integer("id_pool").unsigned().references("id").inTable("pool_status")
    })
  }

  down () {
    this.drop('task')
  }
}

module.exports = TaskSchema
