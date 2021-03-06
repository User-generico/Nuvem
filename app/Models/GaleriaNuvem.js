'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GaleriaNuvem extends Model {
    foto() {
        return this.hasMany("App/Moldels/Foto")
    }
    user() {
        return this.hasMany("App/Models/User")
    }
}

module.exports = GaleriaNuvem
