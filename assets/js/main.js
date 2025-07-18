

// -----------------------


function getCoffee() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("☕ قهوه آماده شد");
      resolve("قهوه");
    }, 2000);
  });
}


async function startDay() {
  console.log("🔹 صبحانه می‌خورم");

  let coffee;
  try {
    coffee = await getCoffee();
  } catch (err) {
    console.log("❌ نتونستم قهوه بگیرم:", err.message);
    return; // اگه قهوه نگرفتی، ادامه نده
  }

  console.log("🔹 حالا که " + coffee + " گرفتم، میرم سر کار");
  console.log("🔹 رفتم سر کار");
}

startDay()



// ------------------


async function getData() {
  try {
    a + b
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("کاربران:", data);
  } catch (error) {
    console.log("یه خطا در واکشی اطلاعات رخ داد:", error.message);
  }
}
getData()










// ReferenceError	وقتی به چیزی اشاره کنی که تعریف نشده
// TypeError	وقتی نوع (type) اشتباه استفاده بشه (مثلاً null.length)
// SyntaxError	کدی که از نظر گرامر JS اشتباهه (مثل پرانتز ناقص)
// RangeError	مقدار عددی بیرون از محدوده مجاز باشه
// EvalError	خطای خاص مربوط به eval()
// URIError	خطای آدرس‌دهی در encode/decode URI



