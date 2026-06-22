"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const portfolioItems = [
  { num: "01", style: "Black & Grey", aspect: "aspect-[3/4]" },
  { num: "02", style: "Color Realism", aspect: "aspect-[4/5]" },
  { num: "03", style: "Fine Line", aspect: "aspect-[3/4]" },
  { num: "04", style: "Japanese", aspect: "aspect-[4/5]" },
  { num: "05", style: "Neo-Traditional", aspect: "aspect-[3/4]" },
  { num: "06", style: "Geometric", aspect: "aspect-[4/5]" },
];

export default function HorizontalGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  useEffect(() => {
    const handleGlobalUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalUp);
    return () => window.removeEventListener("mouseup", handleGlobalUp);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="horizontal-scroll px-6 md:px-12 lg:px-20"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      {portfolioItems.map((item) => (
        <div
          key={item.num}
          className="horizontal-scroll-item w-[300px] md:w-[380px] lg:w-[420px] flex-shrink-0 group"
        >
          <div
            className={`img-placeholder ${item.aspect} w-full mb-4 transition-transform duration-500 group-hover:scale-[1.02]`}
          >
            <div className="absolute top-4 left-4 z-10">
              <span className="font-display text-3xl text-cream/10">
                {item.num}
              </span>
            </div>
            <span className="img-placeholder-label">Photo</span>
          </div>
          <div className="flex items-center justify-between px-1">
            <span className="font-display text-sm text-cream/60 italic">
              {item.style}
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-muted">
              {item.num}/06
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
