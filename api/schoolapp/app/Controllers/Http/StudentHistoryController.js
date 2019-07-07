'use strict'

const StudentHistory = use('App/Models/StudentHistory')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with studenthistories
 */
class StudentHistoryController {
  /**
   * Show a list of all studenthistories.
   * GET studenthistories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

  }

  /**
   * Create/save a new studenthistory.
   * POST studenthistories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.all()

    const studentHistory = await StudentHistory.create(data)

    return studentHistory
  }

  /**
   * Display a single studenthistory.
   * GET studenthistories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }
}

module.exports = StudentHistoryController
