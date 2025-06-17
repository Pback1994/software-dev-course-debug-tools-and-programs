const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 },
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    // Bug: Change <= to be <
    total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (discountRate !== "number" || discountRate < 0 || discountRate > 1) {
    console.log("Invalid discount rate. Please enter a valid rate!");
    return total;
  }
  return total - total * discountRate; // Bug: Added validation for discountRate
}

function generateReceipt(cartItems, total) {
  if (total === NaN) {
    console.log(
      `Invalid, total is not a number. We cannot generate a receipt!`
    );
    return `Error generating a receipt!`;
  }
  let receipt = "Items:\n";
  cartItems.forEach((item) => {
    receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: Added if stmt to check if total is a number.
  return receipt;
  debugger;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
