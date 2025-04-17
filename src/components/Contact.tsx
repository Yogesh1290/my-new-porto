
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const form = formRef.current;
    const social = socialRef.current;

    if (!section || !title || !form || !social) return;

    // Title animation
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

    // Form animation
    gsap.fromTo(
      form,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: form,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Social links animation
    gsap.fromTo(
      social.children,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: social,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted! (This is just a demo)');
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 min-h-screen relative"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_center,rgba(30,30,30,0.3),rgba(0,0,0,0))]"></div>
      
      <div className="container px-4 mx-auto max-w-5xl">
        <div ref={titleRef} className="text-center mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground inline-block glass">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got a project in mind? Let's create something amazing together. Feel free to reach out through the form below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8">
              <div className="grid gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full px-4 py-3 rounded-md bg-white/5 border border-border backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 rounded-md bg-white/5 border border-border backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full px-4 py-3 rounded-md bg-white/5 border border-border backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-white/5 border border-border backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:scale-105 hover:shadow-lg justify-self-start"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="md:col-span-2 space-y-8">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium">sme50962@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-medium">+977 9816766240</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">Nepal, Morang, Biratnagar</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold mb-4">Connect</h3>
              <div ref={socialRef} className="flex flex-wrap gap-4">
                <SocialButton label="Twitter" />
                <SocialButton label="Dribbble" />
                <SocialButton label="Instagram" />
                <SocialButton label="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialButton = ({ label }: { label: string }) => (
  <a 
    href="#" 
    className="px-4 py-2 rounded-md glass hover:bg-white/10 transition-colors"
  >
    {label}
  </a>
);

export default Contact;
