"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
  title: string;
};

const EXTRA_SCROLL_OFFSET = 24;

const getScrollOffset = () => {
  const nav = document.querySelector("nav.fixed");

  if (!(nav instanceof HTMLElement)) {
    return EXTRA_SCROLL_OFFSET;
  }

  return nav.getBoundingClientRect().height + EXTRA_SCROLL_OFFSET;
};

const scrollToSection = (sectionId: string, behavior: ScrollBehavior) => {
  const section = document.getElementById(sectionId);

  if (!section) {
    return false;
  }

  const nextTop =
    section.getBoundingClientRect().top + window.scrollY - getScrollOffset();

  window.scrollTo({
    top: Math.max(nextTop, 0),
    behavior,
  });

  return true;
};

export const useSidebarSectionNavigation = (sections: readonly Section[]) => {
  const [activeTab, setActiveTab] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (!sections.length) {
      return;
    }

    let frameId = 0;

    const updateActiveTab = () => {
      const activationLine = getScrollOffset() + 40;
      const currentSection = sections.reduce((activeSection, section) => {
        const sectionElement = document.getElementById(section.id);

        if (!sectionElement) {
          return activeSection;
        }

        const { top } = sectionElement.getBoundingClientRect();

        if (top <= activationLine) {
          return section.id;
        }

        return activeSection;
      }, sections[0].id);

      setActiveTab((previousTab) =>
        previousTab === currentSection ? previousTab : currentSection,
      );
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveTab);
    };

    const syncHashSection = (behavior: ScrollBehavior = "auto") => {
      const hashSectionId = window.location.hash.replace("#", "");

      if (!hashSectionId || !sections.some(({ id }) => id === hashSectionId)) {
        scheduleUpdate();
        return;
      }

      setActiveTab(hashSectionId);

      requestAnimationFrame(() => {
        scrollToSection(hashSectionId, behavior);
        scheduleUpdate();
      });
    };

    const handleHashChange = () => {
      syncHashSection();
    };

    syncHashSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [sections]);

  const handleSectionClick = (sectionId: string) => {
    setActiveTab(sectionId);

    if (window.location.hash !== `#${sectionId}`) {
      window.history.pushState(null, "", `#${sectionId}`);
    }

    scrollToSection(sectionId, "smooth");
  };

  return {
    activeTab,
    activeIndex: sections.findIndex((section) => section.id === activeTab),
    handleSectionClick,
  };
};
