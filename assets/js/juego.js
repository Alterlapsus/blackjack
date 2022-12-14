( () => {
    'use strict'

        /**
     * 2C = Two of clubs (Tréboles)
     * 2D = Two of Diamonds (Diamantes)
     * 2H = Two of Hearts (Corazones)
     * 2S = Two of Spades (Espadas)
     */

    let deck         = [];
    const tipos      = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];

    // Jugadores

    // let puntosJugador = 0, 
    //     puntosComputadora = 0;

    let puntosJugadores = []; 

    // referencias del HTML 
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugador      = document.querySelector('#jugador-cartas'),
          divCartasComputadora  = document.querySelector('#computadora-cartas'),
          puntosHTML            =  document.querySelectorAll('small');

    
    // Está función inicializa el juego
    const inicializarJuego = (numJugadores = 2) =>{
            deck = crearDeck();
            for(let i = 0; i < numJugadores; i++){
                puntosJugadores.push(0);
            }
            
         
    }

    // esta función crea un nuevo deck (baraja)
    const crearDeck = () => {

        deck = [];
        for( let i = 2; i <= 10; i++){
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
        return  _.shuffle( deck );
    }

    

    // i es igual a dos, parte del dos, variable i tiene que ser mayor o igual a 10, ya que habrán 10 cartas, i++ para que aumente 1 carta a la vez,

    // for of, se le dio un let tipo of tipos, deck.push i + tipo


    // Está funcion me permite tomar una carta de la deck

    const pedirCarta = () => {

        if (deck.length === 0){
            throw 'No hay cartas en el deck';
            // mostrará un erro en consola y ya no ejecutará el código 
        }

        // const carta = deck.pop(); //.pop(); elimina el último elemento del arreglo y lo regresa 


        // console.log(deck);
        // console.log(carta); // carta debe de ser de la baraja
        return deck.pop();

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

    // ======================================================//
    
    //   Turno: 0 = primer jugador y el último será la computadora.   
    
    const acumularPuntos = ( carta, turno ) => {
        
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
        
    }

        // SE PROCEDE A REDUCIR LA FUNCIÓN 

     const valorCarta = ( carta ) => {
        
        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN(valor)) ?
        ( valor === 'A') ? 11 : 10
        : valor * 1; 

    }    
    
    // turno de la computadora
    
    
    const turnoComputadora = ( puntosMinimos) => {
        
        do{
            
            const carta = pedirCarta();
            acumularPuntos( carta, puntosJugadores.length - 1 );
            
            
            // puntosComputadora = puntosComputadora + valorCarta( carta );
            // puntosHTML[1].innerText = puntosComputadora;
            
            // <img class="carta" src="assets/cartas/2C.png" alt="">
            
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`;
            imgCarta.classList.add('carta');
            divCartasComputadora.append( imgCarta );
            
            
            if(puntosMinimos > 21){
                break;
            }
            
        }while( puntosComputadora < puntosMinimos && (puntosMinimos <= 21 ));
        
        setTimeout(() => {
            
            
        if( puntosComputadora === puntosMinimos ){
            alert('Nadie gana: (');
        }else if ( puntosMinimos > 21 ){
            alert('Computadora gana');
        } else if ( puntosComputadora > 21 ){
            alert('Jugador Gana');
        }else{
            alert('Computadora gana');
        }
        
    }, 20); 
}






    //eventos 
    btnPedir.addEventListener('click', ()=> {
        
        const carta = pedirCarta();
        const puntosJugador =  acumularPuntos( carta, 0 );
        
        // puntosJugador = puntosJugador + valorCarta( carta );
        // puntosHTML[0].innerText = puntosJugador;
        
        // <img class="carta" src="assets/cartas/2C.png" alt="">
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append( imgCarta );
        
        
        // controlar las partes de los puntos 
        
        if( puntosJugador > 21){
            console.warn('Has perdido')
            btnPedir.disabled   = true; 
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
            
            
        }else if( puntosJugador === 21){
            console.warn('Has Ganado Felicidades');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);

        }
        
    });

    
    btnDetener.addEventListener('click', () =>  {
        
        btnPedir.deisabled = true; 
        btnDetener.disabled = true;
        
        turnoComputadora( puntosJugador );
    });

    btnNuevo.addEventListener('click', () => {
        
        console.clear();
        inicializarJuego();
        
        // deck = [];
        // deck = crearDeck();
        
        // puntosJugador       = 0; 
        // puntosComputadora   = 0;
        
        puntosHTML[0].innerText   = 0; 
        puntosHTML[1].innerText   = 0;
        
        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';
        
        btnPedir.disabled   = false;
        btnDetener.disabled = false;
        
        
    });

})();
