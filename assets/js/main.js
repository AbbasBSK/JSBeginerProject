
// معرفی متغیر ها 
const colorBtn = document.getElementById("colorBtn");
const bgBtn = document.getElementById("bgBtn");
const messageBox = document.getElementById("messageBox");

// تابع اول با onclick در HTML
function changeText() {
  messageBox.innerText = "متن با onclick تغییر کرد!";
}

// تابع دوم با addEventListener
colorBtn.addEventListener("click", function () {
  messageBox.style.color = "darkred";
  messageBox.innerText = "متن با addEventListener تغییر کرد!";
});


// تابع سوم با onclick جاوااسکریپتی
bgBtn.onclick = function () {
  messageBox.style.backgroundColor = "#e3f2fd";
};
bgBtn.onclick = function () {
  messageBox.innerText = " متن تغییر کرد!";
};