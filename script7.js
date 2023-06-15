//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.(consola)
function numeroMayor(){
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
numeroMayor()
