let ataqueJugador = ""
let ataquePC = ""


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)


   ataqueEnemigo()
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador =  document.getElementById('mascota-jugador')
    let spanMascotaEnemigo =  document.getElementById('mascota-enemigo')
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else (alert("Selecciona una mascota"))
    
    seleccionarMascotaEnemigo()
}

function ataqueEnemigo() {
    ataquePcAleatorio = aleatorio(1, 3)

    if (ataquePcAleatorio == 1) {
        ataquePC = 'FUEGO'
        } else if(ataquePcAleatorio == 2) {
            ataquePC = 'AGUA'
        } else {
            ataquePC = 'TIERRA'
        }
        combate()
        
}

function combate() {
    
    if (ataquePC == ataqueJugador) {
        crearMensaje("EMPATE")
    }
    else if(ataqueJugador == 'FUEGO' && ataquePC == 'TIERRA') {
      //  triunfos = triunfos + 1
        crearMensaje("GANASTE")
    } else if(ataqueJugador == 'AGUA' && ataquePC == 'FUEGO') {
      //  triunfos = triunfos + 1
      crearMensaje("GANASTE")
    } else if(ataqueJugador == 'TIERRA' && ataquePC == 'AGUA') {
      //  triunfos = triunfos + 1
      crearMensaje("GANASTE")
    }
        else { 
        crearMensaje("PERDISTE!")
     //   perdidas = perdidas + 1
}
}

function crearMensaje(resultadoCombate) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ". La mascota del enemigo atacó con " + ataquePC  + " - " + resultadoCombate + " 🎉🎉"

    sectionMensajes.appendChild(parrafo)
}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodogue'
        } else if(ataqueAleatorio == 2) {
            spanMascotaEnemigo.innerHTML = 'Capipepo'
        } else {
            spanMascotaEnemigo.innerHTML = 'Ratigueya'
        }

}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueEnemigo()
}



window.addEventListener('load', iniciarJuego)