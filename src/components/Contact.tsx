
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ExternalLink, Users } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">ติดต่อเรา</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            พร้อมให้คำปรึกษาและแชร์ความรู้เกี่ยวกับ AI และเทคโนโลยี
            <br />
            สามารถติดต่อเราได้ผ่านช่องทางต่างๆ ด้านล่าง
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-blue-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl">Facebook Page</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  ติดตามเพจ Facebook ของเราเพื่อรับข้อมูลข่าวสารและเนื้อหาใหม่ๆ เกี่ยวกับ AI
                </p>
                <Button 
                  className="w-full bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white border border-blue-500/50 transition-all duration-300"
                  asChild
                >
                  <a 
                    href="https://www.facebook.com/share/1LdgTVA5u5/?mibextid=wwXIf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    เยี่ยมชมเพจ
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-8 h-8 text-green-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl">ปรึกษาโดยตรง</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  ต้องการคำปรึกษาหรือสอบถามข้อมูลเพิ่มเติม? ส่งข้อความมาหาเราได้เลย
                </p>
                <Button 
                  className="w-full bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-white border border-green-500/50 transition-all duration-300"
                  asChild
                >
                  <a 
                    href="https://www.facebook.com/share/1LdgTVA5u5/?mibextid=wwXIf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    ส่งข้อความ
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="glass border-primary/30 text-center">
            <CardContent className="p-8">
              <Mail className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
              <h3 className="text-2xl font-bold mb-4">พร้อมให้คำปรึกษา</h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                หากคุณสนใจในการเรียนรู้เกี่ยวกับ AI, การเขียนโปรแกรม 
                หรือต้องการความช่วยเหลือในโปรเจ็กต์ของคุณ 
                เราพร้อมให้คำปรึกษาและแชร์ประสบการณ์
              </p>
              <div className="flex flex-wrap gap-3 justify-center text-sm text-muted-foreground">
                <span className="bg-primary/10 px-3 py-1 rounded-full">AI Consulting</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">Programming Mentoring</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">Content Creation</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">Tech Education</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
