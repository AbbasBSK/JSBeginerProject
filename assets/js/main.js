function analyzeText() {
  const input = document.getElementById("inputText").value;
  const output = document.getElementById("output");

  if (input == "") {
    alert("لطفا متن را وارد کنید")
    return
  }
  


  let message = "";

  // استفاده از چند متد مهم رشته‌ای:
  message += `<p>طول متن: ${input.length}</p>`;
  message += `<p>حروف بزرگ: ${input.toUpperCase()}</p>`;
  message += `<p>آیا شامل 'js' است؟ ${input.includes("js") ? "بله" : "خیر"}</p>`;
  message += `<p>اولین موقعیت a: ${input.indexOf("a")}</p>`;
  message += `<p>برعکس متن: ${input.split("").reverse().join("")}</p>`;
  message += `<p>متن با حروف جداشده: ${input.split("").join("-")}</p>`;

    // استفاده از if برای هشدار طول زیاد متن:
    if (input.trim().length > 20) {
      message += `<p style='color: red;'>متن شما طولانی است</p>`;
    }

    // مثال ternary برای تشخیص شروع متن:
  message += `<p>${input.startsWith("سلام") ||input.startsWith("hello")   ? "با سلام شروع شده ✅" : "شروع متفاوت است ❌"}</p>`;

  output.innerHTML = message;
}