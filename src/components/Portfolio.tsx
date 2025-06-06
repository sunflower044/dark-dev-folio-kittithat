
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Users, Globe } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "YouTube Channel",
      subtitle: "Napaporn Kanyamee",
      description: "ช่อง YouTube เกี่ยวกับ AI และ Coding พร้อมเนื้อหาการสอนที่เข้าใจง่าย",
      link: "https://www.youtube.com/channel/UC_P2kym4Mv2TjCH-pw3vSog",
      icon: Play,
      color: "from-red-500/20 to-red-600/20",
      borderColor: "border-red-500/30"
    },
    {
      title: "Facebook Page",
      subtitle: "나파펀",
      description: "เพจ Facebook เกี่ยวกับ AI พร้อมเนื้อหาและ Tips ที่น่าสนใจ",
      link: "https://www.facebook.com/share/1LdgTVA5u5/?mibextid=wwXIf",
      icon: Users,
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Website",
      subtitle: "Napaporn.com",
      description: "เว็บไซต์ส่วนตัวเกี่ยวกับ AI และ Coding พร้อมบทความและทรัพยากรการเรียนรู้",
      link: "#",
      icon: Globe,
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">ผลงานของเรา</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            แพลตฟอร์มและช่องทางต่างๆ ที่เราใช้ในการแชร์ความรู้และสร้างคอนเทนต์เกี่ยวกับ AI และเทคโนโลยี
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`glass ${project.borderColor} hover:border-primary/50 transition-all duration-300 hover:scale-105 group overflow-hidden relative`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <p className="text-primary/80 font-mono text-sm">
                  {project.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <Button 
                  className="w-full bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/50 transition-all duration-300"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    เยี่ยมชม
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
