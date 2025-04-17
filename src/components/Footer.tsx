
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-2xl font-heading font-bold tracking-tighter">
              <span className="text-primary">Porto</span>
              <span className="text-muted-foreground">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Creating exceptional digital experiences through design and technology.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-medium text-sm mb-4">Links</h4>
              <ul className="space-y-2">
                <FooterLink href="#hero">Home</FooterLink>
                <FooterLink href="#about">About</FooterLink>
                <FooterLink href="#projects">Projects</FooterLink>
                <FooterLink href="#contact">Contact</FooterLink>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-4">Social</h4>
              <ul className="space-y-2">
                <FooterLink href="#">Twitter</FooterLink>
                <FooterLink href="#">Instagram</FooterLink>
                <FooterLink href="#">Dribbble</FooterLink>
                <FooterLink href="https://www.linkedin.com/in/yogesh-singh-479a38262/recent-activity/all/">LinkedIn</FooterLink>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-medium text-sm mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">sme50962@gmail.com</li>
                <li className="text-sm text-muted-foreground">+977 9816766240</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Porto. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
      {children}
    </a>
  </li>
);

export default Footer;
