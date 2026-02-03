"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const TextGenerateEffect = dynamic(
  () =>
    import("./ui/TextGenerateEffect").then((mod) => ({
      default: mod.TextGenerateEffect,
    })),
  { ssr: false },
);

const Hero = () => {
  return (
    <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.2] relative flex items-center justify-center">
      <Spotlight
        className="-top-40 -left-10 
      md:-left32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh]
      w-[50vw]"
        fill="purple"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh]
      w-[50vw]"
        fill="blue"
      />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"></h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-7xl"
            words="Building Secure and Scalable Digital Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi 👋, I&apos;m Sushant Azad I build secure and responsive web
            experiences,
            <br />
            Student at Vellore Institute of Technology, Frontend Development
            Intern, and ISC2 Candidate.
            <br />
            💬 Ask me about Frontend Development, Linux, Networking, and
            Cybersecurity.
          </p>

          <a href="#about">
            <MagicButton
              title="show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
