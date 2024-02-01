let arreglo = []
let cambiarBoton = 0

function boton(botonDescifrar) {
    let texto = document.getElementById("textoEnpantalla")
    let palabra = document.getElementById("textoAcifrar").value 
    let palabra2 = document.getElementById("textoAcifrar").value
    
    if(palabra.toLowerCase() === palabra && !caracteres(palabra)) {
        if(botonDescifrar == 1) {
            let nuevaPalabra = ""
            let contador = 0;
        
            while(contador < palabra.length) {
                if(palabra.charAt(contador) == " ") {
                    nuevaPalabra += " "
                }else if(palabra.charAt(contador) == "a") {
                    nuevaPalabra += "ai"
                }else if(palabra.charAt(contador) == "e") {
                    nuevaPalabra += "enter"
                }else if(palabra.charAt(contador) == "i") {
                    nuevaPalabra += "imes"
                }else if(palabra.charAt(contador) == "o") {
                    nuevaPalabra += "ober"
                }else if(palabra.charAt(contador) == "u") {
                    nuevaPalabra += "ufat"
                } else {
                    nuevaPalabra += palabra.charAt(contador)
                }
                    contador++;
            }
            texto.innerHTML = nuevaPalabra
            arreglo[0] = nuevaPalabra
            cambiarBoton = 1
        }
        
    }


    if(palabra2.toLowerCase() === palabra2 && !caracteres(palabra)) {
        if(botonDescifrar == 2) {
            let nuevaPalabra2 = ""
            let copia = ""
            let lista = []
    
                for(let i = 0; i < palabra2.length; i++) {
                    for(let j = i; j < (i + 4); j++) {
                        copia += palabra2.charAt(j)
                        if(copia == "ober") {
                            for(let z = (j - 2); z <= j; z++) {
                                lista[z] = "%"
                            }
                        }
                    }
                    copia = ""
                    for(let j = i; j < (i + 2); j++) {
                        copia += palabra2.charAt(j)
                        if(copia == "ai") {
                            for(let z = (j); z <= j; z++) {
                                lista[z] = "%"
                            }
                        }
                    }
                    copia = ""
                    for(let j = i; j < (i + 4); j++) {
                        copia += palabra2.charAt(j)
                        if(copia == "ufat") {
                            for(let z = (j - 2); z <= j; z++) {
                                lista[z] = "%"
                            }
                        }
                    }
                    copia = ""
                    for(let j = i; j < (i + 4); j++) {
                        copia += palabra2.charAt(j)
                        if(copia == "imes") {
                            for(let z = (j - 2); z <= j; z++) {
                                lista[z] = "%"
                            }
                        }
                    }
                    copia = ""
                    for(let j = i; j < (i + 5); j++) {
                        copia += palabra2.charAt(j)
                        if(copia == "enter") {
                            for(let z = (j - 3); z <= j; z++) {
                                lista[z] = "%"
                            }
                        }
                    }
                    copia = ""
                    
                }
            
                for(let i = 0; i <= lista.length; i++) {
                    
                    if(lista[i] != "%") {
                        nuevaPalabra2 += palabra2.charAt(i)
                    } 
    
                    if(lista.length == 0) {
                        nuevaPalabra2 = ""
                    }
                }
                texto.innerHTML = nuevaPalabra2
                arreglo[1] = nuevaPalabra2
                cambiarBoton = 0
        }
    }
    
}


function caracteres(letras) {
    let caracteres = [",","(","%",")","{","/","}","[",".","]",
                      ";",":","-","_","+","*","~","!","¡","¿",
                      "?","#","$","&","=","á","é","í","ó","ú","à","è","ì","ò","ù"]
    let letrasContador = 0

        for(let i = 0; i < letras.length; i++) {
            for(let j = 0; j < caracteres.length; j++) {
                if(letras.charAt(i) == caracteres[j]) {
                    letrasContador++
                } 
            }
        }
        if(letrasContador > 0) {
            return true;
        } else {
            return false;
        }

}

function cambiar() {
    if(cambiarBoton == 1) {
        let cambiarPalabra = document.getElementById("textoAcifrar")
        cambiarPalabra.value = arreglo[0]
    }

    if(cambiarBoton == 0) {
        let cambiarPalabra2 = document.getElementById("textoAcifrar")
        cambiarPalabra2.value = arreglo[1]
    }
}
