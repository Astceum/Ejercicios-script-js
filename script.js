
//Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”. (pantalla) 
//alert("Hola mundo")


//Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).(pantalla)
//document.write("hola mundo")


//Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.(consola)
//console.log(3+5)


//Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”(pantalla)
/*let nombre = prompt("indicar nombre")
alert(`Hola ${nombre}`)*/


//Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.(consola)
/*let num1 = prompt("primer numero")
let num2 = prompt("segundo nummero")
console.log(`La suma de ${num1} y ${num2} es = ${parseInt(num1) + parseInt(num2)}`)*/


//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.(consola)
/*function numeroMayor(num1,num2) {
    if (num1 > num2){
        console.log(`el numero mayor es ${num1}`)
    }else{
        console.log(`El numero mayor es ${num2}`)
    }
}/numeroMayor(6,3)*/



//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.(consola)
/*function numeroMayor(){
    let num1 = prompt("primer numero")
    let num2 = prompt("segundo numero")
    let num3 = prompt("tercer numero")
        if (num1 > num2 && num1 > num3){
            console.log(`el numero mayor es ${num1}`)
        }else{
        if (num2 > num1 && num2 > num3){
            console.log(`el numero mayor es ${num2}`)
        }else{
            if (num3 > num1 && num3 > num2){
                console.log(`el numero mayor es ${num3}`)
        }
    }
}
}
numeroMayor()*/


//Escribe un programa que pida un número y diga si es divisible por 2(consola)
/*let num = prompt("ingrese numero")
    if(num % 2 === 0){
        console.log(`${num} es divisible por 2`)
    }else{
        console.log(`${num} no es divisible por 2`)
    }*/



//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a(pantalla)
/*function palabra (cadena){
    let contadorA = 0
    for(let i = 0; i<= cadena.length; i++){
        if(cadena.toLowerCase()[i]== "a"){
            contadorA++

        }
    }
    alert(`la cantidad de "a" es igual ` + contadorA)


}
palabra("CALaMALaLA")*/
