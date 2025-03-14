import Link from "next/link";
import { roadmaps } from "@/data/roadmaps";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">RoadStack</h1>
      <p className="mt-2">Select a career path to explore the learning roadmap.</p>
      <ul className="mt-4 space-y-2">
        {roadmaps.map((roadmap) => (
          <li key={roadmap.id}>
            <Link href={`/${roadmap.id}`} className="text-blue-500 hover:underline">
              {roadmap.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
