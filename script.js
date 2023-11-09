const lettersLink = document.getElementById("letters-link");
const numbersLink = document.getElementById("numbers-link");
const letters = document.getElementById("letters");
const numbers = document.getElementById("numbers");

lettersLink.addEventListener("click", (e) => {
    e.preventDefault();
    letters.style.display = "block";
    numbers.style.display = "none";
});

numbersLink.addEventListener("click", (e) => {
    e.preventDefault();
    letters.style.display = "none";
    numbers.style.display = "block";
});
