const magicNumber = Math.ceil( Math.random()*10);

let attempt = 1
while ( attempt <= 5) {
  attempt++
  let guess = Number(prompt("عدد جادویی بین 1 تا 10 رو حدس بزن:"));

  if (guess === 0) {
    alert("شما منصرف شدید");
    break
  }
  

  if (guess < 0) {
    alert("عدد منفی مجاز نیست!");
    continue
  }

  if (guess === magicNumber) {
    alert("آفرین! درست حدس زدی 🎉");
    break;
  } else {
    alert("اشتباهه! دوباره امتحان کن...");
  }

  attempt === 5 && alert("تموم شد! عدد جادویی " + magicNumber + " بود.");
}