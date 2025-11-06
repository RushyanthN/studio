'use client';
import React, { useRef, useEffect } from 'react';

type ProjectCardProps = {
  icon: string;
  title: string;
  description: string;
  stats: { label: string }[];
  tech: string[];
  company?: string;
};

export const ProjectCard = ({ icon, title, description, stats, tech, company }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = 20 * ((x - rect.width / 2) / (rect.width / 2));
      const rotateX = -20 * ((y - rect.height / 2) / (rect.height / 2));
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl transition-all duration-300 transform-style-3d cursor-pointer overflow-hidden relative"
    >
      <div className="project-header flex items-center mb-5">
        <div className="project-icon text-2xl w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-cyan-magenta">
          {icon}
        </div>
        <div className="flex-1">
          <div className="project-title text-xl font-bold text-white">{title}</div>
          {company && (
            <div className="text-cyan-400 text-sm mt-1 font-medium">{company}</div>
          )}
        </div>
      </div>
      <div className="project-description text-gray-300 mb-5">{description}</div>
      <div className="project-stats flex flex-wrap gap-2 mb-5">
        {stats.map((stat, i) => (
          <div key={i} className="stat-badge bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 text-sm font-bold py-1 px-3 rounded-full">
            {stat.label}
          </div>
        ))}
      </div>
      <div className="tech-stack flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <div key={i} className="tech-tag bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30 text-xs py-1 px-3 rounded-full">
            {t}
          </div>
        ))}
      </div>
       <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 group-hover:left-full"></div>
    </div>
  );
};
