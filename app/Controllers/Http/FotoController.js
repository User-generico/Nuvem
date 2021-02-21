'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Foto = use("App/Models/Foto")
/**
 * Resourceful controller for interacting with fotos
 */
class FotoController {
  /**
   * Show a list of all fotos.
   * GET fotos
   */
  async TodaFoto ({ request, response, view }) {
    const tipos = await Foto.all();
    return tipos;
  }

  /**
   * Render a form to be used for creating a new foto.
   * GET fotos/create
   */
  async create ({ request, response, view }) {
    const foto = await Foto.all();
    return foto;
  }

  /**
   * Create/save a new foto.
   * POST fotos
   */
  async store({ request, auth }) {
    const data = request.only(["id", "nome", "descricao"]);
    console.log(auth.user.id);
    const foto = await Foto.create(data);
    return foto;
  }

  /**
   * Display a single foto.
   * GET fotos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing foto.
   * GET fotos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update foto details.
   * PUT or PATCH fotos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a foto with id.
   * DELETE fotos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = FotoController
