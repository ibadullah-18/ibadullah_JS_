const products = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
  { id: 2, name: "Headphones", price: 150, category: "Electronics" },
  { id: 3, name: "Shoes", price: 90, category: "Fashion" },
  { id: 4, name: "T-shirt", price: 25, category: "Fashion" }
];

//1
const cart =[];

//2
function addToCart(productId, quantity) {
  const product = products.find(p => p.id === productId);
  if (product) {
    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity
    };
    cart.push(cartItem);
    console.log(`${quantity} ${product.name} added to cart.`);
  }
}

//3
function removeToCart(productId) {
  const index = cart.find(p => p.Id === productId);
  if(index !== -1){
    cart.splice(index, 1);
    console.log(`Product with Id: ${productId} removed from cart.`);
  }else{
    console.log(`Product with Id: ${productId} not found in cart.`);
  }

}
//4
function getCartTotal(){
    let total = 0;
    for(const item of cart){
      total += item.price * item.quantity;
    }
    console.log(`Total amount in cart: $${total}`);
    return total;
}

//5
function filterByCategory(category){
  return products.filter(p => p.category === category);
}

//6
function searchProducts(keyword){
  return products.filter(p => p.name.includes(keyword));  
}

addToCart(1, 2);
addToCart(3, 1);
addToCart(2, 4);
addToCart(4, 3);
console.log(cart);
removeToCart(1);
console.log(cart);
getCartTotal();
console.log(filterByCategory("Electronics"));
console.log(searchProducts("Shoe"));