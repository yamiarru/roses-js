
const products = [
    {
      title: "Combo BS",
      description: "Descubre nuestro combo de skin care BS para pieles suaves.",
      price: 29.99,
    },
    {
      title: "Combo NS",
      description: "Descubre nuestro combo de skin care NS para pieles mixtas.",
      price: 34.99,
    },
    {
      title: "Combo BB",
      description: "Descubre nuestro combo de skin care BB para todo tipo de piel.",
      price: 39.99,
    },
  ];
  
  let cart = [];
  
  
  function addToCart(productIndex) {
    const product = products[productIndex];
    const confirmation = confirm(`¿Quieres agregar ${product.title} al carrito por $${product.price}?`);
    if (confirmation) {
      cart.push(product);
      alert(`${product.title} ha sido agregado al carrito.`);
      console.log(cart); 
    } else {
      alert(`No se agregó ${product.title} al carrito.`);
    }
  }
  

  function displayProducts() {
    products.forEach((product, index) => {
      console.log(`Producto ${index + 1}: ${product.title}`);
      console.log(`Descripción: ${product.description}`);
      console.log(`Precio: $${product.price}`);
      const shouldAdd = confirm(`¿Quieres agregar ${product.title} al carrito?`);
      if (shouldAdd) {
        addToCart(index);
      }
    });
  }
  
 
  function checkout() {
    if (cart.length > 0) {
      const summary = cart.map(item => item.title).join(", ");
      alert(`Has comprado: ${summary}. ¡Gracias por tu compra!`);
      cart = []; 
    } else {
      alert("Tu carrito está vacío.");
    }
  }
  
 
  displayProducts();
  const proceedToCheckout = confirm("¿Quieres proceder a la compra?");
  if (proceedToCheckout) {
    checkout();
  }
  