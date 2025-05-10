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














// form.addEventListener("submit", function (e) {
//   // e.preventDefault();

//   const newPerson = {
//     name: nameInput.value.trim(),
//     family: familyInput.value.trim(),
//     email: emailInput.value.trim(),
//     job: jobInput.value.trim(),
//     phone: phoneInput.value.trim(),
//     gender: genderSelect.value
//   };

//   // if (!newPerson.name || !newPerson.family || !newPerson.email) {
//   //   alert("لطفاً فیلدهای الزامی را وارد کنید.");
//   //   return;
//   // }

//   people.push(newPerson);
//   console.log(people);
  
//   form.reset();
// });

// // نمایش همه کاربران با map
// document.getElementById("showModal").addEventListener("click", () => {
//   if (people.length === 0) {
//     modal.innerHTML = "<p>هنوز کاربری ثبت نشده است.</p>";
//   } else {
//     modal.innerHTML = `<h3>لیست کاربران:</h3>`;
//     const list = document.createElement("ul");

//     people.map((person, index) => {
//       const { name, family, email, job, phone, gender } = person;
//       const li = document.createElement("li");
//       li.innerText = `${index + 1}. ${name} ${family}  
//         ایمیل: ${email} 
//          شغل: ${job || '---'} 
//          تلفن: ${phone || '---'} 
//           جنسیت: ${gender || '---'}`;
//       list.appendChild(li);
//     });

//     modal.appendChild(list);
//     console.log(people);
    
//   }

//   overlay.style.opacity = "1";
//   overlay.style.visibility = "visible";
//   modal.style.opacity = "1";
//   modal.style.visibility = "visible";
// });

// // find
// document.getElementById("findByEmail").addEventListener("click", () => {
//   const emailToFind = prompt("ایمیل مورد نظر را وارد کنید:");
//   const person = people.find(p => p.email === emailToFind.trim());

//   if (person) {
//     const { name, family, job, phone, gender } = person;
//     modal.innerHTML = `
//       <h3>فرد یافت شد:</h3>
//       <p>نام: ${name}</p>
//       <p>نام خانوادگی: ${family}</p>
//       <p>شغل: ${job}</p>
//       <p>شماره تماس: ${phone}</p>
//       <p>جنسیت: ${gender}</p>
//     `;
//   } else {
//     modal.innerHTML = `<p>فردی با این ایمیل یافت نشد.</p>`;
//   }

//   overlay.style.opacity = "1";
//   overlay.style.visibility = "visible";
//   modal.style.opacity = "1";
//   modal.style.visibility = "visible";
// });

// // every
// document.getElementById("checkIfAllHaveJob").addEventListener("click", () => {
//   const allHaveJob = people.every(p => p.job.trim() !== "");

//   modal.innerHTML = allHaveJob
//     ? "<p>✅ همه افراد دارای شغل هستند.</p>"
//     : "<p>❌ برخی افراد شغل ثبت نکرده‌اند.</p>";

//   overlay.style.opacity = "1";
//   overlay.style.visibility = "visible";
//   modal.style.opacity = "1";
//   modal.style.visibility = "visible";
// });

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

// // بستن مدال با کلیک روی پس‌زمینه
// overlay.addEventListener("click", () => {
//   overlay.style.opacity = "0";
//   overlay.style.visibility = "hidden";
//   modal.style.opacity = "0";
//   modal.style.visibility = "hidden";
// });
