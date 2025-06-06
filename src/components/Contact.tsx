
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ExternalLink, Users, Github, Linkedin, Youtube } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Users,
      title: "เพจ Facebook",
      description: "ติดตามเพจ Facebook ของฉันเพื่อรับข้อมูลข่าวสารและเนื้อหาใหม่ๆ เกี่ยวกับ AI",
      link: "https://www.facebook.com/share/1LdgTVA5u5/?mibextid=wwXIf",
      buttonText: "เยี่ยมชมเพจ",
      color: "pink"
    },
    {
      icon: MessageCircle,
      title: "ปรึกษาโดยตรง",
      description: "ต้องการคำปรึกษาหรือสอบถามข้อมูลเพิ่มเติม? ส่งข้อความมาหาฉันได้เลย",
      link: "https://www.facebook.com/share/1LdgTVA5u5/?mibextid=wwXIf",
      buttonText: "ส่งข้อความ",
      color: "purple"
    },
    {
      icon: Youtube,
      title: "ช่อง YouTube",
      description: "ติดตามช่อง YouTube เพื่อรับชมวิดีโอสอน AI และ Programming ล่าสุด",
      link: "https://www.youtube.com/channel/UC_P2kym4Mv2TjCH-pw3vSog",
      buttonText: "ดูช่อง",
      color: "rose"
    },
    {
      icon: Mail,
      title: "อีเมล",
      description: "สำหรับการติดต่อเชิงธุรกิจหรือความร่วมมือในโปรเจกต์ต่างๆ",
      link: "mailto:napaporn@example.com",
      buttonText: "ส่งอีเมล",
      color: "fuchsia"
    }
  ];

  const socialLinks = [
    { icon: Users, label: "Facebook", url: "https://www.facebook.com/share/1LdgTVA5u5/?mibextid=wwXIf" },
    { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/channel/UC_P2kym4Mv2TjCH-pw3vSog" },
    { icon: Github, label: "GitHub", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      pink: "bg-pink-500/20 hover:bg-pink-500 text-pink-400 hover:text-white border-pink-500/50",
      purple: "bg-purple-500/20 hover:bg-purple-500 text-purple-400 hover:text-white border-purple-500/50",
      rose: "bg-rose-500/20 hover:bg-rose-500 text-rose-400 hover:text-white border-rose-500/50",
      fuchsia: "bg-fuchsia-500/20 hover:bg-fuchsia-500 text-fuchsia-400 hover:text-white border-fuchsia-500/50"
    };
    return colors[color as keyof typeof colors] || colors.pink;
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">ติดต่อฉัน</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            พร้อมให้คำปรึกษาและแชร์ความรู้เกี่ยวกับ AI และเทคโนโลยี
            <br />
            สามารถติดต่อฉันได้ผ่านช่องทางต่างๆ ด้านล่าง
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group h-full">
                <CardHeader className="text-center">
                  <method.icon className={`w-12 h-12 mx-auto mb-4 text-${method.color}-400 group-hover:scale-110 transition-transform duration-300`} />
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                    {method.description}
                  </p>
                  <Button 
                    className={`w-full transition-all duration-300 ${getColorClasses(method.color)}`}
                    asChild
                  >
                    <a 
                      href={method.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <method.icon className="w-4 h-4 mr-2" />
                      {method.buttonText}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass border-primary/30 text-center">
            <CardContent className="p-8">
              <div className="mb-6">
                <Mail className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold mb-4">พร้อมให้คำปรึกษา</h3>
                <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                  หากคุณสนใจในการเรียนรู้เกี่ยวกับ AI, การเขียนโปรแกรม 
                  หรือต้องการความช่วยเหลือในโปรเจ็กต์ของคุณ 
                  ฉันพร้อมให้คำปรึกษาและแชร์ประสบการณ์
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center text-sm text-muted-foreground mb-6">
                <span className="bg-primary/10 px-3 py-1 rounded-full">คำปรึกษา AI</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">แนะแนวการเขียนโปรแกรม</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">การสร้างคอนเทนต์</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">การศึกษาเทคโนโลยี</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">แนะแนวอาชีพ</span>
              </div>

              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-4 h-4 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
