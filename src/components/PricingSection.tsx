import { Button } from "@/components/ui/button";
import { Check, Crown, Gift } from "lucide-react";

const PricingSection = () => {
  const pricingOptions = [
    {
      name: "Стандарт",
      price: "45 000",
      originalPrice: "60 000",
      features: [
        "Участие в полной программе мастермайнда",
        "Материалы и презентации всех спикеров",
        "Кофе-брейки и обед премиум-класса",
        "Доступ в чат поддержки на 30 дней",
        "Сертификат участника"
      ],
      isPopular: false
    },
    {
      name: "VIP",
      price: "75 000",
      originalPrice: "95 000",
      features: [
        "Все преимущества тарифа Стандарт",
        "Приоритетные места в первых рядах",
        "Индивидуальная 30-минутная консультация",
        "Доступ в чат поддержки на 90 дней",
        "Приглашение на закрытый ужин с экспертами",
        "Эксклюзивные бонусные материалы"
      ],
      isPopular: true
    }
  ];

  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-premium font-bold mb-6">
            <span className="text-gold-gradient">Инвестиция в ваше будущее</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-modern leading-relaxed">
            Выберите формат участия, который подходит именно вам
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div 
              key={index}
              className={`card-premium p-8 relative group hover:scale-[1.02] transition-all duration-300 ${
                option.isPopular ? 'border-2 border-gold/30' : ''
              }`}
            >
              {option.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold text-primary-foreground px-6 py-2 rounded-full flex items-center gap-2 font-modern font-semibold">
                    <Crown className="w-4 h-4" />
                    Рекомендуем
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-premium font-bold mb-4 text-foreground">
                  {option.name}
                </h3>
                
                <div className="mb-2">
                  <span className="text-lg text-muted-foreground line-through font-modern">
                    {option.originalPrice} ₽
                  </span>
                </div>
                
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-premium font-bold text-gold-gradient">
                    {option.price}
                  </span>
                  <span className="text-lg text-muted-foreground font-modern">₽</span>
                </div>
                
                <p className="text-sm text-muted-foreground mt-2 font-modern">
                  Раннее бронирование до 30 ноября
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {option.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                    </div>
                    <span className="text-muted-foreground font-modern leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                variant={option.isPopular ? "gold" : "goldOutline"}
                className="w-full font-modern font-semibold text-lg py-6 h-auto"
              >
                {option.isPopular ? "Забронировать VIP" : "Выбрать стандарт"}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-premium p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="w-6 h-6 text-gold" />
              <h3 className="text-2xl font-premium font-semibold text-gold-gradient">
                Бонус при оплате до 25 ноября
              </h3>
            </div>
            <p className="text-muted-foreground font-modern leading-relaxed text-lg">
              Дополнительная скидка 10% + эксклюзивная консультация с одним из экспертов в подарок
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;