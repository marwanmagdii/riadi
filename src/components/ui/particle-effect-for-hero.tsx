import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MousePointer2, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Types ---

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  angle: number; // For some organic oscillation
  emoji: string;
}

interface BackgroundParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
  emoji: string;
}

interface MouseState {
  x: number;
  y: number;
  isActive: boolean;
}

// --- Configuration Constants ---

const PARTICLE_DENSITY = 0.00004; // Reduced for better performance
const BG_PARTICLE_DENSITY = 0.00002; // Reduced for better performance
const MOUSE_RADIUS = 250; // Radius of mouse influence
const RETURN_SPEED = 0.12; // Faster return to origin for snappier feel
const DAMPING = 0.85; // More friction so they stop sliding and react faster
const REPULSION_STRENGTH = 2.5; // Stronger immediate push force

const SPORTS_EMOJIS = ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱'];

// --- Helper Functions ---

const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

// --- Components ---

const AntiGravityCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [debugInfo, setDebugInfo] = useState({ count: 0, fps: 0 });
  
  // Mutable state refs to avoid re-renders during animation loop
  const particlesRef = useRef<Particle[]>([]);
  const backgroundParticlesRef = useRef<BackgroundParticle[]>([]);
  const mouseRef = useRef<MouseState>({ x: -1000, y: -1000, isActive: false });
  const frameIdRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Initialize Particles
  const initParticles = useCallback((width: number, height: number) => {
    // 1. Main Interactive Particles
    const particleCount = Math.floor(width * height * PARTICLE_DENSITY);
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      
      newParticles.push({
        x: x,
        y: y,
        originX: x,
        originY: y,
        vx: 0,
        vy: 0,
        size: randomRange(1.5, 3.5), 
        color: Math.random() > 0.8 ? '#22c55e' : (Math.random() > 0.5 ? '#eab308' : '#ffffff'), 
        angle: Math.random() * Math.PI * 2,
        emoji: SPORTS_EMOJIS[Math.floor(Math.random() * SPORTS_EMOJIS.length)]
      });
    }
    particlesRef.current = newParticles;

    // 2. Background Ambient Particles (Sports Balls)
    const bgCount = Math.floor(width * height * BG_PARTICLE_DENSITY);
    const newBgParticles: BackgroundParticle[] = [];
    
    for (let i = 0; i < bgCount; i++) {
      newBgParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2, // Very slow drift
        vy: (Math.random() - 0.5) * 0.2,
        size: randomRange(0.8, 2.0), // Slightly larger to compensate for fewer particles
        alpha: randomRange(0.2, 0.6),
        phase: Math.random() * Math.PI * 2, // For twinkling offset
        emoji: SPORTS_EMOJIS[Math.floor(Math.random() * SPORTS_EMOJIS.length)]
      });
    }
    backgroundParticlesRef.current = newBgParticles;

    setDebugInfo(prev => ({ ...prev, count: particleCount + bgCount }));
  }, []);

  // Animation Loop
  const animate = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Calculate Delta Time for smooth animation (optional, but good for FPS calculation)
    const delta = time - lastTimeRef.current;
    lastTimeRef.current = time;
    if (delta > 0) {
        setDebugInfo(prev => ({ ...prev, fps: Math.round(1000 / delta) }));
    }

    // Clear Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // --- Background Effects ---
    
    // Dark overlay to make text/particles visible over the football field background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 1. Pulsating Radial Glow
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const pulseSpeed = 0.0008;
    // Oscillates between 0.05 and 0.12 opacity
    const pulseOpacity = Math.sin(time * pulseSpeed) * 0.035 + 0.085; 
    
    const gradient = ctx.createRadialGradient(
        centerX, centerY, 0, 
        centerX, centerY, Math.max(canvas.width, canvas.height) * 0.7
    );
    gradient.addColorStop(0, `rgba(34, 197, 94, ${pulseOpacity})`); // Greenish glow
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Background Particles (Drifting Sports Balls)
    const bgParticles = backgroundParticlesRef.current;
    
    for (let i = 0; i < bgParticles.length; i++) {
      const p = bgParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      
      // Wrap around screen
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Twinkle effect
      const twinkle = Math.sin(time * 0.002 + p.phase) * 0.5 + 0.5; // 0 to 1
      const currentAlpha = p.alpha * (0.3 + 0.7 * twinkle);

      ctx.globalAlpha = currentAlpha;
      ctx.font = `${Math.max(12, p.size * 15)}px Arial`;
      ctx.fillText(p.emoji, p.x, p.y);
    }
    ctx.globalAlpha = 1.0; // Reset alpha for foreground

    // --- Main Foreground Physics ---

    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    // Phase 1: Apply Forces (Mouse & Spring)
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // 1. Calculate Distance to Mouse
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // 2. Mouse Repulsion Force
      if (mouse.isActive && distance < MOUSE_RADIUS) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        // Use a power curve for force so it's much stronger closer to the mouse
        const force = Math.pow((MOUSE_RADIUS - distance) / MOUSE_RADIUS, 2); 
        
        const repulsion = force * REPULSION_STRENGTH * 15;
        p.vx -= forceDirectionX * repulsion; 
        p.vy -= forceDirectionY * repulsion;
      }

      // 3. Spring Force (Return to Origin)
      const springDx = p.originX - p.x;
      const springDy = p.originY - p.y;
      
      p.vx += springDx * RETURN_SPEED;
      p.vy += springDy * RETURN_SPEED;
    }

    // Phase 2: Integration & Drawing (Collision removed for max performance)
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Physics Update
      p.vx *= DAMPING;
      p.vy *= DAMPING;

      p.x += p.vx;
      p.y += p.vy;

      // Drawing
      const velocity = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      const opacity = Math.min(0.3 + velocity * 0.1, 1); 
      
      ctx.globalAlpha = opacity;
      ctx.font = `${Math.max(12, p.size * 15)}px Arial`;
      ctx.fillText(p.emoji, p.x, p.y);
      ctx.globalAlpha = 1.0;
    }

    frameIdRef.current = requestAnimationFrame(animate);
  }, []);

  // Resize Handler
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && canvasRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        
        // Set actual size in memory (scaled to account for extra pixel density)
        canvasRef.current.width = width * dpr;
        canvasRef.current.height = height * dpr;
        
        // Make it visible size
        canvasRef.current.style.width = `${width}px`;
        canvasRef.current.style.height = `${height}px`;

        // Normalize coordinate system to use CSS pixels
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);

        // Re-init particles for new dimensions
        initParticles(width, height);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize);
  }, [initParticles]);

  // Start Animation
  useEffect(() => {
    frameIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameIdRef.current);
  }, [animate]);

  // Mouse Handlers
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isActive: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.isActive = false;
  };

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden"
      style={{
        cursor: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px;'><text y='24'>⚽</text></svg>\") 16 16, auto"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

import { NavBar } from "./tubelight-navbar";
import { Hero } from "./animated-hero";

// --- Main App Component ---

export default function ParticleEffectForHero() {
  return (
    <div className="relative w-full h-screen bg-transparent overflow-hidden selection:bg-secondary selection:text-white">
      <AntiGravityCanvas />
      <Hero />
    </div>
  );
}
