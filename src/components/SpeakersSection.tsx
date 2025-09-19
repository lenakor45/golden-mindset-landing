import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
const SpeakersSection = () => {
  const speakers = [{
    image: speaker1,
    name: "Анна Белова",
    title: "CEO & Founder",
    company: "Premium Consulting Group",
    description: "10+ лет в бизнесе, построила компанию с оборотом 50+ млн рублей. Эксперт по стратегическому планированию и масштабированию.",
    achievements: ["Forbes Under 30", "Выручка 50+ млн", "200+ клиентов"]
  }, {
    image: speaker2,
    name: "Мария Золотова",
    title: "Business Coach & Mentor",
    company: "Executive Leadership",
    description: "Бизнес-коуч международного уровня, помогла 500+ предпринимательниц увеличить прибыль в 2-5 раз.",
    achievements: ["ICF Certified", "500+ менти", "Международный опыт"]
  }];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Эксперты мастермайнда
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Познакомьтесь с организаторами — успешными предпринимательницами, 
            которые поделятся своим опытом и знаниями
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-accent/10 group-hover:to-accent/20 transition-all duration-300"></div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-accent font-medium">
                    {speaker.title}
                  </p>
                  <p className="text-muted-foreground">
                    {speaker.company}
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                  {speaker.description}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {speaker.achievements.map((achievement, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SpeakersSection;