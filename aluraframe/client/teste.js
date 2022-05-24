let numeros = [3,2,11,20,8,7]

numeros.map((numero) => {
    if(numero % 2 != 0) {
        console.log(numero * 2)
        return
    }
    console.log(numero)
}) 