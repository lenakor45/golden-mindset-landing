import { Clock, MessageCircle, Lightbulb, Network, Users, Camera } from "lucide-react";

const ProgramSection = () => {
  const programBlocks = [
    {
      icon: Lightbulb,
      time: "25 минут",
      title: "Вступительная часть",
      description: "Представление сообщества, результаты за год и структура мероприятия ББММ от модераторов"
    },
    {
      icon: MessageCircle,
      time: "2 часа 10 минут",
      title: "Работа за столами",
      description: "3 круга работы: самопрезентация (1 мин/чел), отработка запросов (10 мин/чел) и секретный круг"
    },
    {
      icon: Network,
      time: "1 час",
      title: "Нетворкинг и фуршет",
      description: "Свободное общение, фуршет с игристым и ярмарка товаров от партнеров"
    },
    {
      icon: Camera,
      time: "25 минут",
      title: "Интервью и фото",
      description: "Интервью о впечатлениях и общее фото всех участников"
    }
  ];

  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-premium font-bold mb-6">
            <span className="text-gold-gradient">Формат и программа</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-modern leading-relaxed">
            5 столов по 10 участников + 5 модераторов = 55 человек. 
            Камерная атмосфера для глубокой проработки бизнес-вопросов
          </p>
        </div>

        <div className="space-y-8">
          {programBlocks.map((block, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 card-premium p-8 group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <block.icon className="w-8 h-8 text-gold" />
                </div>
              </div>
              
              <div className="flex-1 space-y-3">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-gold font-modern font-semibold">
                    {block.time}
                  </span>
                  <h3 className="text-2xl font-premium font-semibold text-foreground">
                    {block.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground font-modern leading-relaxed text-lg">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/20 rounded-full">
            <Clock className="w-5 h-5 text-gold" />
            <span className="text-gold font-modern font-semibold">
              Продолжительность: 4 часа интенсивной работы
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;