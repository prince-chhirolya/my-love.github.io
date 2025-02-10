// document.getElementById("calculateLove").addEventListener("click", function() {
//     const name1 = document.getElementById("name1").value.trim().toLowerCase();
//     const name2 = document.getElementById("name2").value.trim().toLowerCase();
//     const result = document.getElementById("result");
//     const loveMeterContainer = document.getElementById("love-meter-container");
//     const loveMeter = document.getElementById("love-meter");
//     const shareButton = document.getElementById("shareResult");

//     if (name1 === "" || name2 === "") {
//         result.innerHTML = "💔 Please enter both names!";
//         return;
//     }

//     // Generate a consistent love score using a hash function
//     let loveScore = getLoveScore(name1, name2);

//     // Display result with animation
//     result.innerHTML = `<p>${name1.toUpperCase()} ❤️ ${name2.toUpperCase()}</p><h3>Your Love Score: ${loveScore}% 💖</h3>`;

//     // Animate Love Meter
//     loveMeterContainer.style.display = "block";
//     loveMeter.style.width = "0%";
//     setTimeout(() => {
//         loveMeter.style.width = loveScore + "%";
//     }, 500);

//     // Show share button
//     shareButton.style.display = "block";
//     shareButton.onclick = function () {
//         copyToClipboard(`${name1} ❤️ ${name2} Love Score: ${loveScore}% 💖`);
//     };

//     // Add fun heart animations
//     createHearts();
// });

// // Consistent Love Score Calculation
// function getLoveScore(name1, name2) {
//     let combined = name1 + name2;
//     let hash = 0;
//     for (let i = 0; i < combined.length; i++) {
//         hash += combined.charCodeAt(i);
//     }
//     return (hash % 100) + 1; // Always returns the same score for same names
// }

// // Falling Hearts Animation
// function createHearts() {
//     const heartsContainer = document.getElementById("hearts-container");
//     for (let i = 0; i < 15; i++) {
//         let heart = document.createElement("div");
//         heart.classList.add("heart");
//         heart.innerHTML = "❤️";
//         heart.style.left = Math.random() * 100 + "vw";
//         heart.style.animationDuration = Math.random() * 2 + 3 + "s";
//         heartsContainer.appendChild(heart);

//         setTimeout(() => {
//             heart.remove();
//         }, 5000);
//     }
// }

// // Copy result to clipboard
// function copyToClipboard(text) {
//     navigator.clipboard.writeText(text).then(() => {
//         alert("Copied to clipboard! Share your love score 💖");
//     });
// }

document.getElementById("calculateLove").addEventListener("click", function() {
    const name1 = document.getElementById("name1").value.trim().toLowerCase();
    const name2 = document.getElementById("name2").value.trim().toLowerCase();
    const result = document.getElementById("result");
    const loveMeterContainer = document.getElementById("love-meter-container");
    const loveMeter = document.getElementById("love-meter");
    const shareButton = document.getElementById("shareResult");

    if (name1 === "" || name2 === "") {
        result.innerHTML = "💔 Please enter both names!";
        return;
    }

    // Generate a high love score between 92-100
    let loveScore = getHighLoveScore(name1, name2);

    // Display result with animation
    result.innerHTML = `<p>${name1.toUpperCase()} ❤️ ${name2.toUpperCase()}</p>
                        <h3>Your Love Score: ${loveScore}% 💖</h3>`;

    // Animate Love Meter
    loveMeterContainer.style.display = "block";
    loveMeter.style.width = "0%";
    setTimeout(() => {
        loveMeter.style.width = loveScore + "%";
    }, 500);

    // Show share button
    shareButton.style.display = "block";
    shareButton.onclick = function () {
        copyToClipboard(`${name1} ❤️ ${name2} Love Score: ${loveScore}% 💖`);
    };

    // Add fun heart animations
    createHearts();
});

// Function to generate a love score between 92 and 100 (consistent for same names)
function getHighLoveScore(name1, name2) {
    let combined = name1 + name2;
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
        hash += combined.charCodeAt(i);
    }
    return (hash % 9) + 92; // Ensures the score is always between 92 and 100
}

// Falling Hearts Animation
function createHearts() {
    const heartsContainer = document.getElementById("hearts-container");
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Copy result to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard! Share your love score 💖");
    });
}
