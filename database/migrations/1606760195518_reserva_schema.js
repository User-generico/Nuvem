'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservaSchema extends Schema {
  up () {
    this.create('reservas', (table) => {
      table.increments()
      table.integer('galeria_id').unsigned().references('id').inTable('galeria_nuvems').onUpdate('cascade').onDelete("cascade")
      table.integer('pagina_id').unsigned().references('id').inTable('paginas').onUpdate('cascade').onDelete("cascade")
      table.timestamps()
    })
  }

  down () {
    this.drop('reservas')
  }
}

module.exports = ReservaSchema
