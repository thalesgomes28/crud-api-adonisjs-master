'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Insurance extends Model {

    provider(){
        return this.hasMany('App/Models/Provider')
      }

    customer(){
        return this.hasMany('App/Models/Customer')
      }
   
}

module.exports = Insurance
