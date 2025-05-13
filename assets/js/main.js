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

  const newperson = {
    name: nameInput.value.trim(),
    family: familyInput.value.trim(),
    email: emailInput.value.trim(),
    job: jobInput.value.trim(),
    phone: phoneInput.value.trim(),
    gender: genderSelect.value
  }

  if (!newperson.name || !newperson.family || !newperson.email) {
    alert("لطفاً فیلدهای الزامی را وارد کنید.")
    return
  }

  people.push(newperson);
  form.reset();

})

document.getElementById("showModal").addEventListener("click", () => {
  if (people.length === 0) {
    modal.innerHTML = `<h3>هنوز کاربری ثبت نشده است.</h3> `
  } else {
    modal.innerHTML = `<h3>لیست کاربران:</h3>`;
    const list = document.createElement("ul");

    people.map((person, index) => {

      const { name,family,email,job,phone,gender } = person

      const li = document.createElement("li");
      li.innerText = `${index + 1} . ${name} ${family}
       ایمیل: ${email} 
       شغل: ${job || '---'} 
       تلفن: ${phone || '---'} 
       جنسیت: ${gender || '---'}`;
      list.appendChild(li)
    })

    modal.appendChild(list);
  }

  overlay.style.opacity = "1";
  overlay.style.visibility = "visible";
  modal.style.opacity = "1";
  modal.style.visibility = "visible";

})


// بستن مدال با کلیک روی پس‌زمینه
overlay.addEventListener("click", () => {
  overlay.style.opacity = "0";
  overlay.style.visibility = "hidden";
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
});















