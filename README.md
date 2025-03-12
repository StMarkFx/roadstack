# 🚀 Tech Career Roadmap

An interactive web application that helps developers visualize clear learning paths for various technology careers. Select your desired tech field and discover a comprehensive roadmap of skills to acquire, projects to build, and curated learning resources.

![Tech Career Roadmap Screenshot](https://via.placeholder.com/1200x630)

## ✨ Features

- **Interactive Field Selection**: Choose from multiple tech paths including Web Development, Data Science, Backend Engineering, Frontend Engineering, DevOps, and Mobile Development
- **Visual Learning Paths**: Clear, step-by-step progression from fundamentals to advanced topics
- **Curated Resources**: Each skill links to high-quality learning materials and GitHub repositories
- **Project Recommendations**: Practical project ideas to build your portfolio and demonstrate skills
- **Progress Tracking**: Mark skills as completed to track your learning journey
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tech-roadmap-app.git
cd tech-roadmap-app

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env.local
# Fill in your Supabase credentials in .env.local
```

### Running Locally

```bash
# Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
# Create an optimized production build
npm run build
# or
yarn build

# Start the production server
npm start
# or
yarn start
```

## 📁 Project Structure

```
tech-roadmap-app/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React components
│   │   ├── layout/          # Layout components
│   │   ├── ui/              # Reusable UI components
│   │   ├── roadmap/         # Roadmap-specific components
│   │   └── common/          # Common components
│   ├── data/                # Roadmap and resource data
│   ├── lib/                 # Utility functions and hooks
│   ├── contexts/            # React contexts
│   └── services/            # External service integrations
├── public/                  # Static assets
├── prisma/                  # Database schema (if using Prisma)
└── tests/                   # Test files
```

## 🧩 Core Components

- **FieldSelector**: Interactive component for selecting technology fields
- **RoadmapTimeline**: Visual representation of the learning journey
- **SkillCard**: Displays information about skills and associated resources
- **ProjectCard**: Shows recommended projects with descriptions
- **ProgressTracker**: Tracks and displays user progress

## 🔄 Data Structure

```typescript
// Example roadmap structure
interface Roadmap {
  id: string;
  title: string;
  description: string;
  stages: Stage[];
}

interface Stage {
  name: string;
  skills: Skill[];
  projects: Project[];
}

interface Skill {
  id: string;
  name: string;
  description: string;
  resources: Resource[];
}

interface Resource {
  type: 'Course' | 'GitHub' | 'Article';
  title: string;
  url: string;
  description?: string;
}

interface Project {
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}
```

## 🧪 Testing

```bash
# Run tests
npm test
# or
yarn test
```

## 📝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Adding New Roadmaps

To add a new technology roadmap:

1. Create a new file in `src/data/roadmaps/your-tech-path.ts`
2. Follow the existing roadmap data structure
3. Add your roadmap to the exports in `src/data/roadmaps/index.ts`
4. Add an entry to `src/data/tech-fields.ts`
