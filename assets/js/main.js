// اگر داخل تابع از this استفاده نکنی، اون متغیرها به شیء ساخته‌شده وصل نمی‌شن و فقط داخل خود تابع تعریف می‌شن (scope محلی دارن) و از بیرون قابل دسترسی نیستن.


// new میاد از یک الگو، نمونه (instance) جدید می‌سازه.


// const car1 = Car(); // بدون new → undefined برمی‌گردونه
// const car2 = new Car(); // با new → { model: "Benz" }

// console.log(car1); // undefined
// console.log(car2); // { model: 'Benz' }


// مثال دوم با new=================================================================

// const Book = (title, author)=> {
//   this.title = title;
//   this.author = author;
// }
// const myBook = new Book("قلعه حیوانات", "جرج اورول");
// console.log(myBook.title);  // قلعه حیوانات


// مثال سوم با new=================================================================
// function Cars(brand, color) {
//   this.brand = brand;
//   this.color = color;

//   this.describe = function () {
//     console.log(`ماشین ${this.brand} به رنگ ${this.color}`);
//   };
// }
// const cars1 = new Cars("Benz", "مشکی");
// console.log(cars1);
// car1.describe(); // ماشین Benz به رنگ مشکی

// const test = car1.describe;
// «کلمه‌ی this داخل متد، به شیئی اشاره می‌کنه که داره اون متد رو صدا می‌زنه — نه به خود تابع.»

// test(); // ❌ this = undefined یا window → خروجی: ماشین undefined به رنگ undefined


















































