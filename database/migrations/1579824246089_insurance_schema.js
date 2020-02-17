'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InsuranceSchema extends Schema {
  up () {
    this.create('insurances', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('type', 80).notNullable()
      table.text('description').notNullable()
      table.integer('customer_id')
      .unsigned()
      .references('id')
      .inTable('customers')
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
    this.drop('insurances')
  }
}

module.exports = InsuranceSchema
