'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PoolStatus extends Model {
    static get table () {
        return 'pool_status'
    }
}

module.exports = PoolStatus
