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
  return {
    title: roadmap ? `${roadmap.title} Roadmap - RoadStack` : "Roadmap Not Found",
    description: roadmap?.description || "The selected roadmap does not exist.",
  };
}

export default function FieldPage({ params }: FieldPageProps) {
  const roadmap = getRoadmapByField(params.field);
  if (!roadmap) notFound();

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold">{roadmap.title}</h1>
      <p className="text-lg text-gray-700 mt-3 mb-8">{roadmap.description}</p>
      <RoadmapTimeline roadmap={roadmap} />
    </div>
  );
}
