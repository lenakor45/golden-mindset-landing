import { CheckCircle2 } from "lucide-react";

const TargetAudienceSection = () => {
  const criteria = [
    "Вы женщина-эксперт с собственным бизнесом от 1 года",
    "Ваш бизнес приносит стабильный доход от 300 тыс. рублей в месяц",
    "Вы готовы инвестировать в свое развитие и рост бизнеса", 
    "У вас есть четкое желание масштабироваться и выйти на новый уровень",
    "Вы цените качественное окружение и готовы делиться опытом",
    "Вы открыты к новым идеям и готовы внедрять изменения",
    "Вы хотите быть частью сильного женского бизнес-сообщества"
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-premium font-bold mb-6">
            <span className="text-gold-gradient">Этот мастермайнд для вас, если...</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-modern leading-relaxed">
            Мы создаем сообщество для амбициозных женщин, которые готовы играть по-крупному
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {criteria.map((criterion, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 card-premium group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                </div>
              </div>
              
              <p className="text-foreground font-modern leading-relaxed">
                {criterion}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-premium p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-premium font-semibold mb-4 text-gold-gradient">
              Важно понимать
            </h3>
            <p className="text-muted-foreground font-modern leading-relaxed text-lg">
              Это не мастермайнд для новичков. Мы работаем с женщинами, которые уже достигли 
              определенного уровня в бизнесе и готовы инвестировать в качественный рост 
              и премиальное окружение.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;