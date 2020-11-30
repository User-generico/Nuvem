'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoDeNuvemSchema extends Schema {
  up () {
    this.create('tipo_de_nuvems', (table) => {
      table.increments('id')
      table.string('Tipo de nuvem').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tipo_de_nuvems')
  }
}

module.exports = TipoDeNuvemSchema
