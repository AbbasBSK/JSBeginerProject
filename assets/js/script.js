// <!-- Clipboard Events -->
document.getElementById("clipInput").addEventListener("cut", () => {
  alert("کپی شد با JS!");
});

// <!-- Drag & Drop -->

document.getElementById("dragBox").addEventListener("dragend", () => {
  console.log("درگ شروع شد با JS!");
});

// <!-- Window Events -->
window.addEventListener("scroll", () => {
  console.log("سایز پنجره تغییر کرد!");
});


// <!-- Media Events -->
const video = document.getElementById("videoEl");
video.addEventListener("seeking", () => console.log("ویدیو با JS پخش شد!"));
video.addEventListener("volumechange", () => console.log("ویدیو با JS متوقف شد!"));


