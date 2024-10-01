const backgroundImages = [
    "static/images/img11.jpg",
    "static/images/img12.jpg",
    "static/images/img13.jpg",
    "static/images/img14.jpg",
    "static/images/img15.jpg",
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
    currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Start changing backgrounds when the page loads
document.addEventListener("DOMContentLoaded", () => {
    changeBackground();
    setInterval(changeBackground, 300000); // Change every 3 seconds
});

// Music-related logic
const musicButton = document.getElementById('musicButton');
const moodModal = document.getElementById('moodModal');
const span = document.getElementsByClassName('close')[0];
const playMusicButton = document.getElementById('playMusicButton');
const moodSelect = document.getElementById('moodSelect');
const pauseMusicButton = document.getElementById('pauseMusicButton');


const moodMusic = {
    happy: "static/songs/upbear.mp3",
    Inspired: "static/songs/inspiring.mp3",
    relaxed: "static/songs/songRelaxed.mp3",
    fun: "static/songs/fun.mp3",
    energetic: "static/songs/upbear.mp3",
    cool: "static/songs/cool.mp3"
};

// Open modal when music button is clicked
musicButton.onclick = function() {
    moodModal.style.display = "block";
}

// Close modal when close button is clicked
span.onclick = function() {
    moodModal.style.display = "none";
}

// Close modal when user clicks anywhere outside the modal
window.onclick = function(event) {
    if (event.target == moodModal) {
        moodModal.style.display = "none";
    }
}

let audio = null; // Global variable to track currently playing music

// Pause or resume the currently playing music
pauseMusicButton.onclick = function() {
    if (audio && !audio.paused) {
        audio.pause(); // Pause the music if it’s playing
    } else if (audio && audio.paused) {
        audio.play(); // Resume the music if it’s paused
    } else {
        alert("No music is currently playing."); // No music has been played yet
    }
}

// Play music based on selected mood
playMusicButton.onclick = function() {
    const mood = moodSelect.value;
    if (mood && moodMusic[mood]) {
        if (audio) {
            audio.pause(); // Pause any currently playing music before starting new music
        }
        audio = new Audio(moodMusic[mood]); // Assign the new music to the global audio object
        audio.play();
        moodModal.style.display = "none";
    } else {
        alert("Please select your mood.");
    }
}




document.getElementById('jokeButton').addEventListener('click', function() {
    const jokePopup = document.getElementById('jokePopup');
    

    // Display the popup box immediately
    jokePopup.classList.add('show');
    
    // After 10 seconds, display a random joke
    setTimeout(() => {
        const jokes = [
            "Why don't scientists trust atoms? Because they make up everything!",
            "I told my wife she was drawing her eyebrows too high. She looked surprised.",
            "Why don’t skeletons fight each other? They don’t have the guts.",
            "I'm reading a book about anti-gravity. It's impossible to put down!",
            "I would tell you a construction joke, but I'm still working on it."
        ];

        // Get a random joke
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        jokePopup.textContent = randomJoke;
        setTimeout(() => {
            jokePopup.classList.remove('show');
        },7000);
    }, 1); 
});



document.getElementById('exerciseButton').addEventListener('click', function() {
    const exePopup = document.getElementById('exercisePopup');
    

    // Display the popup box immediately
    exePopup.classList.add('show');
    
    // After 10 seconds, display a random joke
    setTimeout(() => {
        const Exe = [
            "Begin with Deep Breathing (Pranayama) <br> Sit comfortably with a straight spine, eyes closed.<br>Inhale through your nose for 4 counts. <br> Hold your breath for 4 counts.<br>Exhale slowly through your mouth for 4 counts. <br> Repeat for 5-10 minutes, focusing on the breath.",
            "Mindful Movement (Cat-Cow Stretch)<br>Start on your hands and knees in a tabletop position. <br> Inhale, arch your back, lifting your head and tailbone (cow pose). <br> Exhale, round your back, tucking your chin and pelvis (cat pose). <br> Repeat this flow for 1-2 minutes, moving with your breath.",
            "Stay Grounded with Child’s Pose (Balasana) <br> Kneel on the floor with your big toes touching and knees apart. <br> Sit back onto your heels and stretch your arms forward. <br> Rest your forehead on the mat, breathing deeply. <br> Hold for 1-2 minutes, allowing your body and mind to relax.",
            "Gentle Backbends (Bridge Pose) <br> Lie on your back with knees bent and feet hip-width apart. <br> Press your feet into the floor, lifting your hips towards the ceiling. <br> Hold the pose for 5 deep breaths. <br> Slowly lower your hips back down, repeating 2-3 times.",
            "Savasana (Corpse Pose) for Relaxation <br> Lie flat on your back with arms and legs comfortably spread. <br> Close your eyes and let your body completely relax. <br> Focus on your breath and let go of any tension. <br> Stay in the pose for 5-10 minutes for deep relaxation."
        ];

        // Get a random joke
        const randomExe = Exe[Math.floor(Math.random() * Exe.length)];
        exePopup.textContent = randomExe;
        setTimeout(() => {
            exePopup.classList.remove('show');
        }, 10000);
    }, 1); 
});
    



