import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const totalFrames = 91;
    const images: HTMLImageElement[] = [];
    let scrollProgress = 0;
    let time = 0;

    // Mouse coordinates for interactive parallax camera wobble
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetMouseX = window.innerWidth / 2;
    let targetMouseY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Interpolate mouse coordinates for fluid movement
    const updateMouse = () => {
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
    };

    // Helper to format frame image path
    const getFramePath = (index: number) => {
      const padIndex = String(index).padStart(3, "0");
      return `/upscaled/ezgif-frame-${padIndex}.jpg`;
    };

    // Preload all 91 frame images
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      images.push(img);
    }

    // Handle resize to fit screen size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Cover image drawing algorithm (analogous to object-fit: cover)
    const drawCoverImage = (img: HTMLImageElement, camX: number, camY: number) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;

      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth, drawHeight, x, y;

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
      const paddingX = canvasWidth * 0.04;
      const paddingY = canvasHeight * 0.04;
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
    };

    // Draw dynamic light tubes that glow on screen sides
    const drawDynamicLighting = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Pulsing frequency based on active loop time
      const glowIntensity = 0.3 + Math.sin(time * 2.5) * 0.15;

      // Draw left vertical neon glow
      const leftGlow = context.createLinearGradient(0, 0, w * 0.05, 0);
      leftGlow.addColorStop(0, `rgba(255, 40, 40, ${glowIntensity})`);
      leftGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = leftGlow;
      context.fillRect(0, 0, w * 0.05, h);

      // Draw right vertical neon glow
      const rightGlow = context.createLinearGradient(w, 0, w * 0.95, 0);
      rightGlow.addColorStop(0, `rgba(255, 40, 40, ${glowIntensity})`);
      rightGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = rightGlow;
      context.fillRect(w * 0.95, 0, w * 0.05, h);

      // Cinematic dark vignette overlay
      const vignette = context.createRadialGradient(w / 2, h / 2, w * 0.25, w / 2, h / 2, w * 0.7);
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(0.5, "rgba(0, 0, 0, 0.3)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.95)");
      context.fillStyle = vignette;
      context.fillRect(0, 0, w, h);
    };

    // Main render frame function
    let animationFrameId: number;
    const render = () => {
      time += 0.03;
      updateMouse();

      // Camera inertia offsets based on time and mouse coordinates
      const camX = Math.sin(time * 0.45) * 10 + (mouseX - window.innerWidth / 2) * 0.035;
      const camY = Math.cos(time * 0.45) * 10 + (mouseY - window.innerHeight / 2) * 0.035;

      // Determine current video frame mapping from scroll progress
      const targetFrameIndex = 1 + Math.round(scrollProgress * (totalFrames - 1));
      const img = images[targetFrameIndex - 1] || images[0];

      // Clear buffer
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background covered video frame
      drawCoverImage(img, camX, camY);

      // Draw vignette & dynamic neon glows
      drawDynamicLighting();

      animationFrameId = requestAnimationFrame(render);
    };

    // Setup GSAP ScrollTrigger to animate progress of the entire body scroll
    const pinState = { progress: 0 };
    const tween = gsap.to(pinState, {
      progress: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "#portfolio-root",
        start: "top top",
        endTrigger: "#certificates",
        end: "top top",
        scrub: true, // Direct frame synchronization (no easing delay at the bottom)
        onUpdate: (self) => {
          if (canvas) {
            if (self.progress >= 0.995) {
              canvas.style.display = "none";
            } else {
              canvas.style.display = "block";
            }
          }
        },
        onLeave: () => {
          if (canvas) {
            canvas.style.display = "none";
          }
        },
        onEnterBack: () => {
          if (canvas) {
            canvas.style.display = "block";
          }
        },
      },
      onUpdate: () => {
        scrollProgress = pinState.progress;
      },
    });

    render();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10" />;
}
