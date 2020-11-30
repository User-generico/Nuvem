'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaginaSchema extends Schema {
  up () {
    this.create('paginas', (table) => {
      table.increments('id')
      table.text("paragrafo").notNullable()
      table.string("caminho foto").notNullable()
      table.integer('numero página').notNullable().unsigned() 
    })
  }

  down () {
    this.drop('paginas')
  }
}

module.exports = PaginaSchema
