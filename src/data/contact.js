import { servicesPage } from "./services";
import { FaRegCopy, FaCheck } from "react-icons/fa6";

const serviceOptions = [
  ...servicesPage.services.map((service) => ({
    value: service.id,
    label: service.title,
  })),
  { value: "other", label: "Other" },
];

export const contact = {
  id: "contact",

  header: {
    prefix: "Contact",
    accent: "Me",
    subtitle:
      "Here are the ways you can contact me for research and publication support.",
  },

  info: {
    contactTitle: "Contact",
    email: "ariantikaeffendi@gmail.com",
    copyIcon: FaRegCopy,
    copiedIcon: FaCheck,
    copyLabel: "Copy email",
    copiedLabel: "Copied email",
    locationTitle: "Based in",
    location: "Medan, North Sumatra, Indonesia",
  },

  form: {
    submitLabel: "Send Message",
    sendingLabel: "Sending...",
    successMessage: "Sent",
    errorMessage: "Something went wrong. Please try again.",
    notConfiguredMessage:
      "The form is not connected yet. Add the Formspree URL to continue.",
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        autoComplete: "name",
        required: true,
      },
      {
        name: "email",
        label: "E-mail",
        type: "email",
        autoComplete: "email",
        required: true,
      },
      {
        name: "service",
        label: "Service",
        type: "select",
        optionsGroupLabel: "Select a service",
        required: false,
        options: serviceOptions,
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        required: true,
      },
    ],
  },
};
