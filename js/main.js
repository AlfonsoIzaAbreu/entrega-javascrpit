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

let hamburguesas = [];

fetch("./db/data.JSON")
.then(response => response.json())
.then(data => {
    hamburguesas = data;
    renderBurguers(hamburguesas);
})
let hamburguesasEnCarrito;


let cartburguers = []

let hamburguesasContainer = document.getElementById("hamburguesas-container")

function renderBurguers(hamburguesas){
    hamburguesasContainer.innerHTML = "";

    hamburguesas.forEach(hamburguesa => {
    const card = document.createElement("div")
    card.innerHTML =  ` <h3>Hamburguesa: ${hamburguesa.nombre}</h3>
                        <h3>Tipo: ${hamburguesa.tipo}</h3>
                        <h4>Precio: $${hamburguesa.precio}</h4>
                        <button class="hamburguesaAgregar" id="${hamburguesa.id}">Agregar</button>`
                    hamburguesasContainer.appendChild(card)
    })
    addToCartbutton ()
}

function addToCartbutton () {
    addButton = document.querySelectorAll(".hamburguesaAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            Toastify({
                text: "Agregado al carrito",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} 
              }).showToast();

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
}

const handleSearch = () => {
    const searchTerm = input.value.toLowerCase()
    const filteredProducts = hamburguesas.filter((hamburguesa) => hamburguesa.nombre.toLowerCase().startsWith(searchTerm));
    renderBurguers(filteredProducts)
}

input.addEventListener("input", handleSearch)



