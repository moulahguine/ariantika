import { servicesPage } from "./services";
import {
  FaRegUser,
  FaRegEnvelope,
  FaRegMessage,
  FaStarOfLife,
  FaChevronDown,
} from "react-icons/fa6";

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

  form: {
    submitLabel: "Send Message",
    sendingLabel: "Sending...",
    successMessage: "Sent",
    errorMessage: "Something went wrong. Please try again.",
    notConfiguredMessage:
      "The form is not connected yet. Add the Formspree URL to continue.",
    requireIcon: <FaStarOfLife />,

    fields: [
      {
        name: "fullName",
        label: "your full name",
        icon: FaRegUser,
        type: "text",
        autoComplete: "name",
        required: true,
      },
      {
        name: "email",
        label: "your email",
        icon: FaRegEnvelope,
        type: "email",
        autoComplete: "email",
        required: true,
      },
      {
        name: "service",
        label: "select a service",
        icon: FaChevronDown,
        type: "select",
        optionsGroupLabel: "Select a service",
        required: false,
        options: serviceOptions,
      },
      {
        name: "message",
        label: "message",
        icon: FaRegMessage,
        type: "textarea",
        required: true,
      },
    ],
  },
};
