//JavaScript file by Mohga Elsayed 


let price = Number(document.getElementById('PriceAmount').innerText);
// cart functionality variables
let cart = document.getElementById('cartLogo');
let cartContent = document.getElementById('cartContent');
let itemsAdded = document.getElementById('number');

// product amount functionality variables
let amountCart = document.getElementById('amountCart'); 
let addBtn = document.querySelector('.addOne');
let removeBtn = document.querySelector('.removeOne');
let addToCartBtn = document.querySelector('.addToCart');
const AlertMessage = document.getElementById('myToast');

// product image functionality variables
let productImages =document.getElementsByClassName('product-image');
let mainImg = document.getElementById('img');


//show cart content when clicking on the cart logo
cart.addEventListener('click', ()=>
   {
    let currentVisibility = cartContent.style.visibility;
    if(currentVisibility === 'visible')
        cartContent.style.visibility = 'hidden';
  
    else
        cartContent.style.visibility = 'visible';
  });


  // change main product image when clicking on the small images
  let currentImageIndex = 0;
  for(let i = 0; i < productImages.length; i++)
  {
    productImages[i].addEventListener('click', ()=>
    {
      if(currentImageIndex != i)
      {
        mainImg.src = productImages[i].src;
        currentImageIndex = i;
      }
    });
  }

// a variable to keep track of the current input of products added to the cart
  let currentAmount = 0;

  addBtn.addEventListener('click',()=>
  {
    currentAmount++;
    amountCart.innerText = currentAmount;
  })

  removeBtn.addEventListener('click',()=>
  {
    if(currentAmount > 0) 
   {  currentAmount --; 
    amountCart.innerText = currentAmount;
  }
  else
  {
    currentAmount = 0;
    amountCart.innerText = currentAmount;
  }
});

// a variable to keep track of the total amount of products added to the cart
let addedProducts = 0;

addToCartBtn.addEventListener('click', ()=>
{
  let alertText = document.getElementById('pop-text');
  const toast = new bootstrap.Toast(AlertMessage, {
 autohide: true});

  if(currentAmount === 0)
  {
   alertText.innerText = "Please add products to the cart";
   toast.show();
  }
  else
  {
    // show a toast message to indicate that the products have been added to the cart
    if(currentAmount === 1)
    alertText.innerText = `${currentAmount} Product successfully added to the cart`;
    else
    alertText.innerText = `${currentAmount} Products successfully added to the cart`;
    
    toast.show();

    // update the total amount of products added to the cart and display it in the cart content
    addedProducts += currentAmount;
    itemsAdded.innerText = addedProducts;
    cartContent.innerHTML = `
    <h5>Cart</h5>
    <hr />
`;
    cartContent.innerHTML +=`
    <div class="prodcut-purchase mb-2">
      <div class="content d-flex gap-3">
        <img src="images/image-product-1.jpg" alt="product img" class="rounded-3" style="width: 50px; height: 50px;" />
        <p class="prodcut-name text-secondary m-0" style="font-size: 16px;">Fall Limited Edition Sneakers <br> ${price} $ x ${addedProducts} | <span class="text-black fw-bold">${price*addedProducts} $ </span></p>
       <div class="mt-4">
        <img src="images/icon-delete.svg" id="deleteIcon" onclick="deleteProducts()">
        </div>
      </div>
    </div>
     <button id="checkOut" class="btn fw-bold" style="  background: hsl(26, 100%, 55%); font-size: 14px;">Checkout</button>`;
     currentAmount = 0;
     amountCart.innerText = currentAmount;
  }
});

// a function to delete all products from the cart
function deleteProducts(){
  addedProducts = 0; 
  itemsAdded.innerText = addedProducts;
   cartContent.innerHTML = `
    <h5>Cart</h5>
    <hr />
`;
}

