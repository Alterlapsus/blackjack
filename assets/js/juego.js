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

    return '2C';
}

