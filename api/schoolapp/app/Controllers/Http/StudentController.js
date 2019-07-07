'use strict'

const Student = use('App/Models/Student')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with students
 */
class StudentController {

  /**
   * Show a list of all students.
   * GET students
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const students = await Student.all()

    return students
  }

  /**
   * Create/save a new student.
   * POST students
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    try {
      const data = request.all()
      const students = await Student.createMany(data.students)

      return students

    } catch (error) {

      return error
    }


  }

  /**
   * Display a single student.
   * GET students/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const student = await Student.findOrFail(params.id)
    const _class = await student._class().fetch()
    const history = await student.history().fetch()

    return { student, _class, history }
  }

  /**
   * Update student details.
   * PUT or PATCH students/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ request, params }) {

    const data = request.all()
    let student = await Student.findOrFail(params.id)
    student.merge(data)

    student.save()

    return student
  }

  /**
   * Delete a student with id.
   * DELETE students/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {

    const student = await User.findOrFail(params.id)
    await student.delete()

    return "Deleted succefully"
  }
}

module.exports = StudentController
