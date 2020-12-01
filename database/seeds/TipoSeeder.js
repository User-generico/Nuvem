'use strict'

/*
|--------------------------------------------------------------------------
| TipoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Tipo = use ('app/Models/Tipo')

class TipoSeeder {
  async run () {
    const Tipos = [
      {nome: "Cirrus"},
      {nome: "Cirrus Cumulus"},
      {nome: "Noctulucentes"},
      {nome: "Ondulações"},
    ];
    await Tipo.createMany(Tipos);

  }
}

module.exports = TipoSeeder
