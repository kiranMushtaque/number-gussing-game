document.getElementById("submitGuess").addEventListener("click", function () {
  const userGuess = parseInt(document.getElementById("userGuess").value);
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const resultMessage = document.getElementById("resultMessage");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 6) {
    resultMessage.textContent = "Please enter a number between 1 and 6.";
    resultMessage.style.color = "red";
  } else {
    if (userGuess === randomNumber) {
      resultMessage.textContent =
        "Congratulations! You guessed the right number.";
      resultMessage.style.color = "green";
    } else {
      resultMessage.textContent = `Oops! The correct number was ${randomNumber}.`;
      resultMessage.style.color = "red";
    }

    // Hide the guess input and button, show the restart button
    document.getElementById("userGuess").disabled = true;
    document.getElementById("submitGuess").disabled = true;
    document.getElementById("restartGame").style.display = "inline-block";
  }
});

document.getElementById("restartGame").addEventListener("click", function () {
  // Reset game
  document.getElementById("userGuess").value = "";
  document.getElementById("userGuess").disabled = false;
  document.getElementById("submitGuess").disabled = false;
  document.getElementById("resultMessage").textContent = "";
  document.getElementById("restartGame").style.display = "none";
});
