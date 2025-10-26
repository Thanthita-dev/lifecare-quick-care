import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ChevronLeft, ChevronRight, Facebook } from "lucide-react";
import logo from "@/assets/logo2.png";
import heroBg from "@/assets/hero-bg.jpg";
import ambulance1 from "@/assets/ambulance-1.jpg";
import ambulance2 from "@/assets/work-1.jpg";
import ambulance3 from "@/assets/interior-1.jpg";

const backgroundImages = [heroBg, ambulance1, ambulance2, ambulance3];

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const nextSlide = () => {
    setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentBgIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 gradient-red-radial"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/15 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Speed Lines */}
      <div className="speed-line absolute top-1/4 left-0 w-full opacity-30" style={{ animationDelay: '0s' }}></div>
      <div className="speed-line absolute top-1/2 left-0 w-full opacity-20" style={{ animationDelay: '0.5s' }}></div>
      <div className="speed-line absolute top-3/4 left-0 w-full opacity-25" style={{ animationDelay: '1s' }}></div>
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 hero-overlay" />
          </div>
        ))}
        
        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 glass-card text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:border-primary shadow-red-glow"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 glass-card text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:border-primary shadow-red-glow"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBgIndex(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentBgIndex 
                  ? "bg-primary w-12 shadow-red-glow" 
                  : "bg-white/30 hover:bg-primary/50 w-8"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="flex flex-col items-center text-center animate-fade-in max-w-7xl mx-auto">
          {/* Logo with Premium Effect */}
          <div className="mb-12 w-40 h-40 md:w-48 md:h-48 relative animate-float">
            <img 
              src={logo} 
              alt="LifeCare Ambulance Logo" 
              className="relative w-full h-full object-contain hover:scale-110 transition-transform duration-700 filter drop-shadow-[0_0_30px_rgba(205,28,24,0.6)]"
            />
          </div>

          {/* Headline with Premium Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight">
            <span className="text-white drop-shadow-2xl block mb-2">LIFECARE</span>
            <span className="relative inline-block ambulance-glow">
              <span className="ambulance-3d block" style={{ 
                WebkitTextStroke: '2px rgba(205, 28, 24, 0.3)',
                paintOrder: 'stroke fill'
              }}>
                AMBULANCE
              </span>
              <span className="heartbeat-line"></span>
            </span>
          </h1>
          
          <div className="relative mb-4">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full"></div>
            <p className="relative text-2xl md:text-3xl lg:text-4xl text-white/95 font-bold max-w-4xl">
              ศูนย์รถพยาบาลเอกชนเคลื่อนย้ายผู้ป่วย
            </p>
          </div>
          
          <div className="flex items-center gap-3 mb-16">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <p className="text-lg md:text-xl text-metallic-light/90 font-light tracking-wide">
              บริการด้วยใจ ดูแลด้วยมืออาชีพ พร้อมให้บริการ 24 ชั่วโมง
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>

          {/* Contact Channels - Modern Minimal Design */}
          <div className="w-full max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              {/* Phone */}
              <a 
                href="tel:0952961669"
                className="group relative w-full md:w-auto flex items-center gap-4 px-8 py-5 bg-primary/10 hover:bg-primary/20 backdrop-blur-md border border-primary/30 hover:border-primary rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-primary" strokeWidth={2.5} />
                </div>
                <div className="text-left flex-1">
                  <p className="text-white/60 text-xs font-medium mb-1">โทรเลย</p>
                  <p className="text-white font-bold text-xl tracking-wide">095-296-1669</p>
                </div>
              </a>

              {/* Line */}
              <a 
                href="https://line.me/ti/p/dQq-PZyVWY"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full md:w-auto flex items-center gap-4 px-8 py-5 bg-green-500/10 hover:bg-green-500/20 backdrop-blur-md border border-green-500/30 hover:border-green-500 rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <p className="text-white/60 text-xs font-medium mb-1">แชทได้เลย</p>
                  <p className="text-green-500 font-bold text-xl">Line Official</p>
                </div>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/1EzV1o7C6o/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full md:w-auto flex items-center gap-4 px-8 py-5 bg-blue-500/10 hover:bg-blue-500/20 backdrop-blur-md border border-blue-500/30 hover:border-blue-500 rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Facebook className="w-6 h-6 text-blue-500" strokeWidth={2.5} />
                </div>
                <div className="text-left flex-1">
                  <p className="text-white/60 text-xs font-medium mb-1">ติดตามเรา</p>
                  <p className="text-blue-500 font-bold text-xl">Facebook</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;