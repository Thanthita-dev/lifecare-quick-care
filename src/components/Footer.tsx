const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">
            LIFECARE AMBULANCE
          </h3>
          <p className="text-background/80 mb-4">
            ศูนย์รถพยาบาลเอกชนเคลื่อนย้ายผู้ป่วย 24 ชั่วโมง
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center text-sm text-background/70">
            <a href="tel:0952961669" className="hover:text-background transition-colors">
              โทร: 095-296-1669
            </a>
            <span className="hidden sm:inline">|</span>
            <a 
              href="https://line.me/ti/p/dQq-PZyVWY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-background transition-colors"
            >
              Line: @Karfair..
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-background/20">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} LifeCare Ambulance. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
