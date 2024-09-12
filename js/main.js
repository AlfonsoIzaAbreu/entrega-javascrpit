function despedirse(){
    console.log("hasta luego a las ordenes")
}




const colorModeButton = document.querySelector("#color-mode")
const body = document.body
const header = document.querySelector("titulo")

colorModeButton.addEventListener("click", cambiarModoColor)

function cambiarModoColor() {
    body.classList.toggle("dark-mode")
    titulo.classList.toggle("dark-mode")
}


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
    hamburguesasContainer.innerHTML = "";

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

            localStorage.setItem("cartBurguers",JSON.stringify(cartburguers))
            
        }
    })
}

let input = document.getElementById("search")
input.onchange = () => {
    const element = hamburguesas.find((hamburguesa) => hamburguesa.nombre === input.value)
    console.log(element)
}

const handleSearch = () => {
    const searchTerm = input.value.toLowerCase()
    const filteredProducts = hamburguesas.filter((hamburguesa) => hamburguesa.nombre.toLowerCase().startsWith(searchTerm));
    renderBurguers(filteredProducts)
}

input.addEventListener("input", handleSearch)






















// let counter = document.getElementById("counter")
// let sumar =  document.getElementById("plus-button")
// let restar =  document.getElementById("minus-button")
// let contador = 0


// sumar.onclick = () => {
//     contador ++
//     counter.innerHTML = contador
//     restar.disabled = false
// }
// restar.onclick = () => {
//     if (contador === 0){
//         restar.disabled = true
//     }else {
//         contador --
//         counter.innerHTML = contador
//     }
// }
// let dolares = parseInt=(prompt("Calcula el precio de tu pedido en pesos"))

// const convertidor = dolares => console.log (dolares*41)

// console.log(convertidor(dolares))
