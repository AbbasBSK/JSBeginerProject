const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const familyInput = document.getElementById("family");
const emailInput = document.getElementById("email");
const jobInput = document.getElementById("job");
const phoneInput = document.getElementById("phone");
const genderSelect = document.getElementById("gender");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

let people = [];

form.addEventListener("submit", function (e) {
  e.preventDefault()
  console.log();
  
  const newperson = {
    name: nameInput.value.trim(),
    family: familyInput.value.trim(),
    email: emailInput.value.trim(),
    job: jobInput.value.trim(),
    phone: phoneInput.value.trim(),
    gender: genderSelect.value
  }

  console.log(newperson);
  
})













