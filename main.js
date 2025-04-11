// var x = 1;
//  x = 2; // مشکلی ندارد!
// console.log(x);



// let y = 1;
// y = 2;
// // y = "aa"; // SyntaxError

// console.log(y);


// const z = 1;
//  z = 2;
// //  z = "aa"; // SyntaxError

//  console.log(z);


// let outer = "بیرونی";
check()

function check() {
  let middle = "میانی";
  
  if (true) {
    let inner = "درونی";
    console.log(inner); // "درونی" ✅
    console.log(middle); // "میانی" ✅
    console.log(outer); // "بیرونی" ✅
  }
  
  console.log(inner); // ❌ خطا!
}


console.log(x); 
let x = "local";


