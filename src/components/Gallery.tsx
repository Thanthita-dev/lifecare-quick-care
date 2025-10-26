import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ambulance1 from "@/assets/ambulance-1.jpg";
import ambulance2 from "@/assets/ambulance-2.jpg";
import ambulance3 from "@/assets/LINE_ALBUM_221068_251026_1.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import interior4 from "@/assets/interior-4.jpg";
import exterior1 from "@/assets/exterior-1.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const images = [
  { src: ambulance1, alt: "รถพยาบาล LifeCare" },
  { src: ambulance2, alt: "ทีมแพทย์และพยาบาล" },
  { src: ambulance3, alt: "ภายในรถพยาบาล" }
];

const galleryImages = [
  { src: exterior1, alt: "รถพยาบาล LifeCare ด้านนอก" },
  { src: interior1, alt: "ภายในรถพยาบาล - เตียงผู้ป่วยและอุปกรณ์" },
  { src: interior2, alt: "ภายในรถพยาบาล - มุมกว้าง" },
  { src: interior3, alt: "ภายในรถพยาบาล - อุปกรณ์ทางการแพทย์" },
  { src: interior4, alt: "ภายในรถพยาบาล - พื้นที่บริการ" },
  { src: ambulance1, alt: "รถพยาบาล LifeCare" },
  { src: ambulance2, alt: "ทีมแพทย์และพยาบาล" },
  { src: ambulance3, alt: "อุปกรณ์ภายในรถพยาบาล" }
];

const workImages = [
  { src: work1, alt: "ทีมงานกำลังเคลื่อนย้ายผู้ป่วยที่โรงพยาบาล" },
  { src: work2, alt: "พยาบาลมืออาชีพดูแลผู้ป่วยภายในรถพยาบาล" },
  { src: work3, alt: "ทีมงานฉุกเฉินให้ความช่วยเหลือผู้ป่วย" }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            แกลเลอรี่
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            รถพยาบาลและทีมงานมืออาชีพของเรา
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative group">
          {/* Main Image */}
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Work Atmosphere Section */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ภาพบรรยากาศการทำงาน
            </h3>
            <p className="text-lg text-muted-foreground">
              ทีมงานมืออาชีพพร้อมให้บริการตลอด 24 ชั่วโมง
            </p>
          </div>
          <div className="relative max-w-6xl mx-auto overflow-hidden">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                {workImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-96 aspect-[4/3] flex-shrink-0 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-base text-card-foreground font-semibold">
                        {image.alt}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      LifeCare
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-4 text-sm text-muted-foreground">
              เลื่อนดูรูปเพิ่มเติม →
            </div>
          </div>
        </div>

        {/* Grid Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            ภาพบรรยากาศรถพยาบาล
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm text-card-foreground font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
