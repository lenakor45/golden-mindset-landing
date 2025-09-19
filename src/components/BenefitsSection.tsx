import { Brain, HeartHandshake, Zap, Shield } from "lucide-react";
const BenefitsSection = () => {
  const benefits = [{
    icon: Brain,
    title: "Стратегические инсайты",
    description: "Получите свежие идеи и подходы к развитию бизнеса от экспертов и участниц с разным опытом"
  }, {
    icon: HeartHandshake,
    title: "Премиальное окружение",
    description: "Войдите в круг успешных предпринимательниц, которые думают масштабно и действуют решительно"
  }, {
    icon: Zap,
    title: "Мощная поддержка",
    description: "Получите менторинг, обратную связь и энергию от сообщества единомышленниц"
  }, {
    icon: Shield,
    title: "Долгосрочные связи",
    description: "Постройте прочные деловые отношения, которые будут помогать вам годами"
  }];
  return <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-premium font-bold mb-6">
            <span className="text-gold-gradient">Что вы получите</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-modern leading-relaxed">
            Инвестиции в себя и свой бизнес, которые окупятся многократно через новые возможности и связи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="card-premium p-8 group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors relative">
                    <benefit.icon className="w-8 h-8 text-gold" />
                    <div className="absolute inset-0 rounded-full bg-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-premium font-semibold mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-modern leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>

        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>;
};
export default BenefitsSection;