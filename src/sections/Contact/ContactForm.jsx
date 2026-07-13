"use client";

import { useRef, useState } from "react";
import { contact } from "@/data";
import { Button as SiteButton } from "@/components";
import { addToast } from "@/lib/toastQueue";
import {
  Form,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  Button as AriaButton,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
} from "react-aria-components";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_FORM_URL;
const REQUIRED_ERROR = "This field is required.";
const EMAIL_ERROR = "Please enter a valid email address.";
const requiredFieldNames = ["fullName", "email", "service", "message"];

function getInitialValues() {
  return {
    fullName: "",
    email: "",
    service: "",
    message: "",
  };
}

function validateSingleField(name, value) {
  const normalized = value.trim();

  if (requiredFieldNames.includes(name) && !normalized) {
    return REQUIRED_ERROR;
  }

  if (name === "email") {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
    if (!isValidEmail) return EMAIL_ERROR;
  }

  return "";
}

export default function ContactForm() {
  const { form } = contact;

  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [values, setValues] = useState(getInitialValues);
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const isFormValid = requiredFieldNames.every(
    (fieldName) => !validateSingleField(fieldName, values[fieldName] ?? ""),
  );

  const showToast = (message, variant = "success") => {
    addToast(message, variant);
  };

  const setFieldValue = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: hasSubmitted ? validateSingleField(name, value) : "",
    }));
  };

  const validateForm = () => {
    const nextErrors = Object.fromEntries(
      requiredFieldNames.map((fieldName) => [
        fieldName,
        validateSingleField(fieldName, values[fieldName] ?? ""),
      ]),
    );
    setErrors(nextErrors);

    return nextErrors;
  };

  const focusFirstInvalidField = (validationErrors) => {
    const firstInvalidField = requiredFieldNames.find(
      (fieldName) => validationErrors[fieldName],
    );
    if (!firstInvalidField) return;

    const field = formRef.current?.querySelector(`[name="${firstInvalidField}"]`);
    field?.focus();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHasSubmitted(true);

    const validationErrors = validateForm();
    const hasValidationErrors = Object.values(validationErrors).some(Boolean);
    if (hasValidationErrors) {
      focusFirstInvalidField(validationErrors);
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      showToast(form.notConfiguredMessage, "error");
      return;
    }
    const formElement = formRef.current;
    if (!formElement) return;

    setIsSending(true);
    try {
      const formData = new FormData(formElement);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      formElement.reset();
      setValues(getInitialValues());
      setErrors({});
      setHasSubmitted(false);
      showToast(form.successMessage, "success");
    } catch {
      showToast(form.errorMessage, "error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Form
        ref={formRef}
        className="contact__form"
        onSubmit={handleSubmit}
        validationBehavior="aria"
      >
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
          const FieldIcon = field.icon;

          return (
            <div
              key={field.name}
              className={`contact__field ${
                isTextarea ? " contact__field--textarea" : ""
              }${isSelect ? " contact__field--select" : ""} ${field.name === "email" ? "contact__field--email" : ""} ${field.name === "fullName" ? "contact__field--full-name" : ""}`}
            >
              {isTextarea ? (
                <TextField
                  name={field.name}
                  isRequired
                  isDisabled={isSending}
                  value={values[field.name] ?? ""}
                  onChange={(value) => setFieldValue(field.name, value)}
                  isInvalid={Boolean(errors[field.name])}
                >
                  <Label className="contact__label contact__label--textarea">
                    {FieldIcon ? (
                      <span className="contact__label-icon" aria-hidden="true">
                        <FieldIcon />
                      </span>
                    ) : null}
                    {field.label}
                    <span className="contact__label--required">{form.requireIcon}</span>
                  </Label>
                  <TextArea className="contact__textarea" id={fieldId} />
                  <FieldError className="contact__error">
                    {errors[field.name]}
                  </FieldError>
                </TextField>
              ) : isSelect ? (
                <Select
                  className="contact__select"
                  name={field.name}
                  isDisabled={isSending}
                  isRequired
                  placeholder={field.label}
                  selectedKey={values[field.name] || null}
                  onSelectionChange={(key) =>
                    setFieldValue(field.name, key ? String(key) : "")
                  }
                  isInvalid={Boolean(errors[field.name])}
                >
                  <Label className="contact__visually-hidden">{field.label}</Label>
                  <AriaButton
                    className={({ isPlaceholder }) =>
                      !isPlaceholder
                        ? "contact__select--label contact__select--label--selected"
                        : "contact__select--label"
                    }
                  >
                    <SelectValue className="contact__select--label-text" />

                    <span
                      className="contact__select--label-icon"
                      aria-hidden="true"
                    >
                      <FieldIcon />
                    </span>
                  </AriaButton>

                  <Popover className="contact__popover">
                    <ListBox className="contact__listbox">
                      {field.options.map((option) => (
                        <ListBoxItem
                          key={option.value}
                          id={option.value}
                          className="contact__option"
                        >
                          {option.label}
                        </ListBoxItem>
                      ))}
                    </ListBox>
                  </Popover>
                  <FieldError className="contact__error">
                    {errors[field.name]}
                  </FieldError>
                </Select>
              ) : (
                <TextField
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  isRequired
                  isDisabled={isSending}
                  value={values[field.name] ?? ""}
                  onChange={(value) => setFieldValue(field.name, value)}
                  isInvalid={Boolean(errors[field.name])}
                >
                  <Label className="contact__label">
                    {FieldIcon ? (
                      <span className="contact__label-icon" aria-hidden="true">
                        <FieldIcon />
                      </span>
                    ) : null}
                    {field.label}
                    <span className="contact__label--required">{form.requireIcon}</span>
                  </Label>
                  <Input className="contact__input" id={fieldId} />
                  <FieldError className="contact__error">
                    {errors[field.name]}
                  </FieldError>
                </TextField>
              )}
            </div>
          );
        })}

        <SiteButton
          type="submit"
          variant="primary"
          size="default"
          className="contact__submit"
          loading={isSending}
          disabled={isSending || !isFormValid}
        >
          {isSending ? form.sendingLabel : form.submitLabel}
        </SiteButton>
      </Form>
    </>
  );
}
