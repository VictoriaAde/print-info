function printInfo() {
  if (btn.style.display === "none") {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
  document.querySelector(".name").textContent = "Name: Victoria Adedayo";
  document.querySelector(".height").textContent = "Height: 6.8ft";
  document.querySelector(".country").textContent = "Country: Nigeria";
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", printInfo);
