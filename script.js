// =====================================================
// CUSTOMIZATION SECTION - EDIT THESE VALUES
// =====================================================

// Images for each stage (0-5)
const stageImages = [
    './pics/forehead kiss.jpg', // Stage 0
    './pics/drive trip.jpg', // Stage 1
    './pics/cuddle.jpg', // Stage 2
    './pics/care.jpg', // Stage 3
    './pics/pls bb.jpg', // Stage 4
    './pics/roses.jpg'  // Stage 5
];

// Messages for each stage (0-5)
const stageMessages = [
    "I promise to make every day special! 💕",
    "Are you sure? I'll take u ghummi shummi! ☕",
    "Think about all the cuddles we'll share! 🤗",
    "I'll always be there to care for you! 🌟",
    "Please? You're my everything! 💖",
    "This is your last chance to say no... but why would you? 😊"
];

// =====================================================
// MAIN CODE - NO NEED TO EDIT BELOW
// =====================================================

let currentStage = 0;
const maxStages = 5;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const valentineImage = document.getElementById('valentineImage');
const floatingHearts = document.getElementById('floatingHearts');

// Initialize the page
function init() {
    updateStage();
    
    // Add event listeners
    yesBtn.addEventListener('click', handleYesClick);
    noBtn.addEventListener('click', handleNoClick);
    
    // Create floating hearts periodically
    setInterval(createFloatingHeart, 300);
}

// Update the page based on current stage
function updateStage() {
    // Update image
    valentineImage.src = stageImages[currentStage];
    
    // Update message
    message.textContent = stageMessages[currentStage];
    
    // Update Yes button size by changing stage class
    yesBtn.className = 'btn btn-yes stage-' + currentStage;
    
    // Hide No button at final stage (after 5 clicks)
    if (currentStage === maxStages) {
        noBtn.classList.add('hidden');
    }
}

// Handle Yes button click - Redirect to success page
function handleYesClick() {
    // Create explosion of hearts
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createFloatingHeart(), i * 50);
    }
    
    // Redirect to success page after short delay
    setTimeout(() => {
        window.location.href = 'success.html';
    }, 800);
}

// Handle No button click - Advance to next stage
function handleNoClick() {
    if (currentStage < maxStages) {
        currentStage++;
        updateStage();
        
        // Add bounce effect to NO button
        noBtn.style.animation = 'none';
        setTimeout(() => {
            noBtn.style.animation = 'shake 0.5s ease-in-out';
        }, 10);
    }
}

// Create floating heart animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = ['❤️', '💕', '💖', '💗', '💓', '💝'][Math.floor(Math.random() * 6)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';
    heart.style.fontSize = (15 + Math.random() * 15) + 'px';
    
    floatingHearts.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Add shake animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// Initialize when page loads
window.addEventListener('load', init);
