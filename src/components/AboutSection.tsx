import { Sparkles, Target, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Стратегическое мышление",
      description: "Развиваем навыки построения долгосрочной стратегии бизнеса"
    },
    {
      icon: Users,
      title: "Премиальное окружение",
      description: "Знакомство с единомышленницами вашего уровня"
    },
    {
      icon: TrendingUp,
      title: "Масштабирование",
      description: "Практические инструменты для роста вашего бизнеса"
    },
    {
      icon: Sparkles,
      title: "Личностный рост",
      description: "Работа над внутренними барьерами и ограничениями"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-premium font-bold mb-6">
            <span className="text-gold-gradient">О мероприятии</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-modern leading-relaxed">
            Мастермайнд для амбициозных женщин, которые готовы вывести свой бизнес 
            на новый уровень через стратегическое мышление и поддержку сильного сообщества.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-premium p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <h3 className="text-xl font-premium font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground font-modern leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;