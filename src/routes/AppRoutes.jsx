import { Routes, Route } from "react-router-dom";

// Page‑level views
import Home from "../pages/Home";
import LanguagePage from "../pages/LanguagePage";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Tutorials from "../pages/Tutorials";

// Component rendered for individual program details (nested route)
import ProgramDetail from "../language/ProgramDetail";

// Fallback component when no program has been selected yet
function SelectPrompt() {
  return (
    <div className="h-full flex items-center justify-center text-gray-500">
      <p>Select a program from the list to view details.</p>
    </div>
  );
}

/**
 * Central place to declare all React‑Router routes.
 */
export default function AppRoutes() {
  return (
    <Routes>
      {/* Home / Landing */}
      <Route path="/" element={<Home />} />
      
      {/* About Page */}
      <Route path="/about" element={<About />} />
      
      {/* Tutorials Page */}
      <Route path="/tutorials" element={<Tutorials />} />

      {/* Dynamic language section */}
      <Route path=":language" element={<LanguagePage />}>
        {/* When only /:language, show a friendly prompt */}
        <Route index element={<SelectPrompt />} />
        {/* /:language/:programSlug shows the program details */}
        <Route path=":programSlug" element={<ProgramDetail />} />
      </Route>

      {/* Catch‑all 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
