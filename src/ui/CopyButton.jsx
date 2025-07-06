import { useState } from "react";
import { FiClipboard, FiCheck } from "react-icons/fi";

/**
 * CopyButton – copies text to clipboard and shows a checkmark briefly.
 *
 * Props:
 *   text (string) – text to copy
 *   className (string) – optional extra Tailwind classes
 */
export default function CopyButton({ text, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1 px-3 py-1.5 rounded-md bg-gray-800 text-gray-200 hover:bg-gray-700 transition text-xs ${className}`}
      title="Copy to clipboard"
    >
      {copied ? <FiCheck className="text-green-400" /> : <FiClipboard />} {copied ? "Copied" : "Copy"}
    </button>
  );
}
