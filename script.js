// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Falling Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    let size = Math.random() * 20 + 10; 
    heart.style.fontSize = size + "px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s"; 

    document.getElementById("heartsContainer").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// // Love Letter Modal
// document.getElementById("openLetter").addEventListener("click", function() {
//     let modal = document.getElementById("letterModal");
//     modal.classList.add("show-modal");
// });

// document.getElementById("closeLetter").addEventListener("click", function() {
//     let modal = document.getElementById("letterModal");
//     modal.classList.remove("show-modal");
// });

document.getElementById('openLetter').addEventListener('click', function() {
    const modal = document.getElementById('letterModal');
    modal.style.display = 'block';
    setTimeout(function() {
        modal.style.display = 'none';
    }, 3000);
});

document.getElementById('closeLetter').addEventListener('click', function() {
    document.getElementById('letterModal').style.display = 'none';
});


// Virtual Hug Button
document.getElementById("hugButton").addEventListener("click", function() {
    if (!this.clicked) {
        this.clicked = true;
        
        // Create and show the hug gif
        const hugGif = document.createElement("img");
        hugGif.src = "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif"; // Replace with your favorite hugging gif URL
        hugGif.classList.add("hug-gif");
        hugGif.style.position = "fixed";
        hugGif.style.top = "50%";
        hugGif.style.left = "50%";
        hugGif.style.transform = "translate(-50%, -50%)";
        hugGif.style.zIndex = "1000";
        document.body.appendChild(hugGif);

        // Add light red neon light border to the gif
        hugGif.style.border = "5px solid lightcoral";
        hugGif.style.boxShadow = "0 0 20px lightcoral, 0 0 30px lightcoral, 0 0 40px lightcoral, 0 0 50px lightcoral";

        // Create and show the red heart
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.top = "10%";
        heart.style.left = "50%";
        heart.style.transform = "translateX(-50%)";
        heart.style.fontSize = "50px";
        heart.style.zIndex = "1000";
        document.body.appendChild(heart);

        // Play romantic music if not already playing
        if (bgMusic.paused) {
            bgMusic.play();
            document.getElementById("musicToggle").innerText = "⏸ Pause Music";
        }

        // Remove the gif and heart after 3 seconds
        setTimeout(() => {
            hugGif.remove();
            heart.remove();
            this.clicked = false;
        }, 3000);
    }
});

// Daily Love Quotes
const quotes = [
    "You are my sunshine, my only sunshine! ☀️💖",
    "Every love story is beautiful, but ours is my favorite. 💑✨",
    "I love you not only for what you are, but for what I am when I am with you. 💕",
    "You make my heart smile. 😊❤️",
    "You’re the best thing that ever happened to me! 💘"
];

function displayQuote() {
    let quoteElement = document.getElementById("loveQuote");
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quoteElement.style.opacity = 0;
    setTimeout(() => {
        quoteElement.innerText = randomQuote;
        quoteElement.style.opacity = 1;
    }, 500);
}

setInterval(displayQuote, 10000);
displayQuote();

// Background Music Control with Romantic Hindi Bollywood Songs
const songs = [
    { title: "Tum Ho Pass Mere", url: "music/tum-ho-pass-mere.mp3" },
    { title: "My Fav", url: "music/my-fav.mp3" },
    { title: "Tumse Milna", url: "music/tumse-milna-bate-karna.mp3" },
    { title: "Tum Se Hi", url: "music/tum-se-hi.mp3" },
    { title: "Tum Jo Aaye", url: "music/tum-jo-aaye.mp3" },
    { title: "Hua Hai Aaj Pehli", url: "hua-hai-aaj-pehli-baar.mp3" },
    { title: "Tum Hi Ho", url: "music/tum-hi-ho.mp3" },
    { title: "Girl Voice", url: "music/girl-voice.mp3" },
    { title: "Love Me Thoda", url: "music/love-me-thoda.mp3" },
    { title: "Sunno Na Sunno Na", url: "music/sunno-na-sunno-na.mp3" },
    { title: "Tera Milna Hai", url: "music/tera-milna-hai.mp3" },
    { title: "Tere Mast Mast Do Nena", url: "music/tere-mast-mast-do-nena.mp3" } 
];

let bgMusic = new Audio(songs[0].url);
bgMusic.loop = true; // Loop the song

// Create song selection dropdown
const songSelect = document.createElement("select");
songSelect.id = "songSelect";
songs.forEach((song, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.innerText = song.title;
    songSelect.appendChild(option);
});
document.body.appendChild(songSelect);

// Style the song selection dropdown to be fixed on the right, but not at the top
songSelect.style.position = "fixed";
songSelect.style.bottom = "20px";
songSelect.style.right = "10px";
songSelect.style.zIndex = "1000";

// Change song based on selection
songSelect.addEventListener("change", function() {
    bgMusic.src = songs[this.value].url;
    bgMusic.play();
    document.getElementById("musicToggle").innerText = "⏸ Pause Music";
});

document.getElementById("musicToggle").addEventListener("click", function() {
    if (bgMusic.paused) {
        bgMusic.play();
        this.innerText = "⏸ Pause Music";
    } else {
        bgMusic.pause();
        this.innerText = "🎵 Play Music";
    }
});

// Auto-play music when the website is opened
window.addEventListener("load", function() {
    bgMusic.src = songs[0].url; // Default to the first song
    bgMusic.play().then(() => {
        document.getElementById("musicToggle").innerText = "⏸ Pause Music";
    }).catch((error) => {
        console.log("Autoplay was prevented:", error);
    });
});


const images = ["firstImage", "secondImage"];
let currentIndex = 0;

function toggleImage() {
    document.getElementById(images[currentIndex]).style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById(images[currentIndex]).style.display = 'block';
}

document.getElementById(images[0]).addEventListener('click', toggleImage);
document.getElementById(images[1]).addEventListener('click', toggleImage);

// Add hover effect to images
images.forEach(imageId => {
    const imageElement = document.getElementById(imageId);
    imageElement.style.cursor = 'pointer';
    imageElement.title = 'Click to change image';
});

function startGame1() {
    window.location.href = "games/love-memory-game/index.html";
}

function startGame2() {
    alert("Game 2 coming soon! 🎮");
}

function startGame3() {
    alert("Game 3 coming soon! 🎮");
}

function startGame4() {
    alert("Game 4 coming soon! 🎮");
}

function startGame5() {
    alert("Game 5 coming soon! 🎮");
}

function startGame6() {
    alert("Game 6 coming soon! 🎮");
}