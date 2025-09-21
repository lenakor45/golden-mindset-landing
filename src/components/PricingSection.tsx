import { Button } from "@/components/ui/button";
import { Check, Crown, Gift } from "lucide-react";
const PricingSection = () => {
  const pricingOption = {
    name: "Участие в мастермайнде",
    price: "3 500",
    originalPrice: "5 500",
    features: ["Участие в полной программе мастермайнда", "Материалы и презентации всех модераторов", "Кофе-брейки и обед премиум-класса", "Доступ в чат поддержки на 30 дней", "Сертификат участника", "Нетворкинг с участницами", "Фото с мероприятия"]
  };
  return <section className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-premium font-bold mb-6">
            <span className="text-gold-gradient">Инвестиция в ваше будущее</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-modern leading-relaxed">
            Выберите формат участия, который подходит именно вам
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="card-premium p-8 relative group hover:scale-[1.02] transition-all duration-300 border-2 border-gold/30">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-premium font-bold mb-4 text-foreground">
                {pricingOption.name}
              </h3>
              
              <div className="mb-2">
                <span className="text-lg text-muted-foreground line-through font-modern">
                  {pricingOption.originalPrice} ₽
                </span>
              </div>
              
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-premium font-bold text-gold-gradient">
                  {pricingOption.price}
                </span>
                <span className="text-lg text-muted-foreground font-modern">₽</span>
              </div>
              
              <p className="text-sm text-muted-foreground mt-2 font-modern">
                Раннее бронирование до 30 ноября
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {pricingOption.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                  </div>
                  <span className="text-muted-foreground font-modern leading-relaxed">
                    {feature}
                  </span>
                </div>)}
            </div>

            <Button variant="gold" className="w-full font-modern font-semibold text-lg py-6 h-auto">
              Купить билет
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>;
};
export default PricingSection;