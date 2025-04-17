
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const templates = [
  {
    id: 1,
    title: "SaaS 3d Landing Page",
    category: "Saas Template",
    description: "Modern 3d landing page.Tech - three js (Three Scene), Vite , TypeScript , React , shadcn-ui , Tailwind CSS.",
    image: "https://res.cloudinary.com/dsc2o1ykh/image/upload/v1742230817/Screenshot_2025-03-17_224055_cqxfei.png",
    url: "https://frosted-steel.vercel.app/"
  },
  {
    id: 2,
    title: "E-commerce Starter",
    category: "Ecommerce Template",
    description: "Complete e-commerce landing page. Tech - Vite , TypeScript , React , shadcn-ui , Tailwind CSS.",
    image: "https://res.cloudinary.com/dsc2o1ykh/image/upload/v1742230849/Frost_Ecommerce_thumbnail_fhp7of.png",
    url: "https://frost-ecommerce.vercel.app/"
  },
  {
    id: 3,
    title: "Saas Landing Page 2",
    category: "Saas Website",
    description: "Modern landing page. Tech - three js (Three Scene), GSAP, Vite , TypeScript , React , shadcn-ui , Tailwind CSS.",
    image: "https://res.cloudinary.com/dsc2o1ykh/image/upload/v1742230847/framer_templates_thumbnail_xxlncn.png",
    url: "https://framer-dusky.vercel.app/"
  },
 
  {
    id: 4,
    title: "SaaS Landing Page 3",
    category: "Marketing Template",
    description: "Complete Marketing Saas landing page. Tech - Frame Motion, Vite , TypeScript , React , shadcn-ui , Tailwind CSS.",
    image: "https://res.cloudinary.com/dsc2o1ykh/image/upload/v1742230850/qalzy_templates_thumbnail_vdl4mn.png",
    url: "https://qalzy-ten.vercel.app/"
  },
  {
    id: 5,
    title: "Bajrang Store",
    category: "Ecommerce - Wholesaler",
    description: "Modern landing page. Tech - Vite , TypeScript , React , shadcn-ui , Tailwind CSS.",
    image: "https://res.cloudinary.com/dsc2o1ykh/image/upload/v1742233328/Screenshot_2025-03-17_232549_cnt2c2.png",
    url: "https://bajrang-hardware.vercel.app/"
  }
];

const Templates = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const templatesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const templatesContainer = templatesRef.current;

    if (!section || !title || !templatesContainer) return;

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

    // Animate template cards
    gsap.fromTo(
      templatesContainer.children,
      { 
        x: (index) => index % 2 === 0 ? -50 : 50, 
        opacity: 0 
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: templatesContainer,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="templates" 
      ref={sectionRef}
      className="py-24 bg-muted/30 relative"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container px-4 mx-auto">
        <div ref={titleRef} className="text-center mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary inline-block glass">
            Templates
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Ready-to-Use Templates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of pre-built templates and UI kits designed for rapid development and customization.
          </p>
        </div>
        
        <div ref={templatesRef} className="grid md:grid-cols-2 gap-8">
          {templates.map((template) => (
            <TemplateCard 
              key={template.id} 
              template={template} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type Template = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
};

interface TemplateCardProps {
  template: Template;
}

const TemplateCard = ({ template }: TemplateCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card.querySelector('.template-overlay'), {
        opacity: 1,
        y: 0,
        duration: 0.3
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card.querySelector('.template-overlay'), {
        opacity: 0,
        y: 20,
        duration: 0.3
      });
    });
    
    return () => {
      if (card) {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="relative h-[300px] group overflow-hidden rounded-xl shadow-lg"
      onClick={() => window.open(template.url, '_blank')}
      style={{ cursor: 'pointer' }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${template.image})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 p-6 w-full z-10">
        <span className="text-xs font-medium text-white/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm inline-block mb-2">
          {template.category}
        </span>
        <h3 className="text-xl font-heading font-bold text-white mb-1">
          {template.title}
        </h3>
      </div>
      
      <div className="template-overlay absolute inset-0 bg-primary/90 backdrop-blur-sm p-6 flex flex-col justify-center opacity-0 translate-y-20 transition-all duration-300">
        <h3 className="text-xl font-heading font-bold text-white mb-3">
          {template.title}
        </h3>
        <p className="text-white/90 mb-4 text-sm">
          {template.description}
        </p>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-xs font-medium text-white/80">
            {template.category}
          </span>
          <a 
            href={template.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-white/90 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            View Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Templates;
