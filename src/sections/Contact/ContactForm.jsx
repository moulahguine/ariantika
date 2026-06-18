"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components";
import { slideInRight } from "@/lib";

// this is the formspree endpoint that is used to send the form data to the server
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_FORM_URL;
const TOAST_DURATION_MS = 3000; // 3 seconds

export default function ContactForm({ form }) {
  // ---- form reference ----
  const formRef = useRef(null);
  // ---- toast timeout reference ----
  const toastTimeoutRef = useRef(null);
  // ---- is sending state ----
  const [isSending, setIsSending] = useState(false);
  // ---- toast state ----
  const [toast, setToast] = useState(null);

  // ---- clear toast timeout ----
  const clearToastTimeout = useCallback(() => {
    clearTimeout(toastTimeoutRef.current);
  }, []);

  // ---- show toast ----
  const showToast = useCallback(
    (message, variant = "success") => {
      clearToastTimeout();
      setToast({ message, variant });
      toastTimeoutRef.current = setTimeout(
        () => setToast(null),
        TOAST_DURATION_MS,
      );
    },
    [clearToastTimeout],
  );

  // ---- clear toast timeout on unmount ----
  useEffect(() => clearToastTimeout, [clearToastTimeout]);

  // ---- handle submit ----
  const handleSubmit = async (event) => {
    event.preventDefault();

    // ---- check if formspree endpoint is configured ----
    if (!FORMSPREE_ENDPOINT) {
      showToast(form.notConfiguredMessage, "error");
      return;
    }

    // ---- get form element ----
    const formElement = formRef.current;
    if (!formElement) return;

    // ---- set sending state ----
    setIsSending(true);

    // ---- try to send form data ----
    try {
      // ---- create form data ----
      const formData = new FormData(formElement);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      // ---- check if response is ok ----
      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      // ---- reset form ----
      formElement.reset();
      showToast(form.successMessage, "success");
    } catch {
      // ---- show error toast ----
      showToast(form.errorMessage, "error");
    } finally {
      // ---- set sending state to false ----
      setIsSending(false);
    }
  };

  return (
    // ---- contact form container ----
    <>
      {/* ---- contact form ---- */}
      <motion.form
        variants={slideInRight}
        ref={formRef}
        className="contact__form"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* ---- honeypot field ---- */}
        <p className="contact__honeypot" aria-hidden="true">
          <label>
            Do not fill this out
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </p>

        {form.fields.map((field) => {
          const fieldId = `contact-${field.name}`;
          const isTextarea = field.type === "textarea";
          const isSelect = field.type === "select";

          return (
            <div
              key={field.name}
              className={`contact__field${
                isTextarea ? " contact__field--textarea" : ""
              }${isSelect ? " contact__field--select" : ""} ${field.name === "email" ? "contact__field--email" : ""} ${field.name === "fullName" ? "contact__field--full-name" : ""}`}
            >
              {/* ---- field label ---- */}
              <label className="contact__label" htmlFor={fieldId}>
                {field.label}

                {field.required ? (
                  <span className="contact__label--required">*</span>
                ) : null}
              </label>

              {/* ---- field textarea ---- */}
              {isTextarea ? (
                <textarea
                  className="contact__textarea"
                  id={fieldId}
                  name={field.name}
                  rows={5}
                  required={field.required}
                  disabled={isSending}
                />
              ) : /* ---- field select ---- */ isSelect ? (
                <select
                  className="contact__select"
                  id={fieldId}
                  name={field.name}
                  defaultValue=""
                  disabled={isSending}
                >
                  <option value="" disabled>
                    {field.optionsGroupLabel}
                  </option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                /* ---- field input ---- */ <input
                  className="contact__input"
                  id={fieldId}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  required={field.required}
                  disabled={isSending}
                />
              )}
            </div>
          );
        })}

        {/* ---- submit button ---- */}
        <Button
          type="submit"
          variant="primary"
          size="default"
          className="contact__submit"
          loading={isSending}
          disabled={isSending}
        >
          {isSending ? form.sendingLabel : form.submitLabel}
        </Button>
      </motion.form>

      {/* ---- toast ---- */}
      <AnimatePresence>
        {/* ---- toast message ---- */}
        {toast ? (
          <motion.output
            key={toast.message}
            role="status"
            aria-live="polite"
            className={`contact__toast contact__toast--${toast.variant}`}
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {toast.message}
          </motion.output>
        ) : null}
      </AnimatePresence>
    </>
  );
}
