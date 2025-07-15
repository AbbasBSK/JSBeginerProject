const tbody = document.getElementById("tbody");
function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {

      document.getElementById("table").style.opacity = "1";
      tbody.innerHTML = "";
      data.forEach(user => {
        console.log(user);
        tbody.innerHTML += `<tr>
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.phone}</td>
              <td>${user.email}</td>
              <td>${user.address.city}, ${user.address.street}</td>
              <td><button  onclick="deleteUser(${user.id})">حذف</button></td>
            </tr>`;
      });
    });
}

// اضافه کردن کاربر 

function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({ name: name, email: email }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
    .then(res => res.json())
    .then(user => {
      alert("کاربر با موفقیت ارسال شد (ولی ذخیره نمی‌شود چون API تستی است)");
      console.log("POST response:", user);

      tbody.innerHTML += `<tr>
        <td>  </td>
        <td>${user.name}</td>
        <td>  </td>
        <td>${user.email}</td>
        <td>   </td>
        <td><button>حذف</button></td>
      </tr>`;

    });
}


// حذف کاربر

function deleteUser(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
  })
    .then(() => {
      alert(`کاربر با شناسه ${id} حذف شد (فقط در ظاهر، چون API واقعی نیست)`);
      loadUsers(); // بازخوانی لیست
    });
}

































//     .then(() => {
//       alert(`کاربر با شناسه ${id} حذف شد (فقط در ظاهر، چون API واقعی نیست)`);
//       loadUsers(); // بازخوانی لیست
//     });



























//       <td>${user.name}</td>
//       <td>${user.phone}</td>
//       <td>${user.email}</td>
//       <td>${user.address.city}, ${user.address.street}</td>

