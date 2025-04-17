
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const stats = statsRef.current;
    const image = imageRef.current;

    if (!section || !text || !stats || !image) return;

    // Text animation
    gsap.fromTo(
      text.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Stats animation
    gsap.fromTo(
      stats.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: stats,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // 3D rotation animation for the image
    gsap.fromTo(
      image,
      { rotateY: -20, opacity: 0 },
      {
        rotateY: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: image,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Mouse move parallax effect
    section.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const rect = section.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      
      gsap.to(image, {
        rotateY: x * 10,
        rotateX: -y * 10,
        duration: 0.5,
        ease: 'power2.out'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      section.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 min-h-screen flex items-center relative"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-muted/20"></div>
      
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={textRef} className="space-y-6">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground inline-block mb-2 glass">
              About Me
            </span>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
              I create immersive digital experiences with code and creativity
            </h2>
            
            <p className="text-lg text-muted-foreground">
              I'm Yogesh Singh, a full-stack developer with a passion for creating interactive 3D visualizations and cutting-edge web applications. With over 6 years of experience, I specialize in React, Three.js, and WebGL.
            </p>
            
            <p className="text-lg text-muted-foreground">
              My work focuses on merging technical excellence with creative design to build immersive digital experiences that push the boundaries of what's possible on the web.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <Skill>React</Skill>
              <Skill>TypeScript</Skill>
              <Skill>Three.js</Skill>
              <Skill>Next.js</Skill>
              <Skill>Node.js</Skill>
              <Skill>GraphQL</Skill>
            </div>
          </div>
          
          <div className="relative perspective-1000">
            <div 
              ref={imageRef}
              className="glass-card rounded-2xl p-6 md:p-10 overflow-hidden preserve-3d"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-20deg)'
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
              
              <div ref={statsRef} className="grid grid-cols-2 gap-8">
                <StatCard number="6+" text="Years Experience" />
                <StatCard number="50+" text="Projects Completed" />
                <StatCard number="20+" text="Satisfied Clients" />
                <StatCard number="8+" text="Awards Received" />
              </div>
              
              {/* 3D Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full preserve-3d"
                   style={{ transform: 'translateZ(20px)' }}></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-accent/10 rounded-full preserve-3d"
                   style={{ transform: 'translateZ(15px)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-4 py-2 glass rounded-full text-sm font-medium hover-float">
    {children}
  </span>
);

const StatCard = ({ number, text }: { number: string; text: string }) => (
  <div className="text-center relative preserve-3d" style={{ transform: 'translateZ(30px)' }}>
    <h3 className="text-3xl md:text-4xl font-heading font-bold mb-2">{number}</h3>
    <p className="text-sm text-muted-foreground">{text}</p>
  </div>
);

export default About;
