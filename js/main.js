const imgPath = './img/';
// Get Current Day in Calendar
getCurrentDate();

function getCurrentDate(){
   let dayIx = new Date().getDay(); // 0 is Sunday
   dayIx = dayIx === 0 ? 6 : dayIx - 1; // Monday (0) is first in week

   let rows = document.querySelector('#calendar').querySelectorAll('tbody tr');
   let rowIx = 0;
   rows.forEach(row => {
      if (rowIx === dayIx)
      row.classList.toggle('table-success');
      rowIx++;
   })
}

// Promotions JSON data to fetch on page
fetch('./data/promotions.json')
  .then(response => response.json())
  .then(data => {
    let ix = 1;
    const cardsPromotions = document.body.querySelector('#promotions');
    data.products.forEach(product => {
      cardsPromotions.innerHTML += loadPromotionCards(product.id, 
                        product.description, 
                        product.price, 
                        product.image);
      
      if (ix%3 === 0){
         cardsPromotions.innerHTML += `
                                       <div class="w-100 d-none d-md-block"></div>
                                       `;
      }
      ix++;
    });
  })
  .catch(error => {
    console.error('Error fetching the data: ', error);
  });

function loadPromotionCards(id, description, price, image){
   return `<div class="col-6 col-sm-4">
            <div class="card card-product">
               <a href="./product.html">
                  <img src="${imgPath}${image}" class="card-img-top" alt="promo">
               </a>
               <div class="card-body">
                  <p class="card-price">$${price}</p>
                  <p class="card-item">${description}</p>
                  <button class="btn btn-success card-add" value="${id}">Agregar</button>
                  <div class="card-qty" hidden="true">
                        <label class="card-qty-label" for ="qty">Cant:</label>
                        <input class="input-group-text card-qty-input" type="number" value="1" name="qty" max="100">
                        <button class="btn btn-danger card-qty-delete"><i
                           class="fa-solid fa-trash-can"></i></button>
                  </div>
               </div>
            </div>
         </div>`
}

// New Arrivals JSON data to fetch on page
fetch('./data/newArrivals.json')
  .then(response => response.json())
  .then(data => {
    const arrivals = document.body.querySelector('#carousel-inner');
    data.newArrivals.forEach(newArrival => {
      arrivals.innerHTML += loadArrivals(newArrival.id, 
                                       newArrival.description, 
                                       newArrival.price, 
                                       newArrival.image);
    });
  })
  .catch(error => {
    console.error('Error fetching the data: ', error);
  });

function loadArrivals(id, description, price, image){
   return `<div class="carousel-item active">
               <a href="./product.html">
                  <img src="${image}" class="d-block w-100" alt="${description}">
               </a>
               <div class="carousel-caption d-none d-md-block">
               <h4>${description}</h4>
               <p class="regular">$${price}</p>
            </div>`
}

// Add to Cart
const shoppingCart = [];
// let botonesAgregar = document.querySelectorAll(".card-add");

// botonesAgregar.forEach(button => {
//    button.addEventListener('click', () => {
//    shoppingCart.push(new Producto(button.value));
//    alert("Producto agregado " + " " + shoppingCart[shoppingCart.length - 1].name);
//    });
// });



// WIP
document.addEventListener('DOMContentLoaded', function() {
   //Select Promotions div
   const promotions = document.getElementById('promotions');
   
   // Select all card elements
   const cards = promotions.querySelectorAll('.card-product');
   // Iterate over each card
   cards.forEach(function(card) {
      // Select elements within each card
      let addButton = card.querySelector('.card-add');
      let saveButton = card.querySelector('.card-qty-save');
      let deleteButton = card.querySelector('.card-qty-delete');

      const cardQtyDiv = card.querySelector('.card-qty');
      // Add event listener to the button in each card
      addButton.addEventListener('click', function() {
      // Hide the button
      addButton.classList.add('.hidden');
      // Make the corresponding card-qty div visible
      cardQtyDiv.removeAttribute('hidden');
      
      });

      // saveButton.addEventListener('click', function() {
      //    addButton.removeAttribute('hidden');
      //    cardQtyDiv.setAttribute('hidden', 'true');
      // });

      deleteButton.addEventListener('click', function() {
         addButton.removeAttribute('hidden');
         cardQtyDiv.setAttribute('hidden', 'true');
      });
   });
});


class Producto{
   constructor(id, description, price){
      this.id = parseInt(id);
      this.description = description;
      this.price = parseFloat(price).toFixed(2); //price;
   }
}

// const itemList = document.getElementById('items-list');
// for(product of shoppingCart){
//    let li = document.createElement('li');
//    li.innerHTML = `ID: ${product.id} - ${product.name} - Precio: $${product.price}`;
//    itemList.appendChild(li);
// }

// console.log(shoppingCart);

// botonesAgregar.addEventListener('click', switchCounter);

//ToDo - Implement ReCaptcha
// function onClick(e) {
//    e.preventDefault();
//    grecaptcha.enterprise.ready(async () => {
//    const token = await grecaptcha.enterprise.execute('6LfxQfopAAAAAKZVKzth87qPOlT6wcXLujX7bqJ7', {action: 'LOGIN'});
//    });
// }