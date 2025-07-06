import { useParams, Outlet } from "react-router-dom";
import ProgramList from "../language/ProgramList";


/**
 * LanguagePage – wraps program list + an <Outlet/> for program details.
 * URL pattern: /:language (e.g., /python, /javascript)
 */
export default function LanguagePage() {
  const { language } = useParams(); // slug, e.g. "python"

  return (
    <div className="flex w-full h-full overflow-hidden">
      {/* Sidebar list of programs for the chosen language */}
      <aside className="w-72 shrink-0 border-r border-gray-200 overflow-y-auto bg-white">
        <ProgramList language={language} />
      </aside>

      {/* Program detail will be rendered via nested route */}
      <section className="flex-1 overflow-y-auto p-6">
        {/* If no program selected yet, show a friendly hint */}
        <Outlet />
      </section>
    </div>
  );
}
