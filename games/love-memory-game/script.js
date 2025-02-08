document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("memory-game");
    const resetButton = document.getElementById("resetButton");
    const timerDisplay = document.getElementById("timer");
    const movesDisplay = document.getElementById("moves");
    const winMessage = document.getElementById("winMessage");
    const finalMoves = document.getElementById("finalMoves");
    const backgroundMusic = document.getElementById("backgroundMusic");
    const playMusicButton = document.getElementById("playMusicButton");
    const heartsContainer = document.getElementById("hearts-container");

    let cardsArray = ["❤️", "💖", "💘", "💕", "💞", "💗", "💓", "❣️"];
    let cards = [...cardsArray, ...cardsArray];

    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let moves = 0;
    let matchedPairs = 0;
    let timer = 60;
    let timerInterval;

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function createCard(value) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = value;
        card.textContent = "❔";
        card.addEventListener("click", flipCard);
        return card;
    }

    function flipCard() {
        if (lockBoard || this === firstCard) return;

        this.textContent = this.dataset.value;
        this.classList.add("flipped");

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        lockBoard = true;
        moves++;
        movesDisplay.textContent = moves;

        checkMatch();
    }

    function checkMatch() {
        let isMatch = firstCard.dataset.value === secondCard.dataset.value;

        if (isMatch) {
            firstCard.classList.add("hidden");
            secondCard.classList.add("hidden");
            matchedPairs++;

            if (matchedPairs === cardsArray.length) {
                winGame();
            }
            resetBoard();
        } else {
            setTimeout(() => {
                firstCard.textContent = "❔";
                secondCard.textContent = "❔";
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                resetBoard();
            }, 800);
        }
    }

    function resetBoard() {
        firstCard = null;
        secondCard = null;
        lockBoard = false;
    }

    function startGame() {
        gameContainer.innerHTML = "";
        shuffle(cards).forEach((emoji) => {
            gameContainer.appendChild(createCard(emoji));
        });
        startTimer();
        createFallingHearts();
    }

    function startTimer() {
        clearInterval(timerInterval);
        timer = 60;
        timerDisplay.textContent = timer;
        timerInterval = setInterval(() => {
            timer--;
            timerDisplay.textContent = timer;
            if (timer === 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }

    function createFallingHearts() {
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDuration = `${Math.random() * 5 + 3}s`;
            heart.textContent = "❤️";
            heartsContainer.appendChild(heart);
        }
    }

    playMusicButton.addEventListener("click", () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            playMusicButton.innerHTML = "Pause Music &#x23F8;"; // Pause icon
        } else {
            backgroundMusic.pause();
            playMusicButton.innerHTML = "Play Music &#x25B6;"; // Play icon
        }
    });
    resetButton.addEventListener("click", startGame);
    startGame();
});
