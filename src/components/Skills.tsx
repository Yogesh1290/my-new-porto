
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Define skills with proficiency percentages
const skills = [
  { name: 'React', percentage: 95 },
  { name: 'TypeScript', percentage: 90 },
  { name: 'Node.js', percentage: 85 },
  { name: 'Next.js', percentage: 88 },
  { name: 'Three.js', percentage: 80 },
  { name: 'TailwindCSS', percentage: 92 },
  { name: 'GraphQL', percentage: 78 },
  { name: 'GSAP', percentage: 85 },
  { name: 'UI/UX Design', percentage: 88 },
  { name: 'AWS', percentage: 75 },
  { name: 'Docker', percentage: 80 },
  { name: 'Git', percentage: 90 },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const cube3dRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const skillsContainer = skillsRef.current;
    const cube3d = cube3dRef.current;

    if (!section || !title || !skillsContainer || !cube3d) return;

    // Animate section title
    gsap.fromTo(
      title.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate skills bars
    gsap.fromTo(
      skillsContainer.querySelectorAll('.skill-item'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: skillsContainer,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate skill bars fill
    gsap.fromTo(
      skillsContainer.querySelectorAll('.skill-fill'),
      { width: '0%' },
      {
        width: (i, target) => target.dataset.percentage + '%',
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: skillsContainer,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // 3D Cube rotation
    const cubeAnimation = gsap.to(cube3d, {
      rotationY: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    });

    // Pause/resume cube animation based on visibility
    ScrollTrigger.create({
      trigger: cube3d,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => cubeAnimation.play(),
      onLeave: () => cubeAnimation.pause(),
      onEnterBack: () => cubeAnimation.play(),
      onLeaveBack: () => cubeAnimation.pause()
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      cubeAnimation.kill();
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 min-h-screen relative"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-muted/20"></div>
      
      <div className="container px-4 mx-auto">
        <div ref={titleRef} className="text-center mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground inline-block glass">
            My Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and proficiency in various technologies and tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={skillsRef} className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div 
                    className="skill-fill h-full bg-gradient-to-r from-primary/80 to-purple-500 rounded-full"
                    data-percentage={skill.percentage}
                    style={{ width: '0%' }} // Initial width, will be animated
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="perspective-500 flex justify-center">
            <div 
              ref={cube3dRef} 
              className="w-64 h-64 relative preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Cube faces */}
              <div className="cube-face front glass absolute w-full h-full flex items-center justify-center border border-primary/20"
                   style={{ transform: 'translateZ(8rem)' }}>
                <span className="text-3xl font-bold">React</span>
              </div>
              <div className="cube-face back glass absolute w-full h-full flex items-center justify-center border border-primary/20"
                   style={{ transform: 'rotateY(180deg) translateZ(8rem)' }}>
                <span className="text-3xl font-bold">Node.js</span>
              </div>
              <div className="cube-face right glass absolute w-full h-full flex items-center justify-center border border-primary/20"
                   style={{ transform: 'rotateY(90deg) translateZ(8rem)' }}>
                <span className="text-3xl font-bold">TypeScript</span>
              </div>
              <div className="cube-face left glass absolute w-full h-full flex items-center justify-center border border-primary/20"
                   style={{ transform: 'rotateY(-90deg) translateZ(8rem)' }}>
                <span className="text-3xl font-bold">Next.js</span>
              </div>
              <div className="cube-face top glass absolute w-full h-full flex items-center justify-center border border-primary/20"
                   style={{ transform: 'rotateX(90deg) translateZ(8rem)' }}>
                <span className="text-3xl font-bold">Tailwind</span>
              </div>
              <div className="cube-face bottom glass absolute w-full h-full flex items-center justify-center border border-primary/20"
                   style={{ transform: 'rotateX(-90deg) translateZ(8rem)' }}>
                <span className="text-3xl font-bold">Three.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
