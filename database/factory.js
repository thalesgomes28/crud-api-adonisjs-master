'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

// const Factory = use('Factory')

/**
  Factory.blueprint('App/Models/User', (faker) => {
    return {
      username: faker.username()
    }
  })
*/

const Factory = use('Factory')
const Hash = use('Hash')

/*Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make(faker.password()),
    permission: '2'
  } */

  Factory.blueprint('App/Models/Provider', async (faker) => {
    return {
      cnpj: faker.username(),
      address: faker.email(),
      phone_number: await Hash.make(faker.password()),
      user_id: Math.floor(Math.random() * 100)+1, 
    } 



})