"use client";

import { motion } from "motion/react";
import { createElement, useEffect, useMemo, useState, type ReactNode } from "react";

type RichTextLetterRevealProps = {
  text: string;
  baseDelay?: number;
  stepDelay?: number;
};

export default function RichTextLetterReveal({
  text,
  baseDelay = 0.2,
  stepDelay = 0.018,
}: RichTextLetterRevealProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const normalizedText = useMemo(() => text.replaceAll("\\n", "\n"), [text]);

  const animatedNodes = useMemo(() => {
    if (!mounted) return null;

    const doc = new DOMParser().parseFromString(
      `<div>${normalizedText.replaceAll("\n", "<br />")}</div>`,
      "text/html",
    );
    const root = doc.body.firstElementChild;
    if (!root) return null;

    let charIndex = 0;

    const renderNode = (node: ChildNode, path: string): ReactNode => {
      if (node.nodeType === Node.TEXT_NODE) {
        const value = node.textContent ?? "";
        return value.split("").map((char, i) => {
          const key = `${path}-char-${i}`;
          const delay = baseDelay + charIndex * stepDelay;
          charIndex += 1;

          return (
            <motion.span
              key={key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.16, ease: "easeOut", delay }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        });
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as Element;
        const tagName = el.tagName.toLowerCase();

        if (tagName === "br") {
          return <br key={`${path}-br`} />;
        }

        const props: Record<string, string> = {};
        for (const attr of Array.from(el.attributes)) {
          const name = attr.name === "class" ? "className" : attr.name;
          props[name] = attr.value;
        }

        const children = Array.from(el.childNodes).map((child, i) =>
          renderNode(child, `${path}-${tagName}-${i}`),
        );
        return createElement(tagName, { ...props, key: `${path}-${tagName}` }, ...children);
      }

      return null;
    };

    return Array.from(root.childNodes).map((node, i) =>
      renderNode(node, `root-${i}`),
    );
  }, [baseDelay, mounted, normalizedText, stepDelay]);

  if (!mounted || !animatedNodes) {
    return <span className="whitespace-pre-line">{normalizedText}</span>;
  }

  return <>{animatedNodes}</>;
}

