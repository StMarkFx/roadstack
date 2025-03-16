import { techFields } from "@/data/tech-fields";
import Link from "next/link";

export default function FieldSelector() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {techFields.map((field) => (
        <Link key={field.id} href={`/roadmap/${field.id}`} className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300">
          {field.name}
        </Link>
      ))}
    </div>
  );
}
