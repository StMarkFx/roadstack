// src/app/page.tsx
import { FieldSelector } from "@/components/roadmap/FieldSelector";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RoadStack - Tech Learning Roadmaps",
  description: "Visualize clear learning paths for various technology careers",
};

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">RoadStack</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Select your desired tech field and discover a comprehensive roadmap of skills to acquire,
          projects to build, and curated learning resources.
        </p>
      </div>
      <FieldSelector />
    </main>
  );
}

// src/app/layout.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProgressProvider } from "@/contexts/ProgressContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ProgressProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

// src/app/[field]/page.tsx
import { RoadmapTimeline } from "@/components/roadmap/RoadmapTimeline";
import { getRoadmapByField } from "@/data/roadmaps";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface FieldPageProps {
  params: {
    field: string;
  };
}

export async function generateMetadata({ params }: FieldPageProps): Promise<Metadata> {
  const roadmap = getRoadmapByField(params.field);
  if (!roadmap) return { title: "Roadmap Not Found" };
  
  return {
    title: `${roadmap.title} Roadmap - RoadStack`,
    description: roadmap.description,
  };
}

export default function FieldPage({ params }: FieldPageProps) {
  const roadmap = getRoadmapByField(params.field);
  
  if (!roadmap) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{roadmap.title}</h1>
      <p className="text-lg text-gray-600 mb-8">{roadmap.description}</p>
      <RoadmapTimeline roadmap={roadmap} />
    </div>
  );
}

// src/app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 245, 247, 250;
  --background-end-rgb: 255, 255, 255;
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

/* Additional custom styles */
.timeline-connector {
  width: 2px;
  background-color: #e5e7eb;
  height: 100%;
}

.skill-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}