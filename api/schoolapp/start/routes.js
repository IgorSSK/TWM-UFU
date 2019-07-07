'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register','AuthController.register')
Route.post('auth', 'AuthController.authenticate')

Route.group(() => {
  Route.resource('api/students', 'StudentController').apiOnly()
  Route.resource('api/classes', 'ClassController').apiOnly()
  Route.resource('api/admin', 'AdministratorController').apiOnly()
  Route.resource('api/news', 'NewsController').apiOnly()
})