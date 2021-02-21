'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Tipo = use("App/Models/TipoDeNuvem") 

/**
 * Resourceful controller for interacting with tipodenuvems
 */
class TipoDeNuvemController {
  /**
   * Show a list of all tipodenuvems.
   * GET tipodenuvems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async TodoTipo() {
    const Tipo = await TipoDeNuvem.query().with(["Tipo_de_nuvem"]).fetch();
    return Tipo;
  }

  /**
   * Display a single tipodenuvem.
   * GET tipodenuvems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async UmTipo ({ params, request, response, view }) {
    const tipos = await Tipo.all();
    return tipos;
  }
}

module.exports = TipoDeNuvemController
