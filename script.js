let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let resultText = '';

  // กำหนดผลลัพธ์
  if (playerChoice === computerChoice) {
    resultText = 'เสมอ 😐';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultText = 'คุณชนะ! 🎉';
    playerScore++;
  } else {
    resultText = 'คุณแพ้ 😭';
    computerScore++;
  }

  // แสดงผลลัพธ์
  document.getElementById('result').innerHTML =
    คุณเลือก: ${translate(playerChoice)}<br> +
    คอมเลือก: ${translate(computerChoice)}<br> +
    <strong>${resultText}</strong>;

  // อัปเดตคะแนน
  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('computer-score').innerText = computerScore;
}

function translate(choice) {
  return {
    rock: '🪨 ค้อน',
    paper: '📄 กระดาษ',
    scissors: '✂️ กรรไกร'
  }[choice];
}