import { Card } from "@/components/ui/card";
import { Ambulance, Heart, Stethoscope, Users, Shield } from "lucide-react";

const services = [
  {
    icon: Ambulance,
    title: "รถพยาบาลฉุกเฉิน 24 ชั่วโมง",
    description: "ติดต่อรถพยาบาลฉุกเฉินได้ตลอด 24 ชั่วโมง พร้อมทีมแพทย์และพยาบาลมืออาชีพ"
  },
  {
    icon: Stethoscope,
    title: "รับ-ส่ง ผู้ป่วยตามแพทย์นัด",
    description: "บริการรับ-ส่งผู้ป่วยบาดเจ็บตามแพทย์นัดทั้งในกรุงเทพและต่างจังหวัด"
  },
  {
    icon: Heart,
    title: "จุดปฐมพยาบาล (FIRST AID)",
    description: "บริการจุดปฐมพยาบาลสำหรับกิจกรรมต่างๆ เพื่อความปลอดภัยและความรวดเร็วในการรักษา"
  },
  {
    icon: Users,
    title: "รับ-ส่ง ผู้ป่วยทำธุรกรรม/ท่องเที่ยว",
    description: "บริการรับ-ส่งผู้ป่วยไปทำธุรกรรมต่างๆ พาผู้ป่วยไปพักผ่อนหรือท่องเที่ยวตามสถานที่ต่างๆ"
  },
  {
    icon: Shield,
    title: "ดูแลความปลอดภัยตามทัวร์",
    description: "บริการรถพยาบาลดูแลความปลอดภัยตามคณะทัวร์ พร้อมทีมเจ้าหน้าที่มืออาชีพ"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/15 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Speed Lines */}
      <div className="speed-line absolute top-1/4 left-0 w-full opacity-10"></div>
      <div className="speed-line absolute bottom-1/3 left-0 w-full opacity-10" style={{ animationDelay: '1s' }}></div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-block relative">
            <div className="absolute -inset-2 bg-primary/20 blur-2xl rounded-full"></div>
            <div className="relative">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
                <div className="h-1 w-1 bg-primary rounded-full animate-pulse"></div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient-red tracking-tight">
                บริการของเรา
              </h2>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            ครบครันด้วยบริการรถพยาบาลมืออาชีพ เพื่อความปลอดภัยและความสบายใจของคุณ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative p-8 glass-card futuristic-border hover:border-primary/50 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-primary/30">
                    <service.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(205,28,24,0.6)]" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;