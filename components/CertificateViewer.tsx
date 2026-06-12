"use client";
import React, { useEffect, useRef, useState } from "react";

interface CertificateViewerProps {
  isOpen: boolean;
  certificate: {
    id: number;
    title: string;
    issuer: string;
    image?: string;
  } | null;
  onClose: () => void;
}

const CertificateViewer: React.FC<CertificateViewerProps> = ({
  isOpen,
  certificate,
  onClose,
}) => {
  const [zoom, setZoom] = useState(100);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setZoom(100);
    }, 500);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking directly on the backdrop
    if (e.target === backdropRef.current) {
      handleClose();
    }
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 25, 50));
  };

  const handleResetZoom = () => {
    setZoom(100);
  };

  if (!isOpen || !certificate) return null;

  return (
    <div
      ref={backdropRef}
      className={`fixed inset-0 z-50 ${
        isClosing ? "modal-backdrop-out" : "modal-backdrop-in"
      }`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      onClick={handleBackdropClick}
    >
      {/* Dark Overlay */}
      <div
        ref={overlayRef}
        className={`absolute inset-0 bg-black/40 ${
          isClosing ? "modal-overlay-out" : "modal-overlay-in"
        }`}
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative z-10 flex flex-col items-center justify-center h-full w-full p-4 md:p-8"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className={`absolute top-4 md:top-8 right-4 md:right-8 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
          aria-label="Close certificate viewer"
        >
          <svg
            className="w-6 h-6 md:w-7 md:h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Certificate Container */}
        <div
          className={`flex-1 flex items-center justify-center w-full max-h-[calc(100vh-200px)] ${
            isClosing ? "certificate-scale-out" : "certificate-scale-in"
          }`}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full"
            style={{
              aspectRatio: "auto",
              maxHeight: "100%",
            }}
          >
            {/* Certificate Image */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              {certificate.image ? (
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-contain"
                  style={{
                    transform: `scale(${zoom / 100})`,
                    transition: "transform 0.3s ease-out",
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400 p-8">
                  <svg
                    className="w-16 h-16 mb-4"
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
                  <p className="text-center">Certificate image not available</p>
                </div>
              )}
            </div>

            {/* Certificate Info Overlay (top) */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4 md:p-6">
              <h2 className="text-white font-bold text-lg md:text-xl line-clamp-2">
                {certificate.title}
              </h2>
              <p className="text-white/70 text-sm md:text-base mt-1">
                {certificate.issuer}
              </p>
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div
          className={`mt-6 md:mt-8 flex items-center justify-center gap-3 ${
            isClosing ? "controls-slide-out" : "controls-slide-in"
          }`}
        >
          {/* Zoom Out Button */}
          <button
            onClick={handleZoomOut}
            disabled={zoom <= 50}
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            aria-label="Zoom out"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>

          {/* Zoom Percentage Display */}
          <div className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm min-w-[100px] text-center">
            <span className="text-white font-medium text-sm md:text-base">
              {zoom}%
            </span>
          </div>

          {/* Zoom In Button */}
          <button
            onClick={handleZoomIn}
            disabled={zoom >= 200}
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            aria-label="Zoom in"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>

          {/* Reset Button */}
          {zoom !== 100 && (
            <button
              onClick={handleResetZoom}
              className="px-3 py-2 rounded-lg bg-purple/20 hover:bg-purple/30 border border-purple/40 hover:border-purple/60 text-purple font-medium text-xs md:text-sm transition-all duration-300"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;
