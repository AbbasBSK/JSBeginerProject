// const orderList = document.getElementById("ordersUl");
// const drinkText = document.getElementById("drinkText");
// const errorBox = document.getElementById("errorMsg");
// const customerName = document.getElementById("nameInput");
// const drink = document.getElementById("drinkSelect");

// function submitOrder() {
//   const customerNameValue = customerName.value.trim();
//   const drinkValue = drink.value;

//   if (customerNameValue === "" || !drinkValue) 
//     errorBox.innerText = "لطفاً نام و نوشیدنی \nرا وارد کنید!";
//   else {
//     errorBox.textContent = ""
//     drinkText.innerText = `انتخاب شما: ${drinkValue}`;

//     // ایجاد یک آیتم لیست جدید
//     const newOrder = document.createElement("li");
//     newOrder.innerText = `👤 ${customerNameValue} - 🍹 ${drinkValue}`;
//     orderList.appendChild(newOrder);

//     // پاک کردن ورودی‌ها
//     customerName.value = "";
//     drink.value = "";

//   }

// }

// function toggleTheme() {
//   const card = document.getElementById("drinkCard");
//   card.classList.toggle("dark");
// }

// // function reset() {
// //   orderList.replaceChildren();
// // }

// const reset = (a) => orderList.replaceChildren();

// const test = a => a + 12

// function test(a) {
//   return a + 12
// }


// const age = 27;
// // if (age >= 18) {
// //   console.log("بزرگسال")
// // } else {
// //   console.log("نوجوان")
// // }

// age >= 18 ?  console.log("بزرگسال") : console.log("نوجوان")
const yourname = ""

// function greet(name) {
//   if (name) {
//      return `سلام ${name}!`
//     } else {
//     return "سلام کاربر ناشناس!"
//     }
// }


const greet = name =>name ?`سلام ${name}!` : "سلام کاربر ناشناس!";


console.log(greet(yourname));
 






