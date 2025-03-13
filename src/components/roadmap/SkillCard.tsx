// src/components/roadmap/SkillCard.tsx
import React, { useState } from 'react';
import { Skill } from '../../types/roadmap';
import ResourceLink from '../common/ResourceLink';

interface SkillCardProps {
  skill: Skill;
  isCompleted: boolean;
  onToggle: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, isCompleted, onToggle }) => {
  const [showResources, setShowResources] = useState(false);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg border overflow-hidden shadow-sm transition-all duration-200 
      ${isCompleted ? 'border-green-500 dark:border-green-600' : 'border-gray-200 dark:border-gray-700'}
      ${skill.isEssential ? 'ring-2 ring-indigo-500 ring-opacity-50' : ''}
    `}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h5 className="font-semibold text-gray-800 dark:text-white">
            {skill.name}
            {skill.isEssential && (
              <span className="ml-2 px-1.5 py-0.5 text-xs rounded-md bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-