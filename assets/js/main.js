function submitOrder() {
  const customerName = document.getElementById("nameInput").value;
  const drink = document.getElementById("drinkSelect").value;
  const orderList = document.getElementById("ordersUl");

  const neworder = document.createElement("li")
  neworder.innerText = `👤 ${customerName} - 🍹 ${drink}`;
  orderList.appendChild(neworder)
}
