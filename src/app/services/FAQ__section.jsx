"use client";

import { LuMinus, LuPlus } from "react-icons/lu";
import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading,
} from "react-aria-components";

export default function FAQSection({ faqItems }) {
  const defaultExpandedKey = faqItems[0]?.question;

  return (
    <DisclosureGroup
      className="services__page--faq-list"
      defaultExpandedKeys={
        defaultExpandedKey ? [defaultExpandedKey] : undefined
      }
    >
      {faqItems.map(({ question, answer }) => (
        <Disclosure
          key={question}
          id={question}
          className="services__page--faq-item"
        >
          <Heading className="services__page--faq-heading">
            <Button slot="trigger" className="services__page--faq-trigger">
              <span className="services__page--faq-question">{question}</span>
              <span className="services__page--faq-icon" aria-hidden="true">
                <LuPlus className="services__page--faq-icon-plus" />
                <LuMinus className="services__page--faq-icon-minus" />
              </span>
            </Button>
          </Heading>
          <DisclosurePanel className="services__page--faq-panel">
            <p>{answer}</p>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </DisclosureGroup>
  );
}
