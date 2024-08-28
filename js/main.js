function despedirse(){
    console.log("hasta luego a las ordenes")
}

const hamburguesa1 = {
	nombre: "bacon",
	tipo: "doble",
	precio: 5
}
const hamburguesa2 = {
	nombre: "big mc",
	tipo: "simple",
	precio: 3.5
}

const hamburguesa3 = {
	nombre: "cheddar melt",
    tipo: "doble",
	precio: 5
}

const hamburguesa4 = {
	nombre: "cheseeburger",
	tipo: "triple",
	precio: 5.5
}
const menu = [hamburguesa1, hamburguesa2, hamburguesa3, hamburguesa4]

console.log(menu)

	pregunta=prompt("van a comer hamburguesas? (si/no)")

	if(pregunta == "si" ) {
		alert("bien, que las disfruten")
	}else {
		alert("es unicamente una hamburgueseria")
	}

do {
	pregunta=parseInt(prompt("cuantos son para comer?"))

	if(pregunta <= 5 ) {
		alert("podes reservar aqui")
	}else {
		alert("solo nos queda una mesa de 5 personas")
	}
} while (pregunta >= 6)

let continuar = true
    while (continuar) {
        let consultas = parseInt(prompt("ingrese: \n 1 para ver las hamburguesas \n 2- para ver la ubicacion  \n 3- para reservar  \n otro numero para salir"))

        switch(consultas) {
        case 1:
            console.log("El precio de las hamburguesas esta en dolares")
            console.log (menu)
            break
        case 2:
            console.log("la blanqueada 271")
            break
        case 3:
            console.log("reserva tu lugar de jue a dom, hasta las 10pm.")
            break
        default:
            console.log(despedirse())
            break
        }
        
        let confirmacion = prompt ("desea hacer otra consulta? (SI/NO)").toLowerCase()
        if(confirmacion == "no") {
            continuar = false
            console.log("gracias!") 
        }
    }


let dolares = parseInt=(prompt("Convertidor de dolar a peso uruguayo"))

const convertidor = dolares => console.log (dolares*41)

console.log(convertidor(dolares))


        





