
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code2, Sparkles } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "AI Content Creator & Educator";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-float">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary/20 to-primary/40 flex items-center justify-center mb-6 animate-pulse-glow">
              <Code2 className="w-16 h-16 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Napaporn</span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground font-mono">
              {text}
              <span className="border-r-2 border-primary animate-pulse ml-1"></span>
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            สอนเทคโนโลยี AI และการเขียนโปรแกรม มาแล้ว 10 ปี
            <br />
            พร้อมแชร์ความรู้และประสบการณ์ผ่านแพลตฟอร์มต่างๆ
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 glow"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              ดูผลงาน
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              ติดต่อเรา
            </Button>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;
