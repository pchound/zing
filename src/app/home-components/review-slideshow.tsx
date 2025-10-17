'use client';

import { useEffect, useMemo, useRef, useState } from 'react';


type Review = {
  id: string;
  name: string;
  rating?: number; // 1-5
  text: string;
  avatarUrl?: string;
};

type Props = {
   reviews: ReadonlyArray<Review>; // or: readonly Review[]
  autoPlayMs?: number;     // default 5000
  pauseOnHover?: boolean;  // default true
};

export default function ReviewsCarousel({
  reviews,
  autoPlayMs = 5000,
  pauseOnHover = true,
}: Props) {

// Font import
useEffect(() => {
    const link = document.createElement('link');
    link.href =
        'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200;1,8..60,200&display=swap" rel="stylesheet';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}, []);

  // guard
  const items = useMemo(() => reviews?.length ? reviews : [], [reviews]);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Touch/swipe
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const goTo = (i: number) => setIndex(((i % items.length) + items.length) % items.length);

  // Autoplay
  useEffect(() => {
    if (!items.length) return;
    if (isPaused) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => next(), autoPlayMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [items.length, isPaused, autoPlayMs]);

  // Keyboard arrows when focused on the carousel
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, []);

  // Pause on hover (desktop)
  const hoverProps = pauseOnHover
    ? {
        onMouseEnter: () => setIsPaused(true),
        onMouseLeave: () => setIsPaused(false),
      }
    : {};

  // Touch handlers (mobile)
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
    setIsPaused(true);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    const threshold = 50; // px
    if (deltaX.current > threshold) prev();
    else if (deltaX.current < -threshold) next();
    startX.current = null;
    deltaX.current = 0;
    setIsPaused(false);
  };

  if (!items.length) {
    return (
      <div className="p-6 rounded-xl bg-neutral-900/40 text-neutral-300">
        No reviews yet.
      </div>
    );
  }





  return (
    <section
      ref={containerRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Customer reviews"
      className="relative w-full"
      {...hoverProps}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      
    >




      <div
      className="pt-20 pb-10 "

      style={{
        backgroundImage: "url('/pattern.svg')",
      }}
    >

      {/* Slides viewport */}
      <div className="overflow-hidden rounded-2xl bg-[#686157] w-[90%] md:max-w-7xl mx-auto ">

        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live="polite"
        >
          {items.map((r) => (
            <article
              key={r.id}
              className="w-full shrink-0 p-6 md:p-10 flex items-center justify-center"
                           style={{
              fontFamily: '"Quicksand", sans-serif',
              fontWeight: 300
          }}
            >
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-4">
                  {r.avatarUrl ? (
                    <img
                      src={r.avatarUrl}
                      alt={`${r.name}'s avatar`}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-black/20"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-neutral-700 ring-2 ring-black/10" />
                  )}
                  <div className="leading-tight">
                    <h3 className="font-semibold text-white">{r.name}</h3>

                    {typeof r.rating === 'number' && (
                      <div className="mt-1 text-amber-400" aria-label={`${r.rating} out of 5 stars`}>
                        {'★'.repeat(Math.round(r.rating))}{' '}
                        <span className="text-neutral-400">
                          {'★'.repeat(5 - Math.round(r.rating))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-lg md:text-xl text-white leading-relaxed">
                  “{r.text}”
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="rounded-xl border border-white/15 bg-[#4d473f] px-3 py-2 text-sm text-white hover:bg-[#221e1a] focus:outline-none focus:ring-2 focus:ring-[#000000] cursor-pointer"
            aria-label="Previous review"
             style={{
              fontFamily: '"Quicksand", sans-serif',
              fontWeight: 300
          }}
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-xl border border-white/15 bg-[#4d473f] px-3 py-2 text-sm text-white hover:bg-[#221e1a] focus:outline-none focus:ring-2 focus:ring-[#000000] cursor-pointer"
            aria-label="Next review"

                         style={{
              fontFamily: '"Quicksand", sans-serif',
              fontWeight: 300
          }}
          >
            Next →
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition
                ${i === index ? 'bg-[#d21f19]' : 'bg-[#706558] hover:bg-gray-400 cursor-pointer'}`}
            />
          ))}
          
        </div>
      </div>
      </div>
    </section>
  );
}

