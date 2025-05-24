let shoppingCart = [];
const pizzaContainer = document.getElementById('pizzaContainer');
const veggieContainer = document.getElementById('vegetarContainer');
const calzoneContainer = document.getElementById('calzoneContainer');
const drinkContainer = document.getElementById('drinkContainer');

function init() {
  const storedCart = localStorage.getItem('shoppingCart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  
  renderMenu();
  renderShoppingCart();
}

function clearContainers(...containerIDs) {
  containerIDs.forEach(function (id) {
    const container = document.getElementById(id);
    if (container) {
      container.innerHTML = '';
    }
  });
}

function renderMenu() {
  clearContainers(
    'pizzaContainer',
    'vegetarContainer',
    'calzoneContainer', 
    'drinkContainer'
  );

  for (let i = 0; i < menuDishes.length; i++) {
    const menuDish = menuDishes[i];
    const dishHTML = generatePostsDishes(i, menuDish);

    if (menuDish.meal_type === 'pizza') {
      pizzaContainer.innerHTML += dishHTML;
    } else if (menuDish.meal_type === 'vegetarian') {
      veggieContainer.innerHTML += dishHTML;
    } else if (menuDish.meal_type === 'calzone') {
      calzoneContainer.innerHTML += dishHTML;
    } else if (menuDish.meal_type === 'drink') {
      drinkContainer.innerHTML += dishHTML;
    }
  }
}

function generatePostsDishes(i, menuDish) {
  return `
    <div onclick="addToShoppingCart(${i})" class="eat_container">
    <div class="menu_and_price">
        <div>
            <h4>${menuDish.mealName}</h4>
            <p>${menuDish.mealDescription}</p>
        </div>
        <div>
            <h4>${menuDish.mealPrice} €</h4>
        </div>
    </div>
    <div class="pizza_mini_img">
        <img src="${menuDish.mealImage}" alt="${menuDish.mealName}">
    </div>
    <div class="add_to_shop">
        <img src="./img/plus-solid.svg" alt="plusButton">
    </div>
</div>
    `;
}

function renderShoppingCart() {
  let shoppingCartContainer = document.getElementById('deliveryContainer');
  let payContainer = document.getElementById('payContainer');
  shoppingCartContainer.innerHTML = '';
  payContainer.innerHTML= '';

  if (shoppingCart.length === 0) {
    addPlaceholder();
    return; 
  } else {
    removePlaceholder();
    updateCartCounter();
  }

  shoppingCart.forEach((cartDish, i) => {
    shoppingCartContainer.innerHTML += generateShoppingCartHTML(i, cartDish);
  });
  payContainer.innerHTML += generateDeliveryCosts();
}

function generateShoppingCartHTML(i, cartDish) {
  return `
  <div class="one_of_delivery">
      <div class="amount_name_price">
        <div class="amount">        
          <p>${cartDish.quantity}</p>
        </div>
        <div  class="name">
          <p>${cartDish.mealName}</p>
        </div>
        <div  class="price">        
          <p>${cartDish.mealPrice.toFixed(2).replace('.', ',')} €</p>
        </div>
      </div>
      <div class="how_mutch">
           <img class="cursor_pointer" onclick="removeOneDish(${i})" src="./img/icon/minus-solid.svg" alt="minusIcon">
           <p>${cartDish.quantity}</p>
           <img class="cursor_pointer" src="./img/icon/plus-solid.svg" alt="plusIcon" onclick="addToShoppingCart(${menuDishes.findIndex(dish => dish.mealName === cartDish.mealName)})">
      </div>
  </div>
        `;
}

function calculateCartTotals() {
  let subtotal = 0;
  shoppingCart.forEach(item => {
    subtotal += item.totalPrice; 
  });

  let deliveryCosts = subtotal >= 20 ? 0 : 5;
  let total = subtotal + deliveryCosts;
  
  return { subtotal, deliveryCosts, total };
}

function generateDeliveryCosts() {
  const { subtotal, deliveryCosts, total } = calculateCartTotals();

  return `
    <div class="pay_delivery">
      <div class="space_between">
         <p>Zwischensumme</p>
         <p>${subtotal.toFixed(2).replace('.', ',')} €</p>
       </div>
       <div class="space_between">
         <p>Lieferkosten</p>
         <p>${deliveryCosts === 0 ? 'Kostenlos' : deliveryCosts.toFixed(2).replace('.', ',') + ' €'}</p>
       </div>
       <div class="space_between">
         <p>Gesamt</p>
         <p>${total.toFixed(2).replace('.', ',')} €</p>
       </div>
       <button onclick="thankYou()" class="cursor_pointer">Bezahlen (${total.toFixed(2).replace('.', ',')}) €</button>
    </div>
  `;
}

// NEU: Warenkorb-Zähler aktualisieren
function updateCartCounter() {
  const totalItems = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
  const mark = document.getElementById('mark');
  
  if (totalItems > 0) {
    mark.textContent = totalItems;
    mark.classList.remove('d_none');
  } else {
    mark.classList.add('d_none');
  }
}

// NEU: Feedback-Nachricht anzeigen
function showFeedback(mealName) {
  const feedback = document.createElement('div');
  feedback.className = 'feedback_message';
  feedback.textContent = `${mealName} hinzugefügt`;
  document.body.appendChild(feedback);
  
  setTimeout(() => feedback.classList.add('show'), 10);
  setTimeout(() => {
    feedback.classList.remove('show');
    setTimeout(() => document.body.removeChild(feedback), 300);
  }, 2000);
}

function addToShoppingCart(i) {
  removePlaceholder();

  let meal = menuDishes[i];
  let price = parseFloat(meal.mealPrice.replace(',', '.'));
  let index = shoppingCart.findIndex((item) => item.mealName === meal.mealName);

  if (index === -1) {
    shoppingCart.push({
      mealName: meal.mealName,
      mealPrice: price,
      quantity: 1,
      totalPrice: price
    });
  } else {
    shoppingCart[index].quantity++;
    shoppingCart[index].totalPrice = shoppingCart[index].quantity * price;
  }
  
  renderShoppingCart();
  saveCartToLocalStorage();
  updateCartCounter(); // GEÄNDERT: Zähler aktualisieren
  showFeedback(meal.mealName); // NEU: Feedback anzeigen
}

function removeOneDish(i) {
  if (shoppingCart[i].quantity > 1) {
    shoppingCart[i].quantity--;
    shoppingCart[i].totalPrice -= shoppingCart[i].mealPrice;
  } else {
    shoppingCart.splice(i, 1);
  }
  if (shoppingCart.length === 0) {
    addPlaceholder();
  }
  renderShoppingCart();
  saveCartToLocalStorage();
  updateCartCounter(); // GEÄNDERT: Zähler aktualisieren
}

function addPlaceholder() {
  let placeholder = document.getElementById('deliveryPlaceholder');
  if (placeholder) {
    placeholder.classList.remove('d_none');
  }
}

function removePlaceholder() {
  let placeholder = document.getElementById('deliveryPlaceholder');
  if (placeholder) {
    placeholder.classList.add('d_none');
  }
}

function openShoppingCart() {
  document.getElementById('smallShoppingCartClosed').classList.add('d_none');
  document.getElementById('smallShoppingCartOpen').classList.remove('d_none');
}

function closeShoppingCart() {
  document.getElementById('smallShoppingCartClosed').classList.remove('d_none');
  document.getElementById('smallShoppingCartOpen').classList.add('d_none');
}

function thankYou(){
  document.getElementById('thankYou').classList.remove('d_none');
  let shoppingCartContainer = document.getElementById('deliveryContainer');
  shoppingCartContainer.innerHTML = '';
  payContainer.innerHTML= '';
  addPlaceholder();
  setTimeout(newStart, 2000);
}

function newStart(){
  document.getElementById('thankYou').classList.add('d_none');
  shoppingCart = [];
  saveCartToLocalStorage();
  updateCartCounter(); // NEU: Zähler zurücksetzen
}

function cancelShoppingCart(){
  document.getElementById('cancelShoppingCart').classList.toggle('d_none');
}

function saveCartToLocalStorage() {
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}