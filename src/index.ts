// import { Hero } from './classes/Hero';
// import { Hero as SuperHero, Hero2, Hero } from './classes/Hero';
// import * as HeroClasses from './classes/Hero';
// import powers from './data/powers';

import { printObject, genericFunction } from '../generics/generics';



// const ironman = new SuperHero('Ironman', 1, 55);
// const ironman = new HeroClasses.Hero('Ironman', 1, 55);
// const ironman = new Hero('Ironman', 1, 55);

// console.log( ironman );
// console.log( ironman.power );

// console.log( powers );





// printObject( 123 );
// printObject( new Date() );
// printObject( { a:1, b:2, c:3 } );
// printObject( [1,2,3,4,5,6,7,8,9,10] );
// printObject( 'Hola Mundo' );


console.log( genericFunction(3.141618).toFixed(2) );
console.log( genericFunction('Hola Mundo').toFixed(2) );
console.log( genericFunction( new Date() ).toFixed(2) );
