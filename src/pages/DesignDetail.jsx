import { useParams } from "react-router-dom";
import projects from "../components/Projects";
import BtnReturn from "../components/BtnReturn";
import BtnCTA from "../components/BtnCTA";

export default function DesignDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h1 className="text-center text-2xl mt-10">Project not found ❌</h1>;
  }

  return (
    <div className="w-screen min-h-screen bg-black/60 flex items-center justify-center p-6">
      <div className="w-full h-full max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Left side: text */}
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
          <div className="flex gap-10">
            <BtnReturn />
            <BtnCTA />
          </div>
        </div>

        {/* Divider line (vertical on desktop, horizontal on mobile) */}
        <div className="hidden lg:block w-1 bg-amber-500"></div>
        <div className="lg:hidden h-1 bg-amber-500 mx-8"></div>

        {/* Right side: image */}
        <div className="flex-1 flex items-center justify-center p-8">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
