function despedirse(){
    console.log("hasta luego a las ordenes")
}


// const hamburguesas = [hamburguesa1,hamburguesa2,hamburguesa3,hamburguesa4]

// pregunta=prompt("van a comer hamburguesas? (si/no)")
// if(pregunta == "si" ) {
// 		alert("bien, que las disfruten")
// 	}else {
// 		alert("es unicamente una hamburgueseria")
// 	}

// do {

// 	pregunta=parseInt(prompt("cuantos son para comer?"))
// if(pregunta <= 5 ) {
// 		alert("podes reservar aqui")
// 	}else {
// 		alert("solo nos queda una mesa de 5 personas")
// 	}
// } while (pregunta >= 6)

// let continuar = true
//     while (continuar) {
//         let consultas = parseInt(prompt("ingrese: \n 1 para ver las hamburguesas \n 2- para ver la ubicacion  \n 3- para reservar  \n otro numero para salir"))

//         switch(consultas) {
//         case 1:
//             console.log("El precio de las hamburguesas esta en dolares")
//             console.log (hamburguesas)
//             break
//         case 2:
//             console.log("la blanqueada 271")
//             break
//         case 3:
//             console.log("reserva tu lugar de jue a dom, hasta las 10pm.")
//             break
//         default:
//             console.log(despedirse())
//             break
//         }
        
//         let confirmacion = prompt ("desea hacer otra consulta? (SI/NO)").toLowerCase()
//         if(confirmacion == "no") {
//             continuar = false
//             console.log("gracias!") 
//         }
//     }


// let dolares = parseInt=(prompt("Calcula el precio de tu pedido en pesos"))

// const convertidor = dolares => console.log (dolares*41)

// console.log(convertidor(dolares))

let counter = document.getElementById("counter")
let sumar =  document.getElementById("plus-button")
let restar =  document.getElementById("minus-button")
let contador = 0


sumar.onclick = () => {
    contador ++
}
// restar.onclick = () => {
//     if (contador === 0){
//         restar.disabled = true
//     }else {
//         contador --
//         counter.innerHTML = contador
//     }
// }

const hamburguesas = [
    {
        id: 1,
	    nombre: "bacon",
	    tipo: "doble",
	    precio: 5,
    
    },
    {
        id: 2,
	    nombre: "big mc",
	    tipo: "simple",
	    precio: 3.5
    },
    {
        id: 3,
	    nombre: "cheddar melt",
        tipo: "doble",
	    precio: 5
    },
    {
        id: 4,
	    nombre: "cheseeburger",
	    tipo: "triple",
	    precio: 5.5
    
    },
]

let cartburguers = []

let hamburguesasContainer = document.getElementById("hamburguesas-container")

function renderBurguers(burguersArray){
    burguersArray.forEach((hamburguesa) => {
    const card = document.createElement("div")
    card.innerHTML =  ` <h3>Hamburguesa: ${hamburguesa.nombre}</h3>
                        <h3>Tipo: ${hamburguesa.tipo}</h3>
                        <h4>Precio: $${hamburguesa.precio}</h4>
                        <button class="hamburguesaAgregar" id="${hamburguesa.id}">Agregar</button>`
        hamburguesasContainer.appendChild(card)
    })
    addToCartbutton ()
}
renderBurguers(hamburguesas)


function addToCartbutton () {
    addButton = document.querySelectorAll(".hamburguesaAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const burguerId = e.currentTarget.id
            const selectedBurgers = hamburguesas.find(hamburguesa => hamburguesa.id == burguerId)
            cartburguers.push(selectedBurgers)
            console.log(cartburguers)

            localStorage.setItem("cartBurguers",JSON.stringify(cartburguers))
            
        }
    })
}








let input = document.getElementById("search")
input.onchange = () => {
    const element = hamburguesas.find((hamburguesa) => hamburguesa.nombre === input.value)
    console.log(element)
}




