// src/data/tech-fields.ts
export interface TechField {
    id: string;
    name: string;
    description: string;
    icon: string; // Path to icon in public/images/tech-icons/
    color: string; // Tailwind color class for styling
  }
  
  const techFields: TechField[] = [
    {
      id: 'web-dev',
      name: 'Web Development',
      description: 'Build responsive and dynamic websites and web applications',
      icon: 'web-dev.svg',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'data-science',
      name: 'Data Science & ML',
      description: 'Analyze data and build machine learning models',
      icon: 'data-science.svg',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'backend',
      name: 'Backend Engineering',
      description: 'Develop server-side applications and APIs',
      icon: 'backend.svg',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'frontend',
      name: 'Frontend Engineering',
      description: 'Create engaging user interfaces and experiences',
      icon: 'frontend.svg',
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 'devops',
      name: 'DevOps & Cloud',
      description: 'Automate, deploy, and manage infrastructure',
      icon: 'devops.svg',
      color: 'from-orange-500 to-amber-600'
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      description: 'Build native and cross-platform mobile apps',
      icon: 'mobile.svg',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'ai-engineering',
      name: 'AI Engineering',
      description: 'Develop and deploy artificial intelligence systems',
      icon: 'ai.svg',
      color: 'from-violet-500 to-purple-600'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Protect systems, networks, and data from digital attacks',
      icon: 'security.svg',
      color: 'from-red-500 to-rose-600'
    },
    {
      id: 'blockchain',
      name: 'Blockchain',
      description: 'Build decentralized applications and smart contracts',
      icon: 'blockchain.svg',
      color: 'from-amber-500 to-yellow-600'
    },
    {
      id: 'game-dev',
      name: 'Game Development',
      description: 'Create interactive games for various platforms',
      icon: 'game-dev.svg',
      color: 'from-emerald-500 to-green-600'
    }
  ];
  
  export default techFields;