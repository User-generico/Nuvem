'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Foto extends Model {
    tipo(){
        return this.hasMany("App/Models/TipoDeNuvem")
    }
    galeria(){
        return this.belongsToMany("App/Models/GaleriaNuvem")
    }
}

module.exports = Foto
