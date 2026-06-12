"use client";
import React, { useEffect, useRef, useState } from "react";
import { timelineItems } from "@/data";

interface TimelineItemType {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  type: "education" | "experience";
}

const TimelineItem: React.FC<{
  item: TimelineItemType;
  isVisible: boolean;
  index: number;
}> = ({ item, isVisible, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex gap-6 md:gap-12 mb-12 md:mb-16 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Left/Right Content */}
      <div className="flex-1">
        <div
          className={`transform transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : isEven
                ? "opacity-0 -translate-x-8"
                : "opacity-0 translate-x-8"
          }`}
        >
          <div className="bg-gradient-to-br from-[rgba(203,172,249,0.1)] to-[rgba(203,172,249,0.05)] border border-purple/20 rounded-lg p-6 md:p-8 hover:border-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple/10">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  item.type === "education" ? "bg-blue-400" : "bg-purple"
                }`}
              />
              <span className="text-xs font-semibold text-purple uppercase tracking-widest">
                {item.type === "education" ? "Education" : "Experience"}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {item.title}
            </h3>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-white-100 font-semibold mb-2">
              {item.subtitle}
            </p>

            {/* Duration */}
            <p className="text-xs md:text-sm text-white-100 mb-4 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {item.duration}
            </p>

            {/* Description */}
            <p className="text-sm md:text-base text-white-100 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>

      {/* Center Timeline Dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-purple bg-black-100 transform transition-all duration-500 ${
            isVisible ? "scale-100" : "scale-75"
          }`}
        />
        {/* Connecting line (hidden on mobile, visible on md+) */}
        <div className="hidden md:block w-1 flex-grow bg-gradient-to-b from-purple/50 to-transparent min-h-[120px] mt-2" />
      </div>

      {/* Spacer for desktop layout */}
      <div className="hidden md:flex flex-1" />
    </div>
  );
};

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute("data-id") || "0");
            setVisibleItems((prev) => new Set(prev).add(id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    // Observe all timeline items
    const items = containerRef.current?.querySelectorAll(
      "[data-timeline-item]",
    );
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="py-20" id="timeline">
      {/* Section Heading */}
      <div className="px-5 sm:px-10">
        <h1 className="heading">
          My Journey &<span className="text-purple"> Experience</span>
        </h1>

        <p className="text-center text-white-100 mt-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          A timeline of my educational background and professional experience in
          software development and AI systems engineering.
        </p>
      </div>

      {/* Timeline Container */}
      <div
        ref={containerRef}
        className="max-w-4xl mx-auto px-5 sm:px-10 mt-12 md:mt-16"
      >
        {timelineItems.map((item, index) => (
          <div
            key={item.id}
            data-timeline-item
            data-id={item.id}
            className="timeline-item"
          >
            <TimelineItem
              item={item}
              isVisible={visibleItems.has(item.id)}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="flex justify-center mt-8">
        <div className="w-1 h-16 md:h-20 bg-gradient-to-b from-purple/50 to-transparent" />
      </div>
    </section>
  );
};

export default Timeline;
