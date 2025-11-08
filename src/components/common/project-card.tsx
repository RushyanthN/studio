'use client';
import React from 'react';

type ProjectCardProps = {
  icon: string;
  title: string;
  description: string;
  stats: { label: string }[];
  tech: string[];
  company?: string;
};

export const ProjectCard = ({ icon, title, description, stats, tech, company }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-card border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="project-header flex items-center mb-5">
        <div className="text-3xl w-12 h-12 rounded-lg flex items-center justify-center mr-4">
          {icon}
        </div>
        <div className="flex-1">
          <div className="project-title text-xl font-bold text-foreground">{title}</div>
          {company && (
            <div className="text-primary-blue text-sm mt-1 font-medium">{company}</div>
          )}
        </div>
      </div>
      <div className="project-description text-muted-foreground mb-5 leading-relaxed">{description}</div>
      <div className="project-stats flex flex-wrap gap-2 mb-5">
        {stats.map((stat, i) => (
          <div key={i} className="bg-blue-50 dark:bg-blue-900/30 text-primary-blue border border-blue-200 dark:border-blue-800 text-sm font-medium py-1 px-3 rounded-full">
            {stat.label}
          </div>
        ))}
      </div>
      <div className="tech-stack flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 text-muted-foreground border border-gray-200 dark:border-gray-700 text-xs py-1 px-3 rounded-full">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
};
