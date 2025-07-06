import { useParams } from "react-router-dom";
import useProgramData from "../hooks/useProgramData";
import CodeBlock from "../ui/CodeBlock";
import CopyButton from "../ui/CopyButton";
import Tag from "../ui/Tag";

/**
 * ProgramDetail – shows code, explanation and output for a single program.
 * Expects URL structure /:language/:programSlug
 */
export default function ProgramDetail() {
  const { language, programSlug } = useParams();
  const { program, isLoading, error } = useProgramData(language, programSlug);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center text-gray-400">
        Loading…
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-600 font-medium">
        {error}
      </div>
    );
  }

  if (!program) {
    return (
      <div className="p-6 text-gray-500">Program not found.</div>
    );
  }

  const { title, code, explanation, output, tags = [] } = program;

  return (
    <article className="prose max-w-none">
      {/* Title */}
      <h2 className="mb-2 text-2xl font-semibold">{title}</h2>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}

      {/* Code with copy button */}
      <div className="relative mb-6">
        <CopyButton text={code} className="absolute top-2 right-2" />
        <CodeBlock language={language} code={code} />
      </div>

      {/* Explanation */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Explanation</h3>
        <ul className="list-disc pl-6">
          {explanation.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </section>

      {/* Output */}
      {output && (
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Output</h3>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap">
            {output}
          </pre>
        </section>
      )}
    </article>
  );
}
