'use client';
import React, { useEffect } from 'react';

export function AnimatedBackground() {
  useEffect(() => {
    const createParticles = () => {
      const container = document.getElementById('particles-container');
      if (!container) return;
      container.innerHTML = '';
      const particleCount = 30;
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
      const shapeCount = 5;
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

    // Removed mouse trail for more professional look

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
          width: 2px;
          height: 2px;
          border-radius: 50%;
          animation: float 12s ease-in-out infinite;
          background: rgba(0, 255, 255, 0.3);
          box-shadow: 0 0 5px rgba(0, 255, 255, 0.2);
        }
        .particle:nth-child(2n) {
          background: rgba(0, 255, 255, 0.25);
          box-shadow: 0 0 5px rgba(0, 255, 255, 0.15);
        }
        .particle:nth-child(3n) {
          background: rgba(0, 255, 255, 0.2);
          box-shadow: 0 0 5px rgba(0, 255, 255, 0.1);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          25% { transform: translateY(-30px) rotate(90deg); opacity: 1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.9; }
          75% { transform: translateY(-40px) rotate(270deg); opacity: 1; }
        }

        .geometric-shape {
          position: absolute;
          opacity: 0.05;
          animation: geometricFloat 25s linear infinite;
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

      `}</style>
      <div id="particles-container" className="particles"></div>
      <div id="geometric-shapes-container" className="geometric-shapes"></div>
    </>
  );
}
