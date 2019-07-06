'use strict'

const Class = use('App/Models/Class')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with classes
 */
class ClassController {
  /**
   * Show a list of all classes.
   * GET classes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const classes = await Class.all()

    return classes
  }

  /**
   * Create/save a new class.
   * POST classes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    try {
      const data = request.all()
      const classes = await data.classes.map(async cls => { const ret = await Class.create(cls)
      console.log(ret)
      return ret})

      return classes

    } catch (error) {

      return error
    }
  }

  /**
   * Display a single class.
   * GET classes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const _class = await Class.findOrFail(params.id)
    const students = await _class.students().fetch()
    const news = await _class.news().fetch()

    return { _class , students, news }
  }

  /**
   * Update class details.
   * PUT or PATCH classes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a class with id.
   * DELETE classes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }

  async news () {

  }
}

module.exports = ClassController
