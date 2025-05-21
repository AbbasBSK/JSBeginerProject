
const updateClock = ()=>{
  let now = new Date().toLocaleTimeString()

  document.getElementById("clock").textContent = now
}

setInterval(updateClock, 1000);
