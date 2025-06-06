
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Video, BookOpen, Users, Zap } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Machine Learning, Deep Learning, Computer Vision, NLP",
      level: 90,
      color: "text-blue-400"
    },
    {
      icon: Code,
      title: "Programming",
      description: "Python, JavaScript, React, Node.js, SQL",
      level: 85,
      color: "text-green-400"
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "Video Production, Tutorial Creation, Storytelling",
      level: 95,
      color: "text-red-400"
    },
    {
      icon: BookOpen,
      title: "Teaching & Education",
      description: "Curriculum Development, Online Learning, Mentoring",
      level: 90,
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Social Media Management, Engagement, Networking",
      level: 80,
      color: "text-purple-400"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Creative Problem Solving, Research, Technology Trends",
      level: 85,
      color: "text-orange-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">ทักษะและความเชี่ยวชาญ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ด้วยประสบการณ์กว่า 10 ปีในการสอนและสร้างคอนเทนต์ 
            ฉันมีความเชี่ยวชาญในหลากหลายด้านที่เกี่ยวข้องกับเทคโนโลยีและการศึกษา
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <skill.icon className={`w-10 h-10 ${skill.color} mr-3 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-lg font-bold">{skill.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {skill.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>ระดับความเชี่ยวชาญ</span>
                    <span className={skill.color}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r from-primary/60 to-primary transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
