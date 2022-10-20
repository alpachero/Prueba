            function aleatorio(min, max) {
                return Math.floor(Math.random() * (max-min+1)+min)
            }
            
            function eleccion(jugada) {
                let resultado = ""
                if(jugada==1) {
                    resultado = "Piedra 🥌"}
                else if(jugada==2) {
                    resultado = "Papel 🧻"}
                else if(jugada==3) {
                    resultado = "Tijera ✂"}
                else {
                    resultado = "Elegiste Mal"}
                
                    return resultado
            }

            function combate(resucom) {
                if (pc==jugador) {
                    alert("EMPATE")
                }
                else if(jugador==1 && pc==3) {
                    triunfos = triunfos + 1
                    alert("GANASTE")
                } else if(jugador==2 && pc==1) {
                    triunfos = triunfos + 1
                    alert("GANASTE")
                } else if(jugador==3 && pc==2) {
                    triunfos = triunfos + 1
                    alert("GANASTE")}
                    else {alert("PERDISTE!")
                    perdidas = perdidas + 1
                }
            }

        // 1 es piedra, 2 es papel y 3 es tijera
        let jugador = 0
        let pc = 0
        let triunfos = 0
        let perdidas = 0

        
        while (triunfos < 3 && perdidas < 3) {
            pc = aleatorio(1, 3)
            jugador = prompt("Elije 1 Piedra, 2 Papel y 3 Tijera")
            
                //alert("Elegiste " + jugador)
                alert("PC Elije: " + eleccion(pc))
                alert("Tu Elejiste: " + eleccion(jugador))
                
                //combate
                combate()
                
            alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces")

        }