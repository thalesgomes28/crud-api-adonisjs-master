'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Customer extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */

  static get hidden () {
    return [ 'updated_at', 'created_at']
}

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  user(){

    return this.belongsTo('App/Models/User')
  }

   insurance(){
    return this.hasMany('App/Models/Insurance')
   }

 
}

module.exports = Customer
