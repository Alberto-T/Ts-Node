// import { getPokemon } from "./generics/get-pokemon";
// getPokemon(4)
//     .then( pokemon => console.log( pokemon.sprites.front_default ) )
//     .catch( error => console.error( error ) )
//     .finally( () => console.log('Fin de getPokemon') )
define(["require", "exports", "./decorators/pokemon-class"], function (require, exports, pokemon_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const charmander = new pokemon_class_1.Pokemon('Charmander');
    // (Pokemon.prototype as any).customName = 'Pikachu'
    // console.log(charmander.savePokemonToDB( 50 ));
    charmander.savePokemonToDB(3);
});
