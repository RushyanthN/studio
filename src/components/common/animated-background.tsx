'use client';
import React, { useEffect } from 'react';

export function AnimatedBackground() {
  useEffect(() => {
    const createParticles = () => {
      const container = document.getElementById('particles-container');
      if (!container) return;
      container.innerHTML = '';
      const particleCount = 80;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${Math.random() * 6 + 6}s`;
        container.appendChild(particle);
      }
    };

    const createGeometricShapes = () => {
      const container = document.getElementById('geometric-shapes-container');
      if (!container) return;
      container.innerHTML = '';
      const shapeTypes = ['triangle', 'square', 'circle', 'hexagon'];
      const shapeCount = 15;
      for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        shape.className = `geometric-shape shape-${shapeType}`;
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.animationDelay = `${Math.random() * 20}s`;
        shape.style.animationDuration = `${Math.random() * 10 + 15}s`;
        container.appendChild(shape);
      }
    };
    
    createParticles();
    createGeometricShapes();

    const handleMouseMove = (e: MouseEvent) => {
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        document.body.appendChild(trail);
        setTimeout(() => {
            trail.remove();
        }, 800);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  return (
    <>
      <style jsx global>{`
        .particles, .geometric-shapes {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }
        .particles { z-index: -1; }
        .geometric-shapes { z-index: -2; }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
          background: rgba(0, 255, 255, 0.8);
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }
        .particle:nth-child(2n) {
          background: rgba(255, 0, 255, 0.8);
          box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
        }
        .particle:nth-child(3n) {
          background: rgba(255, 255, 0, 0.6);
          box-shadow: 0 0 10px rgba(255, 255, 0, 0.4);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          25% { transform: translateY(-30px) rotate(90deg); opacity: 1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.9; }
          75% { transform: translateY(-40px) rotate(270deg); opacity: 1; }
        }

        .geometric-shape {
          position: absolute;
          opacity: 0.1;
          animation: geometricFloat 20s linear infinite;
        }
        @keyframes geometricFloat {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.1; }
          90% { opacity: 0.1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }

        .shape-triangle { width: 0; height: 0; border-left: 25px solid transparent; border-right: 25px solid transparent; border-bottom: 50px solid #00ffff; }
        .shape-square { width: 40px; height: 40px; background: linear-gradient(45deg, #ff00ff, #00ffff); transform: rotate(45deg); }
        .shape-circle { width: 30px; height: 30px; border-radius: 50%; background: radial-gradient(circle, #ffff00, #ff00ff); }
        .shape-hexagon { width: 30px; height: 17.32px; background: #00ffff; position: relative; margin: 8.66px 0; }
        .shape-hexagon:before, .shape-hexagon:after { content: ""; position: absolute; width: 0; border-left: 15px solid transparent; border-right: 15px solid transparent; }
        .shape-hexagon:before { bottom: 100%; border-bottom: 8.66px solid #00ffff; }
        .shape-hexagon:after { top: 100%; border-top: 8.66px solid #00ffff; }

        .mouse-trail {
          position: fixed;
          width: 4px;
          height: 4px;
          background: rgba(0, 255, 255, 0.8);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1000;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
          animation: trailFade 0.8s ease-out forwards;
        }
        @keyframes trailFade {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0); }
        }
      `}</style>
      <div id="particles-container" className="particles"></div>
      <div id="geometric-shapes-container" className="geometric-shapes"></div>
    </>
  );
}
