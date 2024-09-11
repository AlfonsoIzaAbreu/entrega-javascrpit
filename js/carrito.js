let cartStorage = localStorage.getItem("cartBurguers")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")

function renderCarrito (cartItem){
    cartItem.forEach(hamburguesa => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${hamburguesa.nombre}</h3>
                          <h4>$${hamburguesa.precio}</h4>`
        cartContainer.appendChild(card)
    })
}
renderCarrito(cartStorage)