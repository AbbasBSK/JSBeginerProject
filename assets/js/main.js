const magicNumber = 7;

for (attempt = 1 ; attempt <=5 ; attempt++){
  let guess = Number(prompt("عدد جادویی بین 1 تا 10 رو حدس بزن:"));

  if (guess < 0) {
    alert("عدد منفی مجاز نیست!");
    continue
  }

  if (guess === magicNumber) {
    alert("آفرین! درست حدس زدی 🎉");
    break
  }else{
    alert("اشتباهه! دوباره امتحان کن...");
  }

  if (attempt === 5) {
    alert("تموم شد! عدد جادویی " + magicNumber + " بود.");
  }
}