import { User } from "lucide-react";
import กิจกรรม1 from "@/assets/กิจกรรม1.jpg";
import กิจกรรม2 from "@/assets/กิจกรรม2.jpg";
import กิจกรรม3 from "@/assets/กิจกรรม3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "รถพยาบาล Lifecare Am.1 บริการจุดปฐมพยาบาล งานกีฬาสีประจำปีของบริษัท",
    excerpt: "รถพยาบาล Lifecare Am.1 พร้อมให้บริการจุดปฐมพยาบาลในงานกีฬาสีประจำปีของบริษัท",
    // date: "15 มกราคม 2025",
    author: "ทีมงาน LifeCare",
    image: กิจกรรม1,
  },
  {
    id: 2,
    title: "งานสังสรรค์ประจำปีของบริษัทอัมรินทร์",
    excerpt: "รถพยาบาล Lifecare ให้บริการจุดปฐมพยาบาลในงานสังสรรค์ประจำปีของบริษัทอัมรินทร์",
    // date: "10 มกราคม 2025",
    author: "ทีมงาน LifeCare",
    image: กิจกรรม2,
  },
  {
    id: 3,
    title: "สนับสนุนทีม S2G Ambulance เข้าร่วม Standby ปฐมพยาบาล",
    excerpt: "LifeCare ร่วมสนับสนุนทีม S2G Ambulance เข้าร่วม Standby ปฐมพยาบาลในกิจกรรมต่างๆ",
    // date: "5 มกราคม 2025",
    author: "ทีมงาน LifeCare",
    image: กิจกรรม3,
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block">
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-gold mx-auto mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-red">
              LIFECARE INSIGHT
            </h2>
          </div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            รวมเรื่องราว บทความ และประสบการณ์จากภาคสนามของทีม Lifecare Ambulance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-premium border-2 border-border/50 hover:border-primary/30 card-elevated animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent z-10"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed text-lg">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    {/* <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <span>{post.date}</span> */}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-gold/10 rounded-lg">
                      <User className="w-4 h-4 text-gold" />
                    </div>
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;