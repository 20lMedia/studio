
import React from 'react';

const marqueeTextItems = ["Luxury Living", "Modern Spaces", "Timeless Design", "Elegant Interiors"];

export function MarqueeSection() {
  const renderMarqueeContent = () => (
    <>
      {marqueeTextItems.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="text-primary text-xl md:text-3xl font-semibold font-headline tracking-wider mx-4 md:mx-6">
              •
            </span>
          )}
          <span className="text-xl md:text-3xl font-semibold font-headline tracking-wider text-foreground/80">
            {item}
          </span>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <section className="w-full relative flex overflow-x-hidden pt-2 pb-4 md:pt-3 md:pb-6 bg-secondary group">
      {/* This div starts in view and moves to the right, then repeats */}
      <div className="animate-marquee-right whitespace-nowrap group-hover:[animation-play-state:paused] flex-shrink-0">
        {renderMarqueeContent()}
      </div>
      {/* This div starts off-screen to the left and moves into view, following the first one to create a seamless loop */}
      <div className="absolute top-0 left-0 animate-marquee2-right whitespace-nowrap group-hover:[animation-play-state:paused] flex-shrink-0 pt-2 pb-4 md:pt-3 md:pb-6">
        {renderMarqueeContent()}
      </div>
    </section>
  );
}

