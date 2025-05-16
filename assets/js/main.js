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
// افزودن کاربر جدید به لیست
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

// نمایش همه کاربران
document.getElementById("showModal").addEventListener("click", () => {
  if (people.length === 0) {
    modal.innerHTML = `<h3>هنوز کاربری ثبت نشده است.</h3> `
  } else {
    modal.innerHTML = `<h3>لیست کاربران:</h3>`;
    const list = document.createElement("ul");

    people.forEach((person, index) => {

      const { name, family, email, job, phone, gender } = person

      const li = document.createElement("li");
      li.innerText = `${index + 1} . ${name} ${family}
       ایمیل: ${email} 
       شغل: ${job || '---'} 
       تلفن: ${phone || '---'} 
       جنسیت: ${gender || '---'}`;
      list.appendChild(li)
      console.log(list);
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

// پیدا کردن با ایمیل

document.getElementById("findByEmail").addEventListener("click", () => {
  const emailToFind = prompt("ایمیل مورد نظر را وارد کنید:");
  const person = people.filter(p => p.email === emailToFind.trim())

  if (person.length > 0) {
    const { name, family, job, phone, gender } = person
    modal.innerHTML = `
       <h3>فرد یافت شد:</h3>
       <p>نام: ${name}</p>
       <p>نام خانوادگی: ${family}</p>
       <p>شغل: ${job}</p>
       <p>شماره تماس: ${phone}</p>
       <p>جنسیت: ${gender}</p>
     `;
  } else {
    modal.innerHTML = `<p>فردی با این ایمیل یافت نشد.</p>`;
  }

  overlay.style.opacity = "1";
  overlay.style.visibility = "visible";
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
})


// آیا همه شاغلند 

document.getElementById("checkIfAllHaveJob").addEventListener("click", () => {

  const allHaveJob = people.every(p => p.job.trim() !== "");
  modal.innerHTML = allHaveJob
    ? "<p>✅ همه افراد دارای شغل هستند.</p>"
    : "<p>❌ برخی افراد شغل ثبت نکرده‌اند.</p>";

  overlay.style.opacity = "1";
  overlay.style.visibility = "visible";
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
})









































// // some
// document.getElementById("checkIfAnyIsMale").addEventListener("click", () => {
//   const hasMale = people.some(p => p.gender === "مرد");

//   modal.innerHTML = hasMale
//     ? "<p>👨 حداقل یک آقا ثبت شده است.</p>"
//     : "<p>🚫 هیچ آقایی ثبت نشده است.</p>";

//   overlay.style.opacity = "1";
//   overlay.style.visibility = "visible";
//   modal.style.opacity = "1";
//   modal.style.visibility = "visible";
// });

















