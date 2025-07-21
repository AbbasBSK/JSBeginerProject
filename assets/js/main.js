





async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    // بررسی وضعیت پاسخ HTTP
    if (!res.ok) {
      // اینجا خودت یک ارور دستی می‌سازی تا بره داخل catch
      throw new Error(`خطای وضعیت سرور: ${res.status}`);
    }

    const data = await res.json();
    console.log("کاربران:", data);
  } catch (error) {
    console.log("یه خطا در واکشی اطلاعات رخ داد:", error.message);
  }
}

getData();









