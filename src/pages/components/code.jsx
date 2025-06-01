import { useState } from "react";

export default function Code({ fullWidth, children }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Copy failed:", error);
      });
  };

  return (
    <div className={`px-3 py-1 h-fit w-fit font-mono m-auto font-normal whitespace-nowrap bg-default/30 text-default-700 text-small rounded-full flex items-center gap-2 ${fullWidth && 'w-full mb-4'}`}>
      <div className="select-none font-mono">$</div>
      <div className={`${fullWidth && 'w-full'}`}>{children}</div>
      <button
        className={`group inline-flex items-center justify-center relative z-10 w-8 h-8 rounded-small transition-transform-colors-opacity motion-reduce:transition-none`}
        type="button"
        aria-label="Copy to clipboard"
        onClick={handleCopy}
        data-copied={isCopied}
      >
        <svg
          aria-hidden="true"
          fill="none"
          focusable="false"
          height="1.2em"
          width="1.2em"
          role="presentation"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className={`absolute text-inherit transition-transform-opacity ${
            isCopied ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <svg
          aria-hidden="true"
          fill="none"
          focusable="false"
          height="1.2em"
          width="1.2em"
          role="presentation"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className={`absolute text-inherit transition-transform-opacity ${
            isCopied ? "opacity-0 scale-50" : "opacity-100 scale-100"
          }`}
        >
          <path d="M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"></path>
          <path d="M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16"></path>
          <path d="M16 12.9C16 9.4 14.6 8 11.1 8"></path>
        </svg>
      </button>
    </div>
  );
}
