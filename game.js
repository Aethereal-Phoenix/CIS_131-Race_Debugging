function initializeGame() {
  let strength = prompt("Enter your starting strength (e.g. 100):");
  

  if (strength == null ) {
    document.getElementById("gameLog").innerText = "Game Canceled!"; 
    return;
  }

    startGameLoop(strength);
}

function startGameLoop(strength) {
  let attacks = 0; 

  while (strength > 0) {
    let attackValue = getRandomAttackValue(strength);
    strength -= attackValue;
    attacks++;
    if (strength < 0) {
      strength = 0; 
    }

    logAttack(attacks, attackValue, strength);
  }

  document.getElementById("result").innerText = "Game Over! Total number of attacks: " + attacks;
}

function getRandomAttackValue(max) {

    let randomVal = Math.floor(Math.random() * max) + 1;
}

function logAttack(attacks, attackValue, strength) {
 document.getElementById("gameLog").innerHTML += "Attack " + attacks + ": " + attackValue + ". Remaining strength: " + strength + ".<br>";
}

// Start the game on load
initializeGame();