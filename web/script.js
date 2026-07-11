// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("scroll-canvas");
const context = canvas.getContext("2d");
const animationSection = document.querySelector(".animation-section");

const totalFrames = 91;
const images = [];
let scrollProgress = 0; // Controlled smoothly by GSAP scrub
let time = 0;

// Mouse coordinates for interactive parallax camera wobble
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let targetMouseX = window.innerWidth / 2;
let targetMouseY = window.innerHeight / 2;

window.addEventListener('mousemove', (e) => {
    targetMouseX = e.clientX;
    targetMouseY = e.clientY;
});

// Interpolate mouse coordinates for fluid movement
function updateMouse() {
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;
}

// Helper to format frame image path
const getFramePath = (index) => {
    const padIndex = String(index).padStart(3, '0');
    return `../upscaled/ezgif-frame-${padIndex}.jpg`;
};

// Handle resize to fit screen size
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Preload images
function preloadImages() {
    for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        images.push(img);
    }
}

// --- Zero-Gravity Setup ---

// --- Draw Helpers ---
function drawCoverImage(img, camX, camY) {
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, x, y;

    // Apply standard cover algorithm
    if (canvasRatio > imgRatio) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        x = 0;
        y = (canvasHeight - drawHeight) / 2;
    } else {
        drawWidth = canvasHeight * imgRatio;
        drawHeight = canvasHeight;
        x = (canvasWidth - drawWidth) / 2;
        y = 0;
    }

    // Apply subtle parallax pan from scroll position and camera wobble
    // 5% scale padding to avoid showing edges during camera wobble
    const paddingX = canvasWidth * 0.04;
    const paddingY = canvasHeight * 0.04;
    
    // Calculate scroll-based camera drop
    const scrollParallaxY = scrollProgress * 30;

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    
    context.drawImage(
        img, 
        x - paddingX / 2 + camX * 0.6, 
        y - paddingY / 2 + camY * 0.6 - scrollParallaxY, 
        drawWidth + paddingX, 
        drawHeight + paddingY
    );
}



// Draw dynamic light tubes that glow on screen sides
function drawDynamicLighting() {
    const w = canvas.width;
    const h = canvas.height;

    // Pulsing frequency based on active loop time
    const glowIntensity = 0.3 + Math.sin(time * 2.5) * 0.15;

    // Draw left vertical neon glow
    const leftGlow = context.createLinearGradient(0, 0, w * 0.05, 0);
    leftGlow.addColorStop(0, `rgba(255, 40, 40, ${glowIntensity})`);
    leftGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    context.fillStyle = leftGlow;
    context.fillRect(0, 0, w * 0.05, h);

    // Draw right vertical neon glow
    const rightGlow = context.createLinearGradient(w, 0, w * 0.95, 0);
    rightGlow.addColorStop(0, `rgba(255, 40, 40, ${glowIntensity})`);
    rightGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    context.fillStyle = rightGlow;
    context.fillRect(w * 0.95, 0, w * 0.05, h);

    // Cinematic dark vignette overlay
    const vignette = context.createRadialGradient(w/2, h/2, w * 0.25, w/2, h/2, w * 0.7);
    vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vignette.addColorStop(0.5, 'rgba(0, 0, 0, 0.3)');
    vignette.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
    context.fillStyle = vignette;
    context.fillRect(0, 0, w, h);
}

// Main render frame function
function render() {
    time += 0.03; // Continuous micro-drift physics tick
    updateMouse();

    // Camera inertia offsets based on time and mouse coordinates
    const camX = Math.sin(time * 0.45) * 10 + (mouseX - window.innerWidth / 2) * 0.035;
    const camY = Math.cos(time * 0.45) * 10 + (mouseY - window.innerHeight / 2) * 0.035;

    // Determine current video frame mapping from scroll progress
    const targetFrameIndex = 1 + Math.round(scrollProgress * (totalFrames - 1));
    const img = images[targetFrameIndex - 1] || images[0];

    // Clear buffer
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Layer 1: Draw background covered video frame
    drawCoverImage(img, camX, camY);



    // Layer 5: Draw vignette & dynamic neon glows
    drawDynamicLighting();

    requestAnimationFrame(render);
}

// Setup GSAP ScrollTrigger to pin the section
function initGSAP() {
    const pinState = { progress: 0 };

    gsap.to(pinState, {
        progress: 1,
        ease: "none",
        scrollTrigger: {
            trigger: ".animation-section",
            start: "top top",
            end: "+=300%", // Covers 3 full page scrolls (300vh scroll height)
            pin: true,
            scrub: 0.8, // Smooth scrub delay for high performance response
            anticipatePin: 1,
            onUpdate: (self) => {
                scrollProgress = pinState.progress;
            }
        }
    });
}

// Init
window.addEventListener('resize', resize);
preloadImages();
resize();
initGSAP();

// Start loop
requestAnimationFrame(render);
