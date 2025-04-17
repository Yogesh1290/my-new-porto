
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const orbs = orbsRef.current;

    if (!section || !heading || !subtitle || !cta || !orbs) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      heading,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        subtitle,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(
        cta,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.4'
      );

    // 3D floating orbs
    const orbs3D = orbs.children;
    for (let i = 0; i < orbs3D.length; i++) {
      const orb = orbs3D[i] as HTMLElement;
      
      // Random initial position
      gsap.set(orb, {
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        z: Math.random() * 200 - 100,
        opacity: 0
      });
      
      // Animate in
      gsap.to(orb, {
        opacity: 0.8,
        duration: 2,
        delay: 0.5 + i * 0.2
      });
      
      // Continuous floating animation
      gsap.to(orb, {
        x: '+=' + (Math.random() * 100 - 50),
        y: '+=' + (Math.random() * 100 - 50),
        z: '+=' + (Math.random() * 100 - 50),
        repeat: -1,
        yoyo: true,
        duration: 5 + Math.random() * 5,
        ease: 'sine.inOut'
      });
    }

    // Parallax effect
    gsap.to(section, {
      backgroundPositionY: '30%',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Mouse move parallax for orbs
    section.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const posX = (clientX - centerX) / centerX;
      const posY = (clientY - centerY) / centerY;
      
      for (let i = 0; i < orbs3D.length; i++) {
        const orb = orbs3D[i] as HTMLElement;
        const factor = 0.02 + i * 0.01;
        
        gsap.to(orb, {
          x: posX * 100 * factor,
          y: posY * 100 * factor,
          duration: 1,
          ease: 'power2.out'
        });
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      section.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(255,255,255,0.05))] dark:bg-[radial-gradient(circle_at_center,rgba(30,30,30,0.5),rgba(0,0,0,0.9))]"></div>
      
      <div ref={orbsRef} className="absolute inset-0 -z-5 preserve-3d">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-40 h-40 rounded-full glass"
            style={{ 
              background: `radial-gradient(circle at center, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1), transparent)`,
              transform: 'translateZ(0px)',
              transformStyle: 'preserve-3d',
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)'
            }}
          ></div>
        ))}
      </div>
      
      <div className="container px-4 relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground inline-block mb-4 glass">
            Full Stack Developer
          </span>
        </div>
        
        <h1 
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
        >
          Hi, I'm <br className="md:hidden" /> 
          <span className="text-primary relative inline-block">
            Yogesh Singh
            <span className="absolute bottom-2 left-0 w-full h-3 bg-accent -z-10"></span>
          </span> 
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Building cutting-edge web experiences with React, TypeScript and Three.js.
          Specializing in interactive 3D visualizations and modern UI design.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:scale-105 hover:shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-md glass border border-border text-foreground font-medium transition-all hover:scale-105 hover:shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground opacity-70 hover:opacity-100 transition-opacity">
          <span className="mb-2">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;