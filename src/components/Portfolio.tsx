
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Users, Globe, Calendar, Eye } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "YouTube Channel",
      subtitle: "Napaporn Kanyamee",
      description: "ช่อง YouTube เกี่ยวกับ AI และ Coding พร้อมเนื้อหาการสอนที่เข้าใจง่าย",
      details: {
        role: "Content Creator & Educator",
        tech: "AI Education, Video Production, Tutorial Design",
        achievement: "สร้างชุมชนการเรียนรู้ AI ที่แข็งแกร่ง",
        subscribers: "1,000+ subscribers"
      },
      link: "https://www.youtube.com/channel/UC_P2kym4Mv2TjCH-pw3vSog",
      icon: Play,
      color: "from-red-500/20 to-red-600/20",
      borderColor: "border-red-500/30",
      stats: [
        { icon: Eye, label: "Views", value: "50K+" },
        { icon: Users, label: "Subscribers", value: "1K+" },
        { icon: Calendar, label: "Videos", value: "100+" }
      ]
    },
    {
      title: "Facebook Page",
      subtitle: "나파펀",
      description: "เพจ Facebook เกี่ยวกับ AI พร้อมเนื้อหาและ Tips ที่น่าสนใจ",
      details: {
        role: "Community Manager & AI Educator",
        tech: "Social Media Strategy, Content Marketing",
        achievement: "สร้างการมีส่วนร่วมของชุมชน AI ภาษาไทย",
        followers: "5,000+ followers"
      },
      link: "https://www.facebook.com/share/1LdgTVA5u5/?mibextid=wwXIf",
      icon: Users,
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      stats: [
        { icon: Users, label: "Followers", value: "5K+" },
        { icon: Eye, label: "Reach", value: "100K+" },
        { icon: Calendar, label: "Posts", value: "500+" }
      ]
    },
    {
      title: "Website",
      subtitle: "Napaporn.com",
      description: "เว็บไซต์ส่วนตัวเกี่ยวกับ AI และ Coding พร้อมบทความและทรัพยากรการเรียนรู้",
      details: {
        role: "Full-Stack Developer & Content Writer",
        tech: "React, Node.js, MongoDB, SEO Optimization",
        achievement: "แหล่งเรียนรู้ AI ที่ครบถ้วนและเข้าถึงได้ง่าย",
        visitors: "10,000+ monthly visitors"
      },
      link: "#",
      icon: Globe,
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      stats: [
        { icon: Eye, label: "Visitors", value: "10K+/mo" },
        { icon: Calendar, label: "Articles", value: "50+" },
        { icon: Users, label: "Resources", value: "100+" }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">ผลงานของฉัน</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            แพลตฟอร์มและช่องทางต่างๆ ที่ฉันใช้ในการแชร์ความรู้และสร้างคอนเทนต์เกี่ยวกับ AI และเทคโนโลยี
            พร้อมด้วยผลลัพธ์และความสำเร็จที่ได้รับ
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
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
              
              <CardContent className="relative z-10 space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold">บทบาท:</span> {project.details.role}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold">เทคโนโลยี:</span> {project.details.tech}
                  </div>
                  <div className="text-xs text-primary/80">
                    <span className="font-semibold">ผลสำเร็จ:</span> {project.details.achievement}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3 border-t border-primary/20">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <stat.icon className="w-4 h-4 mx-auto text-primary/60 mb-1" />
                      <div className="text-xs font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
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
