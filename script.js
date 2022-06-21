function printInfo() {
  document.querySelector(".name").textContent = "Name: Victoria Adedayo";
  document.querySelector(".height").textContent = "Height: 6.8ft";
  document.querySelector(".country").textContent = "Country: Nigerian";
}

document.querySelector(".btn").addEventListener("click", printInfo);
