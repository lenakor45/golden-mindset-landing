import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
const SpeakersSection = () => {
  const speakers = [
    {
      image: speaker1,
      name: "Анна Белова",
      title: "CEO & Founder",
      company: "Premium Consulting Group",
      description:
        "10+ лет в бизнесе, построила компанию с оборотом 50+ млн рублей. Эксперт по стратегическому планированию и масштабированию.",
      achievements: ["Forbes Under 30", "Выручка 50+ млн", "200+ клиентов"],
    },
    {
      image: speaker2,
      name: "Мария Золотова",
      title: "Business Coach & Mentor",
      company: "Executive Leadership",
      description:
        "Бизнес-коуч международного уровня, помогла 500+ предпринимательниц увеличить прибыль в 2-5 раз.",
      achievements: ["ICF Certified", "500+ менти", "Международный опыт"],
    },
  ];

  return (
    <section id="speakers" aria-labelledby="speakers-heading" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <header className="mb-10 text-center">
          <h2 id="speakers-heading" className="text-3xl font-bold tracking-tight text-foreground">
            Спикеры
          </h2>
          <p className="mt-2 text-muted-foreground">Лучшие эксперты делятся опытом</p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          {speakers.map((s, idx) => (
            <article
              key={idx}
              className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={`Спикер: ${s.name}, ${s.title} — ${s.company}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{s.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {s.title} · {s.company}
                </p>
                <p className="mt-3 text-sm">{s.description}</p>
                {s.achievements?.length ? (
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Достижения">
                    {s.achievements.map((a, i) => (
                      <li key={i} className="text-xs rounded-full bg-muted px-2 py-1 text-muted-foreground">
                        {a}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SpeakersSection;