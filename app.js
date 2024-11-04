const products = [
  {
    title: "Combo BS",
    description: "Descubre nuestro combo de skin care BS para pieles suaves: limpia, tonifica, hidrata y rejuvenece tu piel con productos de alta calidad.",
    image: "./assets/combos/productosRosesAestheticNoBrand1.jpg",
    price: 29.99,
  },
  {
    title: "Combo NS",
    description: "Descubre nuestro combo de skin care NS para pieles mixtas: limpia, tonifica, hidrata y rejuvenece tu piel con productos de alta calidad.",
    image: "./assets/combos/productosRosesAestheticNoBrand2.JPG",
    price: 34.99,
  },
  {
    title: "Combo C",
    description: "Descubre nuestro combo de skin care C para pieles grasas: limpia, tonifica, hidrata y rejuvenece tu piel con productos de alta calidad.",
    image: "./assets/combos/productosRosesAestheticNoBrand3.jpg",
    price: 39.99,
  },
];

let cart = [];

// Función para agregar productos al carrito
function addToCart(productIndex) {
  const product = products[productIndex];
  cart.push(product);
  updateCartCount();
}

// Función para actualizar el contador del carrito
function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.length;
}

// Función para renderizar productos
function renderProducts() {
  const productList = document.getElementById('product-list');
  
  // Limpiar el contenido previo
  productList.innerHTML = '';

  products.forEach((product, index) => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-4', 'mb-4');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'h-100');

    const img = document.createElement('img');
    img.src = product.image;
    img.classList.add('card-img-top');
    img.alt = product.title;
    img.style.height = '200px'; // Asegúrate de que las imágenes tengan una altura fija
    img.style.objectFit = 'cover'; // Asegúrate de que la imagen se ajuste correctamente

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = product.title;

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-text');
    cardDescription.innerText = product.description;

    const cardPrice = document.createElement('p');
    cardPrice.classList.add('card-text');
    cardPrice.innerText = `$${product.price.toFixed(2)}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('btn', 'btn-primary');
    addToCartButton.innerText = 'Agregar al carrito';
    addToCartButton.onclick = () => addToCart(index);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(addToCartButton);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);
    productList.appendChild(colDiv);
  });
}

// Inicializar la aplicación
renderProducts();
