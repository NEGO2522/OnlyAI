import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // You can switch theme

/**
 * CodeBlock – syntax-highlighted code viewer
 *
 * Props:
 *   code (string) – the actual source code
 *   language (string) – e.g., "python", "javascript"
 */
export default function CodeBlock({ code = "", language = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      hljs.highlightElement(ref.current);
    }
  }, [code, language]);

  return (
    <pre className="rounded-lg bg-gray-900 overflow-x-auto text-sm text-gray-100 p-4">
      <code ref={ref} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
}
