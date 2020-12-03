'use strict'

/*
|--------------------------------------------------------------------------
| TipoNuvemSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Tipo = use("App/Models/TipoDeNuvem")

class TipoNuvemSeeder {
  async run () {
    const Tipos = [
      {	Tipo_de_nuvem: "Cirrus"},
      {	Tipo_de_nuvem: "Cirrus Cumulus"},
      {	Tipo_de_nuvem: "Noctulucentes"},
      {	Tipo_de_nuvem: "Ondulações"},
    ];
    await Tipo.createMany(Tipos);
  }
}

module.exports = TipoNuvemSeeder
