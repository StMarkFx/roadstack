// src/types/roadmap.ts
export interface Resource {
    type: 'Course' | 'GitHub' | 'Article' | 'Documentation' | 'Video' | 'Tool';
    title: string;
    url: string;
    description?: string;
    isPaid?: boolean;
    level?: 'Beginner' | 'Intermediate' | 'Advanced';
  }
  
  export interface Skill {
    id: string;
    name: string;
    description?: string;
    resources: Resource[];
    isEssential?: boolean;
  }
  
  export interface Project {
    id: string;
    name: string;
    description: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    skills: string[]; // IDs of related skills
    githubRepo?: string; // Example repo URL
    demoUrl?: string;
  }
  
  export interface Stage {
    id: string;
    name: string;
    description?: string;
    skills: Skill[];
    projects: Project[];
  }
  
  export interface Roadmap {
    id: string;
    title: string;
    description: string;
    stages: Stage[];
    estimatedTime?: string; // e.g., "6-12 months"
    careerPaths?: string[]; // Related career paths
    recommendedPrerequisites?: string[];
  }