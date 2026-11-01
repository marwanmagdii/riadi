import React, { useEffect, useRef } from 'react';
import { Hero } from "./animated-hero";

// --- Types ---

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  sprite: HTMLCanvasElement;
}

interface BackgroundParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  phase: number;
  sprite: HTMLCanvasElement;
}

// --- Configuration Constants ---

const PARTICLE_DENSITY = 0.00004;
const BG_PARTICLE_DENSITY = 0.00002;
const MAX_PARTICLES = 90; // hard cap so huge screens stay smooth
const MOUSE_RADIUS = 200;
const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;
const RETURN_SPEED = 0.015; // gentle drift back home
const DAMPING = 0.92; // glide instead of snapping
const REPULSION_STRENGTH = 0.6; // soft push
const SPRITE_SIZES = [24, 32, 44];

const SPORTS_EMOJIS = ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱'];

// --- Helpers ---

const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

// Emoji text rendering is expensive; render each emoji/size once to an offscreen canvas
// and blit it with drawImage every frame instead of calling fillText.
function buildSprites(dpr: number): HTMLCanvasElement[] {
  const sprites: HTMLCanvasElement[] = [];
  for (const size of SPRITE_SIZES) {
    for (const emoji of SPORTS_EMOJIS) {
      const c = document.createElement('canvas');
      const px = Math.ceil(size * 1.3 * dpr);
      c.width = px;
      c.height = px;
      const ctx = c.getContext('2d')!;
      ctx.scale(dpr, dpr);
      ctx.font = `${size}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(emoji, (size * 1.3) / 2, (size * 1.3) / 2);
      sprites.push(c);
    }
  }
  return sprites;
}

// --- Components ---

const AntiGravityCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const sprites = buildSprites(dpr);

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let bgParticles: BackgroundParticle[] = [];
    const mouse = { x: -1000, y: -1000, active: false };
    let frameId = 0;
    let visible = true;

    const init = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(MAX_PARTICLES, Math.floor(width * height * PARTICLE_DENSITY));
      particles = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return { x, y, originX: x, originY: y, vx: 0, vy: 0, sprite: pick(sprites) };
      });

      const bgCount = Math.min(MAX_PARTICLES / 2, Math.floor(width * height * BG_PARTICLE_DENSITY));
      bgParticles = Array.from({ length: bgCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: 0.2 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
        sprite: sprites[Math.floor(Math.random() * SPORTS_EMOJIS.length)], // smallest size
      }));
    };

    const draw = (s: HTMLCanvasElement, x: number, y: number) => {
      const w = s.width / dpr;
      ctx.drawImage(s, x - w / 2, y - w / 2, w, w);
    };

    let lastTime = 0;

    const frame = (time: number) => {
      const dt = lastTime ? Math.min((time - lastTime) / 16.667, 2) : 1;
      lastTime = time;
      const damp = Math.pow(DAMPING, dt);

      ctx.clearRect(0, 0, width, height);

      for (const p of bgParticles) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x < 0) p.x = width; else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height; else if (p.y > height) p.y = 0;
        const twinkle = Math.sin(time * 0.0008 + p.phase) * 0.5 + 0.5;
        ctx.globalAlpha = p.alpha * (0.3 + 0.7 * twinkle);
        draw(p.sprite, p.x, p.y);
      }

      for (const p of particles) {
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MOUSE_RADIUS_SQ && distSq > 0) {
            const distance = Math.sqrt(distSq);
            const force = ((MOUSE_RADIUS - distance) / MOUSE_RADIUS) ** 2;
            const repulsion = (force * REPULSION_STRENGTH * 15 * dt) / distance;
            p.vx -= dx * repulsion;
            p.vy -= dy * repulsion;
          }
        }
        p.vx = (p.vx + (p.originX - p.x) * RETURN_SPEED * dt) * damp;
        p.vy = (p.vy + (p.originY - p.y) * RETURN_SPEED * dt) * damp;
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        const speedSq = p.vx * p.vx + p.vy * p.vy;
        ctx.globalAlpha = Math.min(0.3 + Math.sqrt(speedSq) * 0.1, 1);
        draw(p.sprite, p.x, p.y);
      }
      ctx.globalAlpha = 1;

      if (visible && !reduceMotion) frameId = requestAnimationFrame(frame);
    };

    const start = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(frame);
    };

    init();
    start(); // with reduced motion this draws a single static frame

    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => { init(); start(); }, 150);
    };
    window.addEventListener('resize', onResize);

    // Stop animating when the hero is scrolled out of view
    const io = new IntersectionObserver(([entry]) => {
      const wasVisible = visible;
      visible = entry.isIntersecting;
      if (visible && !wasVisible) start();
    });
    io.observe(container);

    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };
    container.addEventListener('pointermove', onMove, { passive: true });
    container.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      io.disconnect();
      container.removeEventListener('pointermove', onMove);
      container.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden"
      style={{
        // Static overlay + glow (previously redrawn on the canvas every frame)
        background:
          'radial-gradient(ellipse at center, rgba(34,197,94,0.085) 0%, rgba(0,0,0,0.4) 70%), rgba(0,0,0,0.6)',
        cursor: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px;'><text y='24'>⚽</text></svg>\") 16 16, auto",
      }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

// --- Main App Component ---

export default function ParticleEffectForHero() {
  return (
    <div className="relative w-full min-h-[100svh] bg-transparent overflow-hidden selection:bg-secondary selection:text-white">
      <AntiGravityCanvas />
      <Hero />
    </div>
  );
}
