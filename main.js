// function browserTest() {
//   var browser = prompt("please enter your computer browser");

//   switch (browser) {
//     case "edge":
//       alert("You've got the Edge!");
//       break;

//     case 'Chrome': // if (browser == "Chrome" ||  browser == "Firefox")
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert('Okay we support these browsers too');
//       break;

//     default:
//       alert('We hope that this page looks ok!');
//       break;
//   }
// }

// browserTest()












// var a = prompt('لطفا یک عدد از یک تا 10 وارد کنید');

// if (a == 0  ) {
//   alert( "مقدار وارد برابر با صفر است ... !" );
// }
// if (a == 2 ||a == 4 ||a == 6 ||a == 8 ||a == 10) {
//   alert( "مقدار وارد شده یک عدد زوج است ... !"  );
// }
// if (a == 1 ||a == 3 ||a == 5 ||a == 7 ||a == 9) {
//   alert( "مقدار وارد شده یک عدد فرد است ... !"  );
// }
// if (!a) {
//   alert( "مقداری وارد نشده است"  );
// }
 














// var a = prompt('لطفا یک عدد از  تا 10 وارد کنید');

// switch (a) {
//   case "0":
//     alert("مقدار وارد شده برابر با صفر است ... !");
//     break;

//   case "2":  case "4": case "6": case "8":  case "10":
//     alert("مقدار وارد شده یک عدد زوج است ... !");
//     break;

//   case "1":  case "3":  case "5":  case "7":  case "9":
//     alert("مقدار وارد شده یک عدد فرد است ... !");
//     break;

//   default:
//     alert("عدد وارد شده معتبر نیست!");
//     break;
// }



















// var bl1=  confirm("ok or cancel");
// var bl2=  confirm("ok or cancel");

// alert(bl1)
// if (!bl1 && bl2) {
//   alert("bl1 = false  and bl2 = true")
// }

















var a = prompt('لطفا یک عدد از یک تا 10 وارد کنید');
var b = confirm("ok or cancel");



if (a == 2 ||a == 4 ||a == 6 ||a == 8 ||a == 10) {

  b = !b
  alert(b)
  alert( "مقدار وارد شده یک عدد زوج است ... !"  );
 
}
if (!b) {
  alert( "پاسخ معکوس شده است"  );
}else{
  alert( "........پاسخ معکوس نشده است"  );
}
