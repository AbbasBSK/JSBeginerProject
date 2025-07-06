


const pizzaPromise = new Promise((resolve , reject)=>{
  let isReady = false

  if(isReady){
     resolve('پیتزای شما آماده شد!');
  }else{
     reject('پیتزای شما لغو شد!');
  }
})

pizzaPromise .then((message)=>{
  console.log("موفقیت:", message);
}).catch((error)=>{
console.log("خطا:", error);
})












































// const pizzaPromise = new Promise((resolve, reject) => {
//   const isPizzaReady = true;

//   if (isPizzaReady) {
//     resolve("🍕 پیتزای شما آماده است!");
//   } else {
//     reject("❌ سفارش شما لغو شد.");
//   }
// });

// // گرفتن نتیجه با then و catch
// pizzaPromise
//   .then((message) => {
//     console.log("موفقیت:", message);
//   })
//   .catch((error) => {
//     console.log("خطا:", error);
//   });