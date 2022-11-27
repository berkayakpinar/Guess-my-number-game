const number = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check-button").addEventListener("click", function () {
  let guess = Number(document.querySelector(".input-box").value);

  if (!guess) {
    document.querySelector(".response-text").textContent =
      "This is not a number";
  } else if (number > guess) {
    document.querySelector(".response-text").textContent = "Too low !";

    document.querySelector(".response-text").style.color = "#CF0A0A";
    document.querySelector(".number").textContent = guess;
  } else if (number < guess) {
    document.querySelector(".response-text").textContent = "Too high !";
    document.querySelector(".response-text").style.color = "#CF0A0A";
    document.querySelector(".number").textContent = guess;
  } else if (number === guess) {
    document.querySelector(".response-text").textContent =
      "You found the number!";
    document.querySelector(".container").style.backgroundColor = "#3CCF4E";
    document.querySelector(".response-text").style.color = "#fff";
    document.querySelector(".number").style.color = "#3CCF4E";
    document.querySelector(".number").textContent = guess;
    document.querySelector(".check-button").textContent = "AGAIN";
    document.querySelector(".check-button").style.color = "#3CCF4E";
    document
      .querySelector(".check-button")
      .addEventListener("click", function () {
        window.location.reload();
      });
  }
});
