// <!-- Mouse Events -->
document.getElementById("mouseBtn").addEventListener("contextmenu", function () {
  alert("کلیک راست شد با JS!");
});

// <!-- Keyboard Events -->
document.getElementById("keyboardInput").addEventListener("keyup", () => {
  console.log("کلیدی فشرده شد با JS!");
});

// <!-- Form Events -->

document.getElementById("checkBox").addEventListener("change", function () {
  console.log("وضعیت چک باکس:", this.checked);
});
