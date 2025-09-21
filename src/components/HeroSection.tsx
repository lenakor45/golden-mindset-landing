import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mastermind.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Women's Business Mastermind"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'var(--gradient-black-gold)'
          }}
        ></div>
      </div>

      {/* Golden Particles Effect */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-light rounded-full animate-pulse opacity-40 delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-gold/50 rounded-full animate-pulse opacity-30 delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-gold-dark rounded-full animate-pulse opacity-50 delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        <div className="gold-shine">
          <h1 className="text-5xl md:text-7xl font-premium font-bold mb-6 leading-tight">
            <span className="heading-luxury">Большой бизнес</span>
            <br />
            <span className="text-foreground">мастермайнд</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-modern leading-relaxed">
          Сообщество "Код Публичности" г. Оренбург
        </p>

        <Button 
          variant="gold" 
          size="lg" 
          className="text-lg px-12 py-6 h-auto font-modern font-semibold tracking-wide"
          onClick={() => {
            const pricingSection = document.getElementById('PricingBox');
            pricingSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Купить билет
        </Button>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 border border-gold/20 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 border border-gold/10 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
