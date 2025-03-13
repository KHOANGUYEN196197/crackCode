function onCodeInput(number) {
  var currentText = document.getElementById("guess" + number).value
  if (currentText.length >= 2) {
    document.getElementById("guess" + number).value = currentText.charAt(1)
  }

  //Check If Correct Code
  if (correctCode[0] == guess1.value && correctCode[1] == guess2.value && correctCode[2] == guess3.value) {
    const audio = new Audio('./audio/correct-answer-sound.mp3');
    guess1.disabled = true
    guess2.disabled = true
    guess3.disabled = true
    continueButton.disabled = false
    headerLabel.innerHTML = "GOOD JOB!"
    audio.play();
    //Animations
    document.getElementById("lockAnimation").style.backgroundPosition = "0px -32px"
    animateWithReflow("continueButton", "bounce-in")
  } else {
    if ((correctCode[0] !== guess1.value && correctCode[1] !== guess2.value && correctCode[2] !== guess3.value) && guess1.value !== '' && guess2.value !== '' && guess3.value !== '') {
      const lock = document.getElementById("lockAnimation");
      const audio = new Audio('./audio/error.mp3');
      setTimeout(() => {
        audio.play();
        lock.classList.add('shake');
      }, 10);

      setTimeout(() => {
        lock.classList.remove('shake');
      }, 500);
    }
  }
}

function revealAnswer() {
  document.getElementById("answerLabel").innerHTML = correctCode[0] + "" + correctCode[1] + "" + correctCode[2];
  document.getElementById('guess1').value = "";
  document.getElementById('guess2').value = "";
  document.getElementById('guess3').value = "";
}

function animateWithReflow(element, animation) {
  document.getElementById(element).classList.remove(animation)
  void document.getElementById(element).offsetWidth
  document.getElementById(element).classList.add(animation)
  document.getElementById(element).style.opacity = "1"
}