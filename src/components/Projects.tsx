import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

// Updated project data with more professional focus and URLs
const projects = [
  {
    id: 1,
    title: "Codexerone",
    category: "Code snippets Shop",
    description: " Code01 is a platform designed for developers to discover, share, and learn from a curated collection of code snippets.",
    technologies: ["React", "Next.js", "Typescript", "Shadcn & Tailwind","Mongodb", "SSR & SSG"],
    image: "https://res.cloudinary.com/dsc2o1ykh/image/upload/v1742316752/Screenshot_2025-03-02_140107_v2rq5q.png",
    url: "https://www.codexerone.com/"
  },
  {
    id: 2,
    title: "M24Show",
    category: "Movie Website",
    description: "a next-gen movie details platform , bringing you the latest movie insights, trailers, and even YouTube’s free movies all in one place! 🔥",
    technologies: ["React", "Next.js", "Typescript", "Shadcn, Radix & Tailwind","Mongodb", "SSR & SSG","PWA", "Vercel"],
    image: "https://res.cloudinary.com/dsc2o1ykh/image/upload/v1742316321/WhatsApp_Image_2025-02-16_at_10.11.05_03b8d0d6_scc6xt.jpg",
    url: "https://www.m24show.com/"
  },
  {
    id: 3,
    title: "AI Deck Builder Clash Royale ",
    category: "Ai Tool App",
    description: "AI-Assisted Deck Creation: Select your preferred archetype and main card, and let our AI generate optimal deck configurations for you.",
    technologies: ["React", "Next.js", "Typescript", "Shadcn, Radix & Tailwind","Mongodb", "SSR & SSG","PWA", "Vercel"],
    image: "https://res.cloudinary.com/dsc2o1ykh/image/upload/v1742316972/WhatsApp_Image_2025-02-16_at_10.55.47_ec5c80e3_o37hys.jpg",
    url: "https://ai.crdeckbuilder.com/"
  },
  {
    id: 4,
    title: "MovieXT",
    category: "Movie Database",
    description: "a cutting-edge platform that transforms how we explore and understand movies. Leveraging advanced AI technologies, MovieXT offers detailed information and unique perspectives on a vast array of films.",
    technologies: ["React", "Next.js", "Typescript", "Shadcn, Radix & Tailwind","Mysql", "SSR & SSG","PWA", "Vercel"],
    image: "https://res.cloudinary.com/dsc2o1ykh/image/upload/v1742316503/Screenshot_2025-02-16_102534_b0fbme.png",
    url: "https://www.moviext.com/"
  },
  {
    id: 5,
    title: "Clash Royale Deck Builder",
    category: "Tool App",
    description: "Build the ultimate Clash Royale deck by selecting your favorite cards and analyzing their synergy to create a winning strategy",
    technologies: ["Mern Stack, Json Storage, PWA, Seo"],
    image: "https://res.cloudinary.com/dsc2o1ykh/image/upload/v1742317342/crdeck_thumbnail_kkod41.png",
    url: "https://crdeckbuilder.com/"
  },
  {
    id: 6,
    title: "Health Report Checker Web App",
    category: "Gemini API Developer Competition",
    description: "Instantly interpret your health reports with AI-powered precision.",
    technologies: ["Python", "Flask", "Gemini Ai Api"],
    image: "https://res.cloudinary.com/dsc2o1ykh/image/upload/v1742317485/Screenshot_2025-03-18_224927_igpn18.png",
    url: "https://ai.google.dev/competition/projects/health-report-checker-web-app"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const projectsContainer = projectsRef.current;

    if (!section || !title || !projectsContainer) return;

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

    // Animate project cards
    gsap.fromTo(
      projectsContainer.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsContainer,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Create a stagger effect when scrolling through projects
    Array.from(projectsContainer.children).forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          y: 50,
          rotateY: -5,
          opacity: 0.5 
        },
        {
          y: 0,
          rotateY: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'top 60%',
            scrub: 1
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Gallery animation effect
  const handleProjectEnter = (id: number) => {
    setActiveProject(id);
  };

  const handleProjectLeave = () => {
    setActiveProject(null);
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 min-h-screen relative"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/20 to-background"></div>
      
      <div className="container px-4 mx-auto">
        <div ref={titleRef} className="text-center mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground inline-block glass">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Featured Client Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of complex, full-stack applications built for clients across various industries.
          </p>
        </div>
        
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isActive={activeProject === project.id}
              onMouseEnter={() => handleProjectEnter(project.id)}
              onMouseLeave={handleProjectLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
};

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProjectCard = ({ project, isActive, onMouseEnter, onMouseLeave }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    if (!card || !image) return;
    
    // 3D tilt effect on hover
    card.addEventListener('mousemove', handleMouseMove);
    
    // Hover effect
    card.addEventListener('mouseenter', () => {
      gsap.to(image, {
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.out'
      });
      
      gsap.to(card, {
        transform: 'scale(1.02)',
        boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)',
        duration: 0.3
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
      
      gsap.to(card, {
        transform: 'scale(1) rotateX(0) rotateY(0)',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
        duration: 0.3
      });
    });
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', () => {});
      card.removeEventListener('mouseleave', () => {});
    };
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setMousePosition({ x, y });
    
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  const handleProjectClick = () => {
    window.open(project.url, '_blank');
  };

  return (
    <div 
      ref={cardRef} 
      className="glass-card rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col preserve-3d hover:z-10 transition-all duration-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleProjectClick}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <div className="overflow-hidden relative">
        <div 
          ref={imageRef}
          className="project-image h-60 w-full bg-cover bg-center transition-transform duration-500 ease-out"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-70' : 'opacity-0'}`}></div>
        
        {/* Overlay with animations */}
        <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
          <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-white font-medium">View Case Study</span>
          </div>
        </div>
      </div>
      
      <div ref={contentRef} className="p-6 flex flex-col flex-grow relative overflow-hidden">
        {/* Decorative element that follows mouse */}
        <div 
          className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            left: `${mousePosition.x - 40}px`,
            top: `${mousePosition.y - 40}px`,
            transition: 'left 0.1s, top 0.1s'
          }}
        ></div>
        
        <span className="text-xs font-medium text-muted-foreground mb-2 relative z-10">
          {project.category}
        </span>
        <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors relative z-10">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow relative z-10">
          {project.description}
        </p>
        
        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a 
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-sm font-medium flex items-center mt-auto text-primary relative z-10 overflow-hidden group-hover:font-bold"
        >
          <span className="relative z-10 transition-transform group-hover:translate-x-2">View Project</span>
          <svg 
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-3" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33333M12.6667 8L8.00001 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
        </a>
      </div>
    </div>
  );
};

export default Projects;

