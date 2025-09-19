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
  return;
};
export default SpeakersSection;