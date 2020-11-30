'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GaleriaNuvemSchema extends Schema {
  up () {
    this.create('galeria_nuvems', (table) => {
      table.increments('id')
      table.integer('foto_id').unsigned().references('id').inTable('fotos').onUpdate('cascade').onDelete("cascade")
      table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('cascade').onDelete("cascade")
      table.timestamps()
    })
  }

  down () {
    this.drop('galeria_nuvems')
  }
}

module.exports = GaleriaNuvemSchema
