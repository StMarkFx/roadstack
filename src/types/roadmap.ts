// src/types/roadmap.ts

// Enum for resource types
export enum ResourceType {
  Course = "Course",
  GitHub = "GitHub",
  Article = "Article",
  Documentation = "Documentation",
  Video = "Video",
  Tool = "Tool",
}

// Enum for difficulty levels
export enum DifficultyLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

// Resource type for learning materials
export interface Resource {
  type: ResourceType;
  title: string;
  url: string;
  description?: string;
  isPaid?: boolean;
  level?: DifficultyLevel;
}

// Skill type with related resources
export interface Skill {
  id?: string; // Optional if used only inside a stage
  name: string;
  description?: string;
  resources: Resource[];
  isEssential?: boolean;
}

// Project type with related skills
export interface Project {
  id?: string;
  name: string;
  description: string;
  difficulty: DifficultyLevel;
  skills: string[]; // IDs of related skills
  githubRepo?: string;
  demoUrl?: string;
}
