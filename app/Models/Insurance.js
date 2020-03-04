'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Insurance extends Model {

  static get hidden () {
    return ['updated_at', 'created_at']
}

    provider(){
        return this.hasMany('App/Models/Provider')
      }

    customer(){
        return this.hasMany('App/Models/Customer')
      }
   
}

module.exports = Insurance
