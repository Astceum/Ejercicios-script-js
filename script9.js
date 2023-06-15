//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a(pantalla)
function palabra (cadena){
    let contadorA = 0
    for(let i = 0; i<= cadena.length; i++){
        if(cadena.toLowerCase()[i]== "a"){
            contadorA++

        }
    }
    alert(`la cantidad de "a" es igual ` + contadorA)


}
palabra("CALaMALaLA")
