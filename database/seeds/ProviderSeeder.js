'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

/*class UserSeeder {
  async run () {
    const usersArray = await Factory
    .model('App/Models/User')
    .createMany(100)
   
  }*/

  class ProviderSeeder {
    async run () {
      const providersArray = await Factory
      .model('App/Models/Provider')
      .createMany(100)
     
    }
  

}
//module.exports = UserSeeder
module.exports = ProviderSeeder