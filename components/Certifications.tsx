"use client";
import React, { useState, useRef, useEffect } from "react";
import { certifications } from "@/data";
import CertificateViewer from "./CertificateViewer";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  credentialId?: string;
  certificateUrl?: string;
  issueDate?: string;
  expiryDate?: string;
  description?: string;
  skills?: string[];
  image?: string;
}

const CertificationCard: React.FC<{
  certification: Certification;
  onCardClick: (cert: Certification) => void;
  index: number;
}> = ({ certification, onCardClick, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className="certification-item-entry"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Card Container */}
      <div
        className={`relative p-4 md:p-6 rounded-lg border transition-all duration-300 cursor-pointer group ${
          isHovered
            ? "bg-gradient-to-br from-purple/20 to-purple/10 border-purple/60 shadow-lg shadow-purple/20 -translate-y-1"
            : "bg-gradient-to-br from-[rgba(203,172,249,0.05)] to-[rgba(203,172,249,0.02)] border-purple/20 hover:border-purple/40 hover:shadow-md hover:shadow-purple/10 hover:-translate-y-1"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onCardClick(certification)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onCardClick(certification);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`${certification.title} from ${certification.issuer} - Click to view certificate`}
      >
        {/* Accent line indicator */}
        <div
          className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-purple to-blue-400 rounded-t-lg transition-all duration-300 ${
            isHovered ? "w-full" : "w-0"
          }`}
        />

        {/* Content */}
        <div className="space-y-3">
          {/* Title */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-white leading-snug group-hover:text-purple/80 transition-colors duration-300">
              {certification.title}
            </h3>
          </div>

          {/* Issuer with badge */}
          <p className="text-xs md:text-sm text-white-100 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple/60" />
            {certification.issuer}
          </p>

          {/* Dates and Credential ID */}
          {(certification.issueDate || certification.credentialId) && (
            <div className="text-xs text-white-100/70 space-y-1 pt-2 border-t border-purple/10">
              {certification.issueDate && (
                <p className="flex items-center gap-2">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {certification.issueDate}
                </p>
              )}
              {certification.credentialId && (
                <p
                  className="truncate flex items-center gap-2"
                  title={certification.credentialId}
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  {certification.credentialId}
                </p>
              )}
            </div>
          )}

          {/* Skills/Tags */}
          {certification.skills && certification.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3">
              {certification.skills.slice(0, 2).map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-1 rounded bg-purple/10 text-purple border border-purple/20 group-hover:bg-purple/20 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
              {certification.skills.length > 2 && (
                <span className="text-xs px-2 py-1 text-white-100/60">
                  +{certification.skills.length - 2}
                </span>
              )}
            </div>
          )}

          {/* Interactive Hint */}
          <p className="text-xs text-purple/60 pt-2 italic flex items-center gap-1 group-hover:text-purple transition-colors duration-300">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Click to view
          </p>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for section reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleCardClick = (cert: Certification) => {
    setSelectedCert(cert);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    // Clear selection after animation completes
    setTimeout(() => setSelectedCert(null), 500);
  };

  return (
    <section className="py-20" id="certifications">
      {/* Section Header */}
      <div className="px-5 sm:px-10">
        <h1 className="heading">
          Certifications &<span className="text-purple"> Achievements</span>
        </h1>
        <p className="text-center text-white-100 mt-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Professional certifications and credentials that validate my expertise
          in cutting-edge technologies and industry best practices.
        </p>
      </div>

      {/* Certifications Grid */}
      <div
        ref={containerRef}
        className={`max-w-5xl mx-auto px-5 sm:px-10 mt-12 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Responsive Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              onCardClick={handleCardClick}
              index={index}
            />
          ))}
        </div>

        {/* Empty State */}
        {certifications.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-purple/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-white-100">Certifications coming soon...</p>
          </div>
        )}
      </div>

      {/* Decorative bottom accent */}
      {certifications.length > 0 && (
        <div className="flex justify-center mt-12">
          <div className="w-1 h-12 bg-gradient-to-b from-purple/50 to-transparent" />
        </div>
      )}

      {/* Certificate Viewer Modal */}
      <CertificateViewer
        isOpen={isViewerOpen}
        certificate={selectedCert}
        onClose={handleCloseViewer}
      />
    </section>
  );
};

export default Certifications;
