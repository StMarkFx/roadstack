// src/components/roadmap/RoadmapTimeline.tsx
import React from 'react';
import { Stage, Skill, Project } from '../../types/roadmap';
import SkillCard from './SkillCard';
import ProjectCard from './ProjectCard';

interface RoadmapTimelineProps {
  stages: Stage[];
  completedSkills: string[];
  onToggleSkill: (skillId: string) => void;
}

const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({
  stages,
  completedSkills,
  onToggleSkill
}) => {
  return (
    <div className="space-y-16">
      {stages.map((stage, index) => (
        <div key={stage.id} className="relative">
          {/* Timeline connector */}
          {index < stages.length - 1 && (
            <div className="absolute left-6 top-16 bottom-0 w-1 bg-gray-200 dark:bg-gray-700"></div>
          )}
          
          {/* Stage header */}
          <div className="flex items-center mb-6">
            <div className="relative">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
                {index + 1}
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{stage.name}</h3>
              {stage.description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{stage.description}</p>
              )}
            </div>
          </div>
          
          {/* Skills section */}
          <div className="ml-16 mb-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
              Skills to Master
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stage.skills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  isCompleted={completedSkills.includes(skill.id)}
                  onToggle={() => onToggleSkill(skill.id)}
                />
              ))}
            </div>
          </div>
          
          {/* Projects section */}
          <div className="ml-16">
            <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
              Recommended Projects
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stage.projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  completedSkills={completedSkills}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadmapTimeline;