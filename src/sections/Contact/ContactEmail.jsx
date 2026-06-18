"use client";

import { useEffect, useRef, useState } from "react";
import { contact } from "@/data";

export default function ContactEmail({ email, copyLabel, copiedLabel }) {
  const { copyIcon: CopyIconIcon, copiedIcon: CheckIconIcon } = contact.info;

  const [copied, setCopied] = useState(false);
  const resetTimeoutRef = useRef(null);

  // ---- clear timeout on unmount ----
  useEffect(() => {
    return () => clearTimeout(resetTimeoutRef.current);
  }, []);

  // ---- handle copy ----
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    // ---- email row container ----
    <div className="contact__email-row">
      {/* ---- email link ---- */}
      <a className="contact__email" href={`mailto:${email}`}>
        {email}
      </a>

      {/* ---- copy button ---- */}
      <button
        type="button"
        className={`contact__copy${copied ? " contact__copy--copied" : ""}`}
        onClick={handleCopy}
        aria-label={copied ? copiedLabel : copyLabel}
      >
        {copied ? (
          <CheckIconIcon className="contact__copy-icon" aria-hidden="true" />
        ) : (
          <CopyIconIcon className="contact__copy-icon" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
