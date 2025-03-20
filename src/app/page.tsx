import { FieldSelector } from "@/components/roadmap/FieldSelector";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RoadStack - Tech Learning Roadmaps",
  description: "Visualize clear learning paths for various technology careers",
};

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-12 text-center">
      <section className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">RoadStack</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Select your desired tech field and discover a comprehensive roadmap with essential skills, 
          projects, and curated learning resources.
        </p>
      </section>
      <div className="mt-8">
        <FieldSelector />
      </div>
    </main>
  );
}
