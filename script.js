function pindahHalaman() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("halaman2").classList.remove("hidden");

  setInterval(buatLove, 300);
}

function buatLove() {
  const love = document.createElement("div");
  love.classList.add("love");
  love.innerHTML = "❤️";

  love.style.left = Math.random() * 100 + "vw";
  love.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 4000);
}

