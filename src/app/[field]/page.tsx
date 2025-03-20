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
