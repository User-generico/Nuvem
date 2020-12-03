'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Foto extends Model {
    tipo(){
        return this.belongsTo("app/Models/TipoDeNuvem")
    }
}

module.exports = Foto
