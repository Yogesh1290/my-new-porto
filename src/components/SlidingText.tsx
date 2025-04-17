
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SlidingTextProps {
  text: string;
  direction: 'left' | 'right';
}

const SlidingText = ({ text, direction }: SlidingTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const initialX = direction === 'left' ? '-100%' : '100%';
    const finalX = direction === 'left' ? '100%' : '-100%';

    gsap.fromTo(
      textElement,
      { 
        x: initialX,
        opacity: 0.5 
      },
      {
        x: finalX,
        opacity: 1,
        duration: 20,
        ease: 'linear',
        scrollTrigger: {
          trigger: textElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === textElement) {
          trigger.kill();
        }
      });
    };
  }, [direction]);

  return (
    <div className="py-12 overflow-hidden relative">
      <div 
        ref={textRef} 
        className="text-4xl md:text-7xl font-heading font-bold text-primary/10 whitespace-nowrap"
      >
        {text}
      </div>
    </div>
  );
};

export default SlidingText;
