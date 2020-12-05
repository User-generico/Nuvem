'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Foto extends Model {
    tipo(){
        return this.belongsTo("App/Models/TipoDeNuvem")
    }
    galeria(){
        return this.belongsTo("App/Models/GaleriaNuvem")
    }
}

module.exports = Foto
