
import React from 'react';

const marqueeTextItems = ["Luxury Living", "Modern Spaces", "Timeless Design", "Elegant Interiors"];

export function MarqueeSection() {
  const renderMarqueeContent = () => (
    <>
      {marqueeTextItems.map((item, index) => (
        <React.Fragment key={index}>
          <span className="mx-4 md:mx-6 text-xl md:text-3xl font-semibold font-headline tracking-wider text-foreground/80">
            {item}
          </span>
          {index < marqueeTextItems.length - 1 && (
            <span className="text-primary text-xl md:text-3xl font-semibold font-headline tracking-wider mx-1 md:mx-2">
              •
            </span>
          )}
        </React.Fragment>
      ))}
    </>
  );

  return (
    <section className="w-full relative flex overflow-x-hidden py-4 md:py-6 bg-secondary/20 group border-y border-border">
      {/* This block starts off-screen to the left and moves into view, then continues right */}
      <div className="py-2 animate-marquee2-right whitespace-nowrap group-hover:[animation-play-state:paused]" aria-hidden="true">
        {renderMarqueeContent()}
      </div>
      {/* This block starts in view and moves right, eventually off-screen. It's positioned absolutely to sit on top initially, ensuring the 'marquee2-right' can seamlessly follow. */}
      <div className="absolute top-0 py-2 animate-marquee-right whitespace-nowrap group-hover:[animation-play-state:paused]">
        {renderMarqueeContent()}
      </div>
    </section>
  );
}
