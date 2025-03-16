import SkillCard from "./SkillCard";
import ProjectCard from "./ProjectCard";

export default function RoadmapTimeline({ stages }) {
  return (
    <div className="space-y-6">
      {stages.map((stage) => (
        <div key={stage.name}>
          <h2 className="text-xl font-bold">{stage.name}</h2>
          <div className="grid grid-cols-2 gap-4">
            {stage.skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
          <h3 className="mt-4 font-semibold">Projects</h3>
          {stage.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      ))}
    </div>
  );
}
