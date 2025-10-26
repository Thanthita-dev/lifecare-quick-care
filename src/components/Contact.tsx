import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, MapPin, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-block">
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-gold mx-auto mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-red">
              ติดต่อเรา
            </h2>
          </div>
          <p className="text-2xl text-muted-foreground font-light">
            พร้อมให้บริการคุณตลอด 24 ชั่วโมง ทุกวัน
          </p>
        </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information Cards */}
            <div className="space-y-6 animate-slide-up">
              <div className="group bg-card p-8 rounded-2xl shadow-premium border-2 border-border/50 hover:border-primary/30 card-elevated">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Phone className="w-8 h-8 text-primary" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">โทรศัพท์</h3>
                    <a
                      href="tel:0952961669"
                      className="text-3xl font-bold text-primary hover:text-primary-hover transition-colors block mb-2"
                    >
                      095-296-1669
                    </a>
                    <p className="text-muted-foreground">ติดต่อคุณแฟร์</p>
                  </div>
                </div>
              </div>

              <div className="group bg-card p-8 rounded-2xl shadow-premium border-2 border-border/50 hover:border-green-500/30 card-elevated">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <MessageCircle className="w-8 h-8 text-green-600" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3 group-hover:text-green-600 transition-colors">Line Official</h3>
                    <a
                      href="https://line.me/ti/p/dQq-PZyVWY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline text-xl font-semibold block mb-2"
                    >
                      เพิ่มเพื่อน Line
                    </a>
                    <p className="text-muted-foreground">สอบถามหรือเรียกรถฉุกเฉิน</p>
                  </div>
                </div>
              </div>

              <div className="group bg-card p-8 rounded-2xl shadow-premium border-2 border-border/50 hover:border-gold/30 card-elevated">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Clock className="w-8 h-8 text-gold" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3 group-hover:text-gold transition-colors">เวลาทำการ</h3>
                    <p className="text-xl font-semibold text-foreground mb-2">เปิดบริการ 24 ชั่วโมง</p>
                    <p className="text-muted-foreground">ทุกวัน ไม่มีวันหยุด</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="relative overflow-hidden rounded-3xl p-10 shadow-premium border-2 border-primary/20 gradient-red">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3 text-white">ติดต่อด่วน</h3>
                  <p className="mb-8 text-white/90 text-lg">เลือกช่องทางที่สะดวกสำหรับคุณ</p>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      variant="premium"
                      className="w-full text-lg bg-white text-primary hover:bg-white/90 hover:shadow-2xl border-2 border-white"
                      asChild
                    >
                      <a href="tel:0952961669" className="flex items-center justify-center gap-3">
                        <Phone className="w-6 h-6" />
                        <span className="font-bold text-white">โทรเลย 095-296-1669</span>
                      </a>
                    </Button>

                    <Button
                      size="lg"
                      className="w-full text-lg bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a
                        href="https://line.me/ti/p/dQq-PZyVWY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3"
                      >
                        <MessageCircle className="w-6 h-6" />
                        <span className="font-bold">แชท Line</span>
                      </a>
                    </Button>

                    <Button
                      size="lg"
                      className="w-full text-lg bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a
                        href="https://www.facebook.com/Banchimpee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3"
                      >
                        <Facebook className="w-6 h-6" />
                        <span className="font-bold">Facebook</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group bg-card p-8 rounded-2xl shadow-premium border-2 border-border/50 hover:border-primary/30 card-elevated">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-8 h-8 text-primary" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">พื้นที่ให้บริการ</h3>
                    <p className="text-xl font-semibold text-foreground mb-2">ให้บริการทั่วประเทศไทย</p>
                    <p className="text-muted-foreground">รับ-ส่งผู้ป่วยระหว่างจังหวัด</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facebook Page Section */}
          <div className="mt-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-3">ติดตามเราบน Facebook</h3>
              <p className="text-muted-foreground text-lg">รับข่าวสารและโปรโมชั่นพิเศษ</p>
            </div>
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBanchimpee&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="600"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
            
            {/* Fallback Link */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                หากไม่แสดงเพจ Facebook กรุณาคลิกที่นี่
              </p>
              <a 
                href="https://www.facebook.com/Banchimpee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                เปิดเพจใน Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;