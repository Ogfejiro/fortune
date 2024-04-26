const options = [
  "It is certain",
  "It is decidedly so",
  "Most likely",
  "You may rely on it",
  "Signs point to yes.",
  "Don't count on it.",
  "Concentrate and ask again.",
  "Better not tell you now.",
  "My sources say no.",
  "Very doubtful.",
  "Outlook not so good.",
  "Yes.",
  "No.",
  "Reply hazy, try again.",
  "Ask again later",
];

let mbContainer = document.getElementById("mb-container");
let response = document.getElementById("response");

mbContainer.addEventListener("click", function () {
  const index = Math.floor(Math.random() * 15);
  const message = options[index];
  mbContainer.className = "magicball_outer animate";

  setTimeout(() => {
    response.textContent = message;
    response.style.fontSize = "1.1rem";
    mbContainer.className = "magicball_outer";
  }, 3000);
});
