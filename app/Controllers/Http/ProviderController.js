'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Provider = use("App/Models/Provider")
/**
 * Resourceful controller for interacting with providers
 */
class ProviderController {
  
  async create({ request }) {
    const data = request.only(["cnpj", "phone_number","address", "user_id"])

    const provider = await Provider.create(data)

    return provider
  }

  async index({ response }) {
    const providers = Provider.all()
    
    return (providers)
  }

  async update ({ params, request }) {
    const user = await Provider.findOrFail(params.id)
    const data = request.only(["username", "cnpj", "phone_number", "user_id"])

    user.merge(data)
    await user.save()

    return user
  }

  /**
   * Delete a project with id.
   * DELETE projects/:id
   */
  async destroy ({ params }) {
    const user = await Provider.findOrFail(params.id)

    await user.delete()
  }


  async count ({ params }) {
    let total = await Provider.getCount();

    let ativos = await Provider
    .query()
    .where('state', 1) // busca somente provedores
    .getCount()

    let vetor = [ativos, total]
    return (vetor)
  }
}

module.exports = ProviderController



