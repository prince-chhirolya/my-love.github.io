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

    // Start music on click anywhere
    const playMusicOnClick = function() {
        if (bgMusic.paused) {
            bgMusic.play();
            document.getElementById("musicToggle").innerText = "⏸ Pause Music";
            document.body.removeEventListener("click", playMusicOnClick);
            window.removeEventListener("scroll", playMusicOnScroll);
        }
    };

    // Start music on scroll
    const playMusicOnScroll = function() {
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                document.getElementById("musicToggle").innerText = "⏸ Pause Music";
                window.removeEventListener("scroll", playMusicOnScroll);
                document.body.removeEventListener("click", playMusicOnClick);
            }).catch((error) => {
                console.log("Autoplay was prevented:", error);
            });
        }
    };

    document.body.addEventListener("click", playMusicOnClick);
    window.addEventListener("scroll", playMusicOnScroll);
});
