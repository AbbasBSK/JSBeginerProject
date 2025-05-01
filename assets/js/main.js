const orderList = document.getElementById("ordersUl");
const drinkText = document.getElementById("drinkText");
const errorBox = document.getElementById("errorMsg");
const customerName = document.getElementById("nameInput");
const drink = document.getElementById("drinkSelect");

function submitOrder() {
  const customerNameValue = customerName.value.trim();
  const drinkValue = drink.value;

  if (customerNameValue === "" || !drinkValue) {
    errorBox.innerText  = "لطفاً نام و نوشیدنی \nرا وارد کنید!";
    return;
  } 
  errorBox.textContent = ""
  drinkText.innerText = `انتخاب شما: ${drinkValue}`;
  
  // ایجاد یک آیتم لیست جدید
  const newOrder = document.createElement("li");
  newOrder.innerText = `👤 ${customerNameValue} - 🍹 ${drinkValue}`;
  orderList.appendChild(newOrder);

  // orderList.innerHTML = `<li>👤 ${customerNameValue} - 🍹 ${drinkValue}</li>`
  

    // پاک کردن ورودی‌ها
    customerName.value = "";
    drink.value = "";
  
}

function toggleTheme() {
  const card = document.getElementById("drinkCard");
  card.classList.toggle("dark");
}

function reset() {
  // orderList.innerHTML = ""
  orderList.replaceChildren();
}
