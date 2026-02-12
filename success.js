// =====================================================
// CUSTOMIZATION SECTION - EDIT THESE VALUES
// =====================================================

// Benefits to display (icon and text pairs)
const benefits = [
    { icon: '💝', text: 'Unlimited Love' },
    { icon: '🤗', text: 'Always Support' },
    { icon: '💖', text: 'Total Care' },
    { icon: '🔒', text: 'No Betrayal' },
    { icon: '🌟', text: 'Endless Adventures' },
    { icon: '😊', text: 'Daily Smiles' },
    { icon: '🎁', text: 'Surprise Gifts' },
    { icon: '🌈', text: 'Colorful Memories' },
    { icon: '🎵', text: 'Shared Playlists' },
    { icon: '🍕', text: 'Food Adventures' },
    { icon: '🌹', text: 'Fresh Flowers' },
    { icon: '🎬', text: 'Movie Nights' }
];

// =====================================================
// MAIN CODE - NO NEED TO EDIT BELOW
// =====================================================

// Wait for page to load
window.addEventListener('load', () => {
    initSuccessPage();
});

function initSuccessPage() {
    // Populate benefits
    populateBenefits();
    
    // Start confetti animation
    startConfetti();
    
    // Add download button listener
    document.getElementById('downloadBtn').addEventListener('click', downloadCoupon);
}

// Populate benefits grid
function populateBenefits() {
    const benefitsGrid = document.getElementById('benefitsGrid');
    
    benefits.forEach((benefit, index) => {
        const benefitItem = document.createElement('div');
        benefitItem.className = 'benefit-item';
        benefitItem.style.animationDelay = (index * 0.1) + 's';
        benefitItem.innerHTML = `
            <span class="benefit-icon">${benefit.icon}</span>
            <span class="benefit-text">${benefit.text}</span>
        `;
        benefitsGrid.appendChild(benefitItem);
    });
}

// Confetti/Crackers animation using canvas-confetti library
function startConfetti() {
    // Initial big burst
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff1744', '#ff4081', '#ff69b4', '#ff1493', '#ff69b4']
    });
    
    // Continuous confetti for 5 seconds
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const defaults = { 
        startVelocity: 30, 
        spread: 360, 
        ticks: 60, 
        zIndex: 10000,
        colors: ['#ff1744', '#ff4081', '#ff69b4', '#ff1493', '#ff69b4', '#00e676']
    };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Left side
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        
        // Right side
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
    }, 250);
    
    // Add celebration bursts every 2 seconds
    let burstCount = 0;
    const burstInterval = setInterval(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff1744', '#ff4081', '#ff69b4']
        });
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff1744', '#ff4081', '#ff69b4']
        });
        
        burstCount++;
        if (burstCount >= 3) {
            clearInterval(burstInterval);
        }
    }, 2000);
}

// Download coupon as image
async function downloadCoupon() {
    const coupon = document.getElementById('coupon');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Change button text
    const originalText = downloadBtn.textContent;
    downloadBtn.textContent = '⏳ Generating...';
    downloadBtn.disabled = true;
    
    try {
        // Use html2canvas to convert coupon to image
        const canvas = await html2canvas(coupon, {
            backgroundColor: '#ffffff',
            scale: 2, // Higher quality
            logging: false,
            useCORS: true,
            allowTaint: true,
            width: coupon.offsetWidth,
            height: coupon.offsetHeight
        });
        
        // Convert canvas to blob
        canvas.toBlob((blob) => {
            // Create download link
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'valentine-love-coupon.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            // Reset button
            downloadBtn.textContent = '✅ Downloaded!';
            setTimeout(() => {
                downloadBtn.textContent = originalText;
                downloadBtn.disabled = false;
            }, 2000);
            
            // Show success hearts
            showDownloadSuccess();
        });
    } catch (error) {
        console.error('Error generating image:', error);
        downloadBtn.textContent = '❌ Error - Try Again';
        setTimeout(() => {
            downloadBtn.textContent = originalText;
            downloadBtn.disabled = false;
        }, 2000);
    }
}

// Show hearts animation on successful download
function showDownloadSuccess() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#ff1744', '#ff4081', '#00e676']
    });
}

// Add benefit items animation
const benefitStyle = document.createElement('style');
benefitStyle.textContent = `
    .benefit-item {
        animation: slideInBenefit 0.5s ease-out backwards;
    }
    
    @keyframes slideInBenefit {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(benefitStyle);
