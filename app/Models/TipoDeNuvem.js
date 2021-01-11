'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TipoDeNuvem extends Model {
    foto(){
        return this.belongsToMany("app/Models/Foto")
    }
}

module.exports = TipoDeNuvem
