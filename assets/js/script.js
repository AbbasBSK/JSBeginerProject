// تابع سازنده

function Cars(brand, color) {
  this.brand = brand;
  this.color = color;

  this.describe = function () {
    console.log(`ماشین ${this.brand} به رنگ ${this.color}`);
  };
}


const cars1 = new Cars("Benz", "مشکی");
console.log(cars1);
cars1.describe(); 


const test = cars1.describe;
test();