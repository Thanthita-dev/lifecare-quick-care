import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const highlights = [
  "ให้ความสำคัญถึงความปลอดภัยของผู้ป่วยและผู้บาดเจ็บ",
  "ตอบโจทย์สำหรับผู้ป่วยติดเตียงที่ไม่สามารถเดินทางได้",
  "ผู้ป่วยได้รับการรักษาอย่างทันท่วงที",
  "สะดวกต่อการเดินทาง",
  "บริการสแตนบายจุดปฐมพยาบาลตามกิจกรรมต่างๆ",
  "ทีมเจ้าหน้าที่ผ่านการอบรมและมีประสบการณ์มืออาชีพ",
  "เจ้าหน้าที่เสริมทุกวิชาชีพ"
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gold/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block">
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-gold mx-auto mb-6 rounded-full"></div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                เกี่ยวกับ <span className="text-gradient-red">LIFECARE</span>
              </h2>
            </div>
          </div>

          <Card className="p-10 md:p-16 shadow-premium bg-card animate-slide-up border-2 border-border/50 backdrop-blur-sm">
            <p className="text-xl md:text-2xl leading-relaxed mb-12 text-card-foreground text-center max-w-4xl mx-auto">
              รถพยาบาล<span className="font-bold text-primary">ไลฟ์แคร์</span>ให้ความสำคัญถึงความปลอดภัยของผู้ป่วย ผู้บาดเจ็บ
              และตอบโจทย์สำหรับผู้ป่วยติดเตียงที่ไม่สามารถเดินทางรักษาตัวที่โรงพยาบาลได้
              เพื่อให้ผู้ป่วยได้รับการรักษาอย่างทันท่วงที สะดวกต่อการเดินทาง และยังมีบริการสแตนบายจุดปฐมพยาบาลตามกิจกรรมต่างๆ
              เพื่อความปลอดภัยและได้รับการรักษาที่รวดเร็ว
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all"></div>
                      <div className="relative bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                        <CheckCircle className="w-6 h-6 text-primary" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                  <p className="text-card-foreground leading-relaxed text-lg">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-gold/5 to-primary/10 p-10 border-2 border-primary/20 shadow-red-glow">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
              <p className="text-2xl font-semibold text-center text-foreground mb-8 relative z-10 leading-relaxed">
                เพราะท่านไม่รู้วันที่เจ็บป่วยได้ ทางเรามีเจ้าหน้าที่ผ่านการอบรมมาแล้วและมีประสบการณ์ด้านพยาบาลที่เป็นมืออาชีพ
                อีกทั้งยังมีเจ้าหน้าที่เสริมทุกวิชาชีพ
              </p>
              <div className="glass-effect rounded-2xl p-8 border-2 border-white/50 shadow-premium relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
                  <h4 className="text-3xl font-bold text-primary text-center">พนักงานของเรา</h4>
                  <div className="h-1 w-12 bg-gradient-to-l from-transparent to-primary rounded-full"></div>
                </div>
                <p className="text-lg leading-relaxed text-foreground text-center">
                  พนักงานของเรา ประกอบด้วย <span className="font-bold text-primary px-1">พนักงานฉุกเฉินการแพทย์ (EMT)</span>, <span className="font-bold text-primary px-1">ผู้ช่วยพยาบาล (PN)</span>, <span className="font-bold text-primary px-1">อาสาฉุกเฉินการแพทย์ (EMR)</span>, และ<span className="font-bold text-primary px-1">พยาบาลเวชปฏิบัติ (RN)</span> โดยพนักงานของเรามีประสบการณ์การทำงานในเหตุฉุกเฉินบนรถพยาบาล อย่างมีประสิทธิภาพ
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
