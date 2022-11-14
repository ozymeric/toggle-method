let header = document.querySelector("h1");

function hideAndSeek() {
  this.classList.toggle("gone");
}

header.addEventListener("mouseover", hideAndSeek);

// toggle works as an on/off switch !!!
