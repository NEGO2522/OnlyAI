import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

/**
 * ProgramList – sidebar list of all programs for a given language.
 * Highlights the currently selected program via URL param.
 *
 * Props:
 *   language (string) – slug like "python", "javascript"…
 */
export default function ProgramList({ language }) {
  const { programSlug } = useParams();
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        /**
         * Vite's import.meta.glob lets us pull all JSON files dynamically.
         * The `eager: true` option means modules are imported at build time,
         * so we don’t need extra fetch requests in production.
         */
        // Import all JSON files from all language directories
        const modules = import.meta.glob('../data/*/*.json', {
          eager: true,
        });
        
        // Filter modules to only include those from the selected language
        const filteredModules = Object.entries(modules).reduce((acc, [path, mod]) => {
          if (path.includes(`/data/${language}/`)) {
            acc[path] = mod;
          }
          return acc;
        }, {});
        const list = Object.values(filteredModules)
          .map((mod) => ({
            slug: mod.slug,
            title: mod.title,
          }))
          .sort((a, b) => a.title.localeCompare(b.title));
        setPrograms(list);
      } catch (err) {
        console.error(err);
        setError("Could not load program list.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [language]);

  if (loading) {
    return (
      <div className="p-4 text-gray-400">Loading list…</div>
    );
  }

  if (error) {
    return <div className="p-4 text-red-600 text-sm">{error}</div>;
  }

  if (programs.length === 0) {
    return (
      <div className="p-4 text-gray-500 text-sm">No programs yet.</div>
    );
  }

  return (
    <nav>
      <ul className="divide-y divide-gray-100">
        {programs.map(({ slug, title }) => {
          const isActive = slug === programSlug;
          return (
            <li key={slug}>
              <Link
                to={`/${language}/${slug}`}
                className={`block px-4 py-3 hover:bg-gray-50 transition ${
                  isActive ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"
                }`}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
