
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Brain, Star, Award, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "ปีประสบการณ์", value: "10+", color: "text-blue-400" },
    { icon: Brain, label: "หัวข้อ AI", value: "50+", color: "text-green-400" },
    { icon: Star, label: "นักเรียน", value: "1000+", color: "text-yellow-400" },
    { icon: GraduationCap, label: "คอร์สออนไลน์", value: "25+", color: "text-purple-400" }
  ];

  const highlights = [
    {
      icon: Award,
      title: "ความเชี่ยวชาญ",
      description: "มีความเชี่ยวชาญในด้าน AI, Machine Learning และ Data Science พร้อมประสบการณ์การทำงานจริงในอุตสาหกรรม"
    },
    {
      icon: Target,
      title: "วิสัยทัศน์",
      description: "มุ่งมั่นในการเผยแพร่ความรู้ด้าน AI ให้เข้าถึงได้ง่าย และสร้างชุมชนการเรียนรู้ที่แข็งแกร่ง"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">เกี่ยวกับฉัน</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ผู้เชี่ยวชาญด้าน AI และการเขียนโปรแกรม ที่มุ่งมั่นในการแชร์ความรู้และสร้างแรงบันดาลใจให้กับคนรุ่นใหม่
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">ผู้เชี่ยวชาญ AI</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  เป็นคอนเทนต์ครีเอเตอร์ด้าน AI ที่มีความเชี่ยวชาญในการสอนและถ่ายทอดความรู้
                  เกี่ยวกับเทคโนโลยี Artificial Intelligence และการประยุกต์ใช้ในชีวิตประจำวัน
                  พร้อมด้วยประสบการณ์การทำงานจริงในโปรเจกต์ AI ต่างๆ
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">นักการศึกษา</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  มีประสบการณ์การสอนมาแล้ว 10 ปี ในการถ่ายทอดความรู้ด้านเทคโนโลยี
                  โปรแกรมมิ่ง และ AI ให้กับนักเรียนนักศึกษาและผู้ที่สนใจ
                  ผ่านทั้งการสอนแบบออนไลน์และออฟไลน์
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">การศึกษา</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  จบการศึกษาระบบสารสนเทศทางคอมพิวเตอร์ 
                  มหาวิทยาลัยเทคโนโลยีราชมงคล พร้อมด้วยการพัฒนาความรู้อย่างต่อเนื่อง
                  ในด้านเทคโนโลยีใหม่ๆ และแนวโน้มของอุตสาหกรรม
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <CardContent className="p-6">
                    <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {highlights.map((highlight, index) => (
              <Card 
                key={index}
                className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <highlight.icon className="w-6 h-6 text-primary mr-3" />
                    <h4 className="text-lg font-bold">{highlight.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
