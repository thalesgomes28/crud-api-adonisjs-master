'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments()
      table.string('cpf', 80).unique()
      table.string('birth', 80).notNullable()
      table.string('address', 255).notNullable()
      table.string('gender', 80).notNullable()
      table.string('status', 7).notNullable()//  ativo / inativo
      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable()
      table.integer('provider_id')
      .unsigned()
      .references('id')
      .inTable('providers')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
