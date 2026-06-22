"use client";

import { useRef, useState, useCallback, useEffect } from "react";

const portfolioItems = [
  { num: "01", style: "Black & Grey", image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=800&fit=crop" },
  { num: "02", style: "Color Realism", image: "https://images.unsplash.com/photo-1590246815117-a4e636f28ddf?w=600&h=750&fit=crop" },
  { num: "03", style: "Fine Line", image: "https://images.unsplash.com/photo-1612459284970-e8f027596582?w=600&h=800&fit=crop" },
  { num: "04", style: "Japanese", image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=750&fit=crop" },
  { num: "05", style: "Neo-Traditional", image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=800&fit=crop" },
  { num: "06", style: "Geometric", image: "https://images.unsplash.com/photo-1542556398-95fb5b9f9304?w=600&h=750&fit=crop" },
];

export default function HorizontalGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    scrollRef.current.scrollLeft = scrollStart.current - (e.pageX - startX.current) * 1.2;
  }, []);

  const stopDrag = useCallback(() => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  }, []);

  useEffect(() => {
    window.addEventListener("mouseup", stopDrag);
    return () => window.removeEventListener("mouseup", stopDrag);
  }, [stopDrag]);

  return (
    <div
      ref={scrollRef}
      className="horizontal-scroll px-6 md:px-12 lg:px-20"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
    >
      {portfolioItems.map((item) => (
        <div key={item.num} className="horizontal-scroll-item w-[280px] md:w-[340px] lg:w-[380px] flex-shrink-0 group">
          <div className="aspect-[3/4] w-full mb-4 relative overflow-hidden rounded-sm border border-white/[.06] transition-transform duration-500 group-hover:scale-[1.02]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={`${item.style} tattoo artwork`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" draggable={false} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="font-display text-3xl text-white/20">{item.num}</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="font-display text-sm text-white/80 italic">{item.style}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
