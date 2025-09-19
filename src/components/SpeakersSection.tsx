import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";

const SpeakersSection = () => {
  const speakers = [
    {
      image: speaker1,
      name: "Анна Белова",
      title: "CEO & Founder",
      company: "Premium Consulting Group",
      description: "10+ лет в бизнесе, построила компанию с оборотом 50+ млн рублей. Эксперт по стратегическому планированию и масштабированию.",
      achievements: ["Forbes Under 30", "Выручка 50+ млн", "200+ клиентов"]
    },
    {
      image: speaker2,
      name: "Мария Золотова",
      title: "Business Coach & Mentor",
      company: "Executive Leadership",
      description: "Бизнес-коуч международного уровня, помогла 500+ предпринимательниц увеличить прибыль в 2-5 раз.",
      achievements: ["ICF Certified", "500+ менти", "Международный опыт"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-premium font-bold mb-6">
            <span className="text-gold-gradient">Эксперты мастермайнда</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-modern leading-relaxed">
            Встречайте женщин, которые уже прошли путь от стартапа до масштабного бизнеса 
            и готовы поделиться своим опытом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="card-premium p-8 text-center group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gold/20 group-hover:border-gold/40 transition-colors relative">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <h3 className="text-2xl font-premium font-bold mb-2 text-foreground">
                {speaker.name}
              </h3>
              
              <div className="mb-4">
                <p className="text-gold font-modern font-semibold">
                  {speaker.title}
                </p>
                <p className="text-muted-foreground font-modern">
                  {speaker.company}
                </p>
              </div>

              <p className="text-muted-foreground font-modern leading-relaxed mb-6">
                {speaker.description}
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {speaker.achievements.map((achievement, achievementIndex) => (
                  <span 
                    key={achievementIndex}
                    className="px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold font-modern text-sm font-medium"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-premium p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-premium font-semibold mb-4 text-gold-gradient">
              + Специальные гости
            </h3>
            <p className="text-muted-foreground font-modern leading-relaxed">
              В программе также примут участие успешные предпринимательницы из нашего сообщества, 
              которые поделятся своими кейсами и инсайтами
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;