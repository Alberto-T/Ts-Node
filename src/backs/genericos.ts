// import { Hero } from './classes/Hero';
// import { Hero as SuperHero, Hero2, Hero } from './classes/Hero';
// import * as HeroClasses from './classes/Hero';
// import powers from './data/powers';

import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Villain, Hero } from '../interfaces';


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

// const name: string = 'Alberto';


// console.log( genericFunctionArrow(3.141618).toFixed(2) );
// console.log( genericFunctionArrow( name ).toUpperCase() );
// console.log( genericFunctionArrow( new Date() ).getDate() );

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel );

