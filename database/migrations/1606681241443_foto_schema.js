'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FotoSchema extends Schema {
  up () {
    this.create('fotos', (table) => {
      table.increments('id')
      table.string('caminho').notNullable()
      table.text('descrição')
      table.date('data da foto').notNullable()
      table.integer('tipo_id').unsigned().references('id').inTable('tipo_de_nuvems').onUpdate('cascade').onDelete("cascade")
      table.timestamps()
    })
  }

  down () {
    this.drop('fotos')
  }
}

module.exports = FotoSchema
