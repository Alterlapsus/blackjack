/**
 * 2C = Two of clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

// esta función crea un nuevo deck (baraja)
const crearDeck = () => {
    for( i = 2; i <= 10; i++){
        for(let tipo of tipos ){
            deck.push( i + tipo );
        }

    }
    for ( let tipo of tipos){
        for( let esp of especiales){
            deck.push( esp + tipo);
        }
    }

    // console.log(deck);
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

crearDeck();


// i es igual a dos, parte del dos, variable i tiene que ser mayor o igual a 10, ya que habrán 10 cartas, i++ para que aumente 1 carta a la vez,

// for of, se le dio un let tipo of tipos, deck.push i + tipo


// Está funcion me permite tomar una carta de la deck

const pedirCarta = () => {

    if (deck.length === 0){
        throw 'No hay cartas en el deck';
        // mostrará un erro en consola y ya no ejecutará el código 
    }

    const carta = deck.pop(); //.pop(); elimina el último elemento del arreglo y lo regresa 


    console.log(deck);
    console.log(carta); // carta debe de ser de la baraja
    return carta;

}

// el ciclo me servirá para saber si mi función .pop funciona correctamente, ya que eliminarara las cartas 1 a 1 hasta llegar a cero

// for( let i = 0; i <= 100; i++ ){
//     pedirCarta();
    
// }
// deck = [];

// PedirCarta();

// const valorCarta = ( carta ) => {
    
//     const valor = carta.substring(0, carta.length - 1);

    // let puntos = 0;
    // 2 = 2,  10 = 10, 3 = 3

    // if( isNaN( valor ) ){
        // console.log('No es un número');
        
        // puntos = ( valor === 'A' ) ? 11 : 10;


    // }else{
        // console.log('Es un número');
        // puntos = valor * 1;
    // }
    // console.log(puntos)
// }

// valorCarta('9D'); 


// SE PROCEDE A REDUCIR LA FUNCIÓN 

const valorCarta = ( carta ) => {
    
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN(valor)) ?
    ( valor === 'A') ? 11 : 10
    : valor * 1; 

}    

const valor = valorCarta( pedirCarta() );
console.log({ valor });