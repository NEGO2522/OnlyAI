import { useEffect, useState } from "react";

/**
 * useProgramData – custom hook to load a single program JSON file.
 *
 * @param {string} language - e.g., "python"
 * @param {string} slug - e.g., "hello-world"
 * @returns {Object} { program, isLoading, error }
 */
export default function useProgramData(language, slug) {
  const [program, setProgram] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProgram() {
      setIsLoading(true);
      setError(null);

      try {
        // Import all JSON files from all language directories
        const modules = import.meta.glob('../data/*/*.json', {
          eager: true,
        });
        
        // Filter to find the specific program by language and slug
        const match = Object.values(modules).find(
          (mod) => {
            // Get the file path and check if it matches the requested language
            const modulePath = Object.keys(modules).find(key => modules[key] === mod);
            return modulePath.includes(`/data/${language}/`) && mod.slug === slug;
          }
        );

        if (!match) {
          throw new Error("Program not found");
        }

        setProgram(match);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load program");
      } finally {
        setIsLoading(false);
      }
    }

    if (language && slug) {
      loadProgram();
    }
  }, [language, slug]);

  return { program, isLoading, error };
}