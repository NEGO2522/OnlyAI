import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';

// Lazy load page components
const Home = lazy(() => import("../pages/Home"));
const LanguagePage = lazy(() => import("../pages/LanguagePage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const About = lazy(() => import("../pages/About"));
const Tutorials = lazy(() => import("../pages/Tutorials"));
const ProgramDetail = lazy(() => import("../language/ProgramDetail"));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

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
    <Suspense fallback={<LoadingFallback />}>
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
    </Suspense>
  );
}
