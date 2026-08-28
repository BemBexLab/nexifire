"use client";

import React, { type ReactNode } from "react";
import { LazyMotion, domAnimation, m } from "motion/react";

type StyledText =
  | string
  | {
      text: string;
      className?: string;
    };

type TextContent = StyledText | ReactNode;

type WhatWeDoCard = {
  title: TextContent;
  description?: TextContent;
  icon: ReactNode;
  featured?: boolean;
};

type WhatWeDoProps = {
  heading: TextContent;
  description?: TextContent;
  cards: WhatWeDoCard[];
};

const isStyledText = (
  content: TextContent,
): content is { text: string; className?: string } =>
  typeof content === "object" &&
  content !== null &&
  !React.isValidElement(content) &&
  "text" in content;

const getTextValue = (content: TextContent) =>
  isStyledText(content) ? content.text : content;

const getTextClassName = (content: TextContent) =>
  isStyledText(content) ? content.className ?? "" : "";

const getKeyValue = (content: TextContent, fallback: string) =>
  typeof content === "string"
    ? content
    : isStyledText(content)
      ? content.text
      : fallback;

const hasTextContent = (content: TextContent | undefined) => {
  if (content === undefined || content === null || content === false) {
    return false;
  }

  if (typeof content === "string") {
    return content.trim().length > 0;
  }

  if (isStyledText(content)) {
    return content.text.trim().length > 0;
  }

  return true;
};

const WhatWeDo = ({ heading, description, cards }: WhatWeDoProps) => {
  const hasDescription = hasTextContent(description);

  return (
    <LazyMotion features={domAnimation}>
      <section className="mx-auto mt-16 flex w-full max-w-[1440px] min-w-0 flex-col items-center justify-center px-4 sm:mt-20 sm:px-6 md:mt-24 lg:mt-28 lg:px-8 xl:mt-30">
        <div
          className={`relative grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-5 md:gap-6 ${
            hasDescription
              ? "lg:grid-cols-[minmax(0,1fr)_minmax(280px,370px)] lg:items-end lg:gap-8"
              : "place-items-center"
          }`}
        >
          <m.h2
            className={`max-w-full break-words whitespace-pre-line bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text font-jakarta text-3xl font-medium uppercase leading-tight tracking-tight text-transparent sm:text-4xl md:text-5xl xl:text-6xl ${
              hasDescription ? "text-left" : "text-center"
            } ${getTextClassName(
              heading,
            )}`}
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {getTextValue(heading)}
          </m.h2>
          {hasDescription && description && (
            <m.p
              className={`w-full max-w-[370px] justify-self-start break-words whitespace-pre-line text-sm leading-relaxed text-[#777777] sm:text-base lg:justify-self-end ${getTextClassName(
                description,
              )}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            >
              {getTextValue(description)}
            </m.p>
          )}
        </div>

        <div className="mt-8 grid w-full min-w-0 grid-cols-1 items-stretch gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-5 2xl:gap-8">
          {cards.map((card, index) => (
            <m.div
              key={getKeyValue(card.title, `what-we-do-card-${index}`)}
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className={`h-full min-h-[170px] min-w-0 w-full origin-bottom-left rounded-2xl p-5 transition-transform duration-300 ease-out hover:-rotate-2 hover:shadow-[0_22px_50px_rgba(17,17,17,0.12)] sm:min-h-[180px] sm:p-6 xl:min-h-[200px] ${
                card.featured
                  ? "bg-white shadow-[0_0_0_1px_rgba(17,17,17,0.05),0_18px_38px_rgba(17,17,17,0.1)]"
                  : "bg-white shadow-[0_0_0_1px_rgba(17,17,17,0.04),0_10px_24px_rgba(17,17,17,0.06)]"
              }`}
            >
              <div className="mb-4 flex h-9 items-center">{card.icon}</div>
              <p
                className={`mb-2 break-words whitespace-pre-line font-jakarta text-base font-medium leading-snug text-gray-900 sm:text-lg ${getTextClassName(
                  card.title,
                )}`}
              >
                {getTextValue(card.title)}
              </p>
              {hasTextContent(card.description) && card.description && (
                <div
                  className={`break-words whitespace-pre-line font-jakarta text-sm leading-relaxed text-gray-500 ${getTextClassName(
                    card.description,
                  )}`}
                >
                  {getTextValue(card.description)}
                </div>
              )}
            </m.div>
          ))}
        </div>
      </section>
    </LazyMotion>
  );
};

export default WhatWeDo;
