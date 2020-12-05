'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pagina extends Model {
    reserva(){
        return this.belongsTo("App/Models/Reserva")
    }
}

module.exports = Pagina
