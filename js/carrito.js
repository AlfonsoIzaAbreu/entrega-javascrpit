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

const botonComprar = document.querySelector('.botonComprar')
botonComprar.addEventListener('click', comprar)

async function comprar(){
    cartContainer.innerHTML = '';
   
    const { value: email } = await Swal.fire({
        title: "INGRESE SU EMAIL",
        input: "email",
        inputLabel: "Un agente se contactara para continuar con la compra",
        inputPlaceholder: "ejemplo@gmail.com"
      });
      if (email) {
        Swal.fire(`Te contactaremos a tu mail: ${email}`);
    
      }
   
}
