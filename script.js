function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const botChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  if (playerChoice === botChoice) {
    result = 'เสมอ!';
  } else if (
    (playerChoice === 'rock' && botChoice === 'scissors') ||
    (playerChoice === 'paper' && botChoice === 'rock') ||
    (playerChoice === 'scissors' && botChoice === 'paper')
  ) {
    result = 'คุณชนะ!';
  } else {
    result = 'คุณแพ้!';
  }

  document.getElementById('result').innerText = คุณเลือก: ${translate(playerChoice)}\nคอมเลือก: ${translate(botChoice)}\n=> ${result};
}

function translate(choice) {
  return {
    rock: 'ค้อน',
    paper: 'กระดาษ',
    scissors: 'กรรไกร'
  }[choice];
}