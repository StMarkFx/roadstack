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
