import { useParams } from "react-router-dom";
import projects from "../components/ProjectsContent";
import BtnReturn from "../components/BtnReturn";
import BtnCTA from "../components/BtnCTA";

export default function ContentDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <h1 className="text-center text-2xl mt-10">Intet projekt endnu ❌</h1>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-black/60 flex items-center justify-center p-6]">
      <div className="w-full h-full max-w-5xl bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-500 mb-6">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-800 mb-6">
              {project.description}
            </p>
          </div>
          <div>
            {project.tools && project.tools.length > 0 && (
              <div>
                <p className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Værktøjer i denne kontekst:
                </p>
                <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 space-y-1">
                  {project.tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className="flex flex-col gap-10 mt-10
          md:flex-row
          "
          >
            <BtnReturn />
            <BtnCTA />
          </div>
        </div>

        {/* Divider line (vertical on desktop, horizontal on mobile) */}
        <div className="hidden lg:block w-1 bg-amber-500"></div>
        <div className="lg:hidden h-1 bg-amber-500 mx-8"></div>

        <div className="flex-1 flex items-center justify-center p-8">
          {project.video ? (
            <div
              className={`relative w-full max-w-sm md:max-w-md lg:max-w-lg ${
                project.aspect === "9:16" ? "aspect-[9/16]" : "aspect-video"
              }`}
            >
              <iframe
                src={`${project.video}?autoplay=1&mute=1`}
                title={project.title}
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg object-cover"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
