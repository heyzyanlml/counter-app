increaseButton = document.querySelector(".increase__Button");
decreaseButton = document.querySelector(".decrease__Button");
resetButton = document.querySelector(".reset__Button");

let cuenta = 0;

increaseButton.addEventListener("click", () => {
  cuenta++;
  document.getElementById("num").textContent = cuenta;
});

decreaseButton.addEventListener("click", () => {
  cuenta--;
  document.getElementById("num").textContent = cuenta;
});

resetButton.addEventListener("click", () => {
  cuenta = 0;
  document.getElementById("num").textContent = cuenta;
});
