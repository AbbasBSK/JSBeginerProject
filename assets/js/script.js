function getCoffee() {
  return new Promise((resolve) => {
    a
    setTimeout(() => {
      console.log("☕ قهوه آماده شد");
      resolve("قهوه");
    }, 2000);
  });
}


async function startDay() {
  console.log("🔹 صبحانه می‌خورم");


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




























// try {
//   // کدی که ممکنه خطا بده
//   console.log("قبل از خطا");
//   let x = y + 1; // خطا: چون y تعریف نشده
//   console.log("بعد از خطا"); // اجرا نمی‌شه
//   throw new Error("سن باید حداقل ۱۸ سال باشد");
// } catch (err) {
//   // وقتی خطا رخ داد
//   console.log("یه خطا رخ داد:", err.message);
// }

















// function checkAge(age) {

//   if (age > 18) throw new Error("سن باید حداکثر ۱۸ سال باشد")
//   console.log("مجاز هستی");
// }

// try {
//   checkAge(20);
// } catch (err) {
//   console.log("خطا:", err.message);
// }






















// const tbody = document.getElementById("tbody");
// function loadUsers() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {

//       document.getElementById("table").style.opacity = "1";
//       tbody.innerHTML = "";
//       data.forEach(user => {
//         tbody.innerHTML += `<tr id="user-${user.id}">
//               <td>${user.id}</td>
//               <td>${user.name}</td>
//               <td>${user.phone}</td>
//               <td>${user.email}</td>
//               <td>${user.address.city}, ${user.address.street}</td>
//               <td>
//               <button  onclick="deleteUser(${user.id})">حذف</button>
//               <button onclick="editUser(${user.id}, '${user.name}', '${user.email}')">ویرایش</button>
//               </td>
//             </tr>`;
//       });
//     });
// }

// // اضافه کردن کاربر

// function addUser() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;

//   fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     body: JSON.stringify({ name: name, email: email }),
//     headers: { 'Content-type': 'application/json; charset=UTF-8' }
//   })
//     .then(res => res.json())
//     .then(user => {
//       alert("کاربر با موفقیت ارسال شد (ولی ذخیره نمی‌شود چون API تستی است)");
//       console.log("POST response:", user);

//       tbody.innerHTML += `<tr>
//         <td>${user.id}</td>
//         <td>${user.name}</td>
//         <td>  </td>
//         <td>${user.email}</td>
//         <td>   </td>
//         <td><button>حذف</button></td>
//       </tr>`;

//     });
// }


// // حذف کاربر

// function deleteUser(id) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     method: 'DELETE'
//   })
//     .then(() => {
//       alert(`کاربر با شناسه ${id} حذف شد (فقط در ظاهر، چون API واقعی نیست)`);
//       loadUsers(); // بازخوانی لیست
//     });
// }


// // ویرایش کاربر
// function editUser(id, oldName, oldEmail) {
//   const newName = prompt("نام جدید را وارد کنید:", oldName);
//   const newEmail = prompt("ایمیل جدید را وارد کنید:", oldEmail);

//   if (!newName || !newEmail) {
//     alert("ورودی نامعتبر بود");
//     return;
//   }

//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     method: 'PATCH',
//     body: JSON.stringify({ name: newName, email: newEmail }),//name , email
//     headers: { 'Content-type': 'application/json; charset=UTF-8' }
//   })
//     .then(res => res.json())
//     .then(updated => {
//       console.log(updated);

//       alert("ویرایش انجام شد (نمایشی)");



//       // اعمال تغییرات به صورت نمایشی
//       const row = document.getElementById(`user-${id}`);
//       row.children[1].textContent = updated.name;
//       row.children[3].textContent = updated.email;

//     });

// }




























