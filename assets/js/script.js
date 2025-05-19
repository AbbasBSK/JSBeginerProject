const btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  this.style.backgroundColor = "orange";
  this.textContent = "کلیک شد!";
 e.stopPropagation()
});


  function changeColor(element) {
    element.style.backgroundColor = "lightgreen";
  }


  document.addEventListener("click" , function(){
    btn.style.backgroundColor = "";
    btn.textContent = "کلیک کن";
  })































// event bubbling

  function changeColor(element) {
    element.style.backgroundColor = "lightgreen";
  }