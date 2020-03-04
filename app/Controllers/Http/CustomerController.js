'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Customer = use("App/Models/Customer")
/**
 * Resourceful controller for interacting with customers
 */
function magic(params) {

  var userString = JSON.stringify( params ) //Mágica
  var userJson = JSON.parse(userString)
  return ( userJson)
}

class CustomerController {
  /**
   * Show a list of all customers.
   * GET customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const customer = Customer.all()

    //
    
    return (customer)
  }

  /**
   * Render a form to be used for creating a new customer.
   * GET customers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

    const data = request.only(["cpf", "birth","address", "gender","status", "user_id","provider_id"])

    const customer = await Customer.create(data)

    return customer

  }

  /**
   * Create/save a new customer.
   * POST customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single customer.
   * GET customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    const customer = await Customer.findOrFail(params.id)
    await  customer.load('user')

    return customer

  }

  

  /**
   * Update customer details.
   * PUT or PATCH customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const customer = await Customer.findOrFail(params.id)
    const data = request.only(["cpf", "birth","address", "gender","status", "user_id","provider_id"])
    customer.merge(data)
    await customer.save()
    return customer


  }

  /**
   * Delete a customer with id.
   * DELETE customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const customer = await Customer.findOrFail(params.id)
    await customer.delete()
  }

  async count ({ params }) {
    let total = await Customer.getCount();

    let ativos = await Customer
    .query()
    .where('state', 1) // busca somente provedores
    .getCount()

    let vetor = [ativos, total]
    return (vetor)
  }

  async listCustomer ({ params }) {
    console.log(params)
     let users = await Customer.query().with('user').select('*').where('provider_id', params.id).fetch();
   
     var listJs = magic(users);     
    
     return (listJs)
   }

}

module.exports = CustomerController
