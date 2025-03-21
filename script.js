// 점수와 시간 변수 설정
let score = 0;
let timeLeft = 40;

// 점수 & 타이머 업데이트
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const gameArea = document.getElementById("marshmallow-area");

// 마시멜로 생성 함수
function spawnMarshmallow() {
    const marshmallow = document.createElement("div");
    marshmallow.classList.add("marshmallow");

    // 랜덤 위치 설정
    let x = Math.random() * (gameArea.clientWidth - 50);
    let y = Math.random() * (gameArea.clientHeight - 50);
    marshmallow.style.left = `${x}px`;
    marshmallow.style.top = `${y}px`;

    // 클릭 이벤트 추가
    marshmallow.onclick = function () {
        score += 1;
        scoreDisplay.innerText = `점수: ${score}`;
        marshmallow.remove();
    };

    gameArea.appendChild(marshmallow);

    // 일정 시간 후 자동 삭제
    setTimeout(() => marshmallow.remove(), 2000);
}

// 게임 타이머
function startGame() {
    let gameInterval = setInterval(spawnMarshmallow, 1000);
    let timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            clearInterval(timerInterval);
            alert(`게임 종료! 최종 점수: ${score}`);
        }
    }, 1000);
}

// 게임 시작
startGame();
