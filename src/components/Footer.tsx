
import { Heart, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/20 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Code2 className="w-6 h-6 text-primary mr-2" />
            <span className="font-bold text-lg gradient-text">Napaporn</span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" />
            <span>by Napaporn • © 2024</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-primary/10 text-center text-sm text-muted-foreground">
          <p>AI Content Creator • Educator • Technology Enthusiast</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
