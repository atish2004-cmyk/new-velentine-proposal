// Show Sorry Message First, Then Switch to Proposal
setTimeout(() => {
    document.getElementById("sorry-screen").style.display = "none";
    document.getElementById("proposal-screen").style.display = "flex";
    
    // Start background music
    document.getElementById("bg-music").play();

    // Start heart animation
    createHearts();
}, 5000); // 5 seconds delay before proposal appears

// Function to create floating hearts
function createHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        // Random position on screen
        heart.style.left = Math.random() * window.innerWidth + "px";

        // Append heart to body
        document.body.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
}

function showLoveMessage() {
    document.getElementById("love-message").style.display = "block";
}

document.addEventListener("DOMContentLoaded" , function () {
    let music = document.getElementById("bg-music");
     // Play music on the irst user interaction
     function enableAutoPlay() {
        music.play();
        document.removeEventListener("click" , enableAutoPlay);
}

document.addEventListener("click" , enableAutoPlay);
});




// Play Music Automatically After Sorry Message
setTimeout(() => {
    document.getElementById("bg-music").play();
}, 5000);

// Moving "No" Button
let noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Show Message when Clicking "Yes"
document.getElementById("yesBtn").addEventListener("click", function () {
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("sorry-message").classList.add("hidden");
});

// Show "Sorry" Message when Clicking "No"
document.getElementById("noBtn").addEventListener("click", function () {
    document.getElementById("sorry-message").classList.remove("hidden");
    document.getElementById("message").classList.add("hidden");
});