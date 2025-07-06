/**
 * Tag – styled label for displaying tags (e.g., "loop", "array")
 *
 * Props:
 *   label (string)
 */
export default function Tag({ label }) {
    return (
      <span className="inline-block text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
        #{label}
      </span>
    );
  }
  