'use strict'

/*
|--------------------------------------------------------------------------
| PoolStatusSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class PoolStatusSeeder {
  async run () {
    await Factory.model('App/Models/PoolStatus').create({name: "Backlog"});
    await Factory.model('App/Models/PoolStatus').create({name: "ToDo"});
    await Factory.model('App/Models/PoolStatus').create({name: "Doing"});
    await Factory.model('App/Models/PoolStatus').create({name: "Done"});
  }
}

module.exports = PoolStatusSeeder
