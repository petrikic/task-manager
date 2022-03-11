'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PoolStatusSchema extends Schema {
  up () {
    this.create('pool_status', (table) => {
      table.increments('id').primary()
      table.string('name', 64).notNullable()
    })
  }

  down () {
    this.drop('pool_status')
  }
}

module.exports = PoolStatusSchema
