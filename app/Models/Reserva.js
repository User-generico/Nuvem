'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Reserva extends Model {
    galria(){
        return this.hasMany("App/Models/GaleriaNuvem")
    }
    pagina(){
        return this.hasMany("App/Models/Pagina")
    }
}

module.exports = Reserva
