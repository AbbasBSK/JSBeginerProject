const tbody = document.getElementById("tbody");

// واکشی کاربران
async function loadUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/userz');
    if (!res.ok) throw new Error(`خطا در واکشی کاربران: ${res.status}`);
    const data = await res.json();

    document.getElementById("table").style.opacity = "1";
    tbody.innerHTML = "";
    data.forEach(user => {
      tbody.innerHTML += `<tr id="user-${user.id}">
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
        <td>${user.address.city}, ${user.address.street}</td>
        <td>
          <button onclick="deleteUser(${user.id})">حذف</button>
          <button onclick="editUser(${user.id}, '${user.name}', '${user.email}')">ویرایش</button>
        </td>
      </tr>`;
    });
  } catch (error) {
    alert("❌ خطا در بارگذاری کاربران: " + error.message);
  }
}

// اضافه کردن کاربر
async function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    });

    if (!res.ok) throw new Error(`خطا در افزودن کاربر: ${res.status}`);

    const user = await res.json();

    alert("✅ کاربر با موفقیت ارسال شد (ولی ذخیره نمی‌شود چون API تستی است)");
    console.log("POST response:", user);

    tbody.innerHTML += `<tr id="user-${user.id}">
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td></td>
      <td>${user.email}</td>
      <td></td>
      <td><button onclick="deleteUser(${user.id})">حذف</button></td>
    </tr>`;
  } catch (error) {
    alert("❌ خطا در افزودن کاربر: " + error.message);
  }
}

// حذف کاربر
async function deleteUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    });

    if (!res.ok) throw new Error(`خطا در حذف کاربر: ${res.status}`);

    alert(`✅ کاربر با شناسه ${id} حذف شد (فقط در ظاهر، چون API واقعی نیست)`);
    loadUsers(); // بازخوانی لیست
  } catch (error) {
    alert("❌ خطا در حذف کاربر: " + error.message);
  }
}

// ویرایش کاربر
async function editUser(id, oldName, oldEmail) {
  const newName = prompt("نام جدید را وارد کنید:", oldName);
  const newEmail = prompt("ایمیل جدید را وارد کنید:", oldEmail);

  if (!newName || !newEmail) {
    alert("❌ ورودی نامعتبر بود");
    return;
  }

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ name: newName, email: newEmail }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    });

    if (!res.ok) throw new Error(`خطا در ویرایش کاربر: ${res.status}`);

    const updated = await res.json();

    alert("✅ ویرایش انجام شد (نمایشی)");
    const row = document.getElementById(`user-${id}`);
    row.children[1].textContent = updated.name;
    row.children[3].textContent = updated.email;
  } catch (error) {
    alert("❌ خطا در ویرایش کاربر: " + error.message);
  }
}