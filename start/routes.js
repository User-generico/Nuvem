'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');

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

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//Autenticação
Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

//Tipo de nuvem
Route.get ('/TipoDeNuvem', "TipoDeNuvemController.UmTipo");
Route.get("/TiposDeNuvem", "TipoDeNuvemContoller.TodoTipo");

//páginas
Route.post("/texto", "PaginaController.Texto");

//galeria
Route.delete("/ApagaNuvem", "GaleriaNuvemController.destroy");

//fotos
Route.get("/Fotos", "FotoController.TodaFoto");
Route.post("/NovaFoto","FotoController.create");


