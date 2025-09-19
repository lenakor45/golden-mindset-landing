import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

const FinalSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="gold-shine mb-8">
          <h2 className="text-5xl md:text-7xl font-premium font-bold leading-tight">
            <span className="heading-luxury">Твое время</span>
            <br />
            <span className="text-foreground">играть по-крупному</span>
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-modern leading-relaxed">
          Перестань мечтать о масштабном бизнесе. Пришло время его создавать.
        </p>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card-premium p-6 group hover:scale-105 transition-all duration-300">
            <Calendar className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="font-premium font-semibold text-foreground mb-2">Дата</h3>
            <p className="text-muted-foreground font-modern">15 декабря 2024</p>
            <p className="text-sm text-muted-foreground font-modern">10:00 - 17:00</p>
          </div>

          <div className="card-premium p-6 group hover:scale-105 transition-all duration-300">
            <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="font-premium font-semibold text-foreground mb-2">Место</h3>
            <p className="text-muted-foreground font-modern">Москва</p>
            <p className="text-sm text-muted-foreground font-modern">Премиальный лофт в центре</p>
          </div>

          <div className="card-premium p-6 group hover:scale-105 transition-all duration-300">
            <Users className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="font-premium font-semibold text-foreground mb-2">Участники</h3>
            <p className="text-muted-foreground font-modern">До 25 человек</p>
            <p className="text-sm text-muted-foreground font-modern">Камерная атмосфера</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="gold" 
            size="lg" 
            className="text-lg px-12 py-6 h-auto font-modern font-semibold tracking-wide group"
          >
            Забронировать место
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="goldOutline" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto font-modern font-semibold"
          >
            Узнать подробности
          </Button>
        </div>

        {/* Final Message */}
        <div className="card-premium p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-premium font-semibold mb-4 text-gold-gradient">
            Количество мест ограничено
          </h3>
          <p className="text-muted-foreground font-modern leading-relaxed text-lg mb-6">
            Мы создаем эксклюзивную среду для глубокого взаимодействия. 
            Бронируйте место сейчас, чтобы гарантированно попасть в круг 
            амбициозных предпринимательниц.
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground font-modern">
            <span>🔒 Безопасная оплата</span>
            <span>📱 Поддержка 24/7</span>
            <span>💎 Премиум-качество</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;