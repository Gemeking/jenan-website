import RevealOnScroll from "@/components/ui/RevealOnScroll";

const messages = [
  {
    oromo: "Dhukkuba kee otoo hin tursiifatin yaalami.",
    english: "Do not delay your treatment — early care saves lives.",
    source: "Gorsa Fayyaa",
  },
  {
    oromo: "Dhibeen hedduun dursanii yaalamnaan fayyuu danda'a. Sodaa tokko malee gara mana yaalaa keenya koottu.",
    english: "Most diseases can be cured when treated early. Come to us without fear.",
    source: "Yaadannoo Fayyaa",
  },
  {
    oromo: "Ijoollee fi haadhooliin fayyaan eeguun itti gaafatamummaa keenya. Tajaajila haadha fi daa'imaa kan qulqullina ol'aanaa qabu argachuuf nu bira koottu.",
    english: "Protecting the health of mothers and children is our responsibility. Visit us for premium maternal and paediatric care.",
    source: "Tajaajila Haadha fi Daa'imaa",
  },
  {
    oromo: "Kondomii fayyadami — dhibee HIV qofa osoo hintaane, dhibeewwan quunamtii saalaatiin daddarbaan hundaarra si ittisa.",
    english: "Use protection — it prevents not only HIV but all sexually transmitted diseases.",
    source: "Gorsa Fayyaa Ummataa",
  },
];

export default function HealthAwareness() {
  return (
    <section className="section-alt py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <RevealOnScroll className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="red-rule mb-4" />
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
                Gorsa Fayyaa<br />
                <span className="gradient-text-red text-3xl sm:text-4xl font-light">Health Awareness</span>
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Beekumsa fayyaa isiniif hiranna — sharing health knowledge with our community.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {messages.map(({ oromo, english, source }, i) => (
            <RevealOnScroll key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 60}>
              <div className="relative bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-[0_8px_36px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <p className="text-slate-400 text-sm font-black tracking-widest uppercase mb-3">{source}</p>

                <blockquote className="text-slate-900 text-base font-semibold leading-relaxed mb-3 italic">
                  &ldquo;{oromo}&rdquo;
                </blockquote>

                <p className="text-slate-500 text-sm leading-relaxed">{english}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom awareness strip */}
        <RevealOnScroll className="mt-8">
          <div className="bg-slate-900 text-white rounded-2xl px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-black text-lg">Fayyaan Qabeenya.</p>
              <p className="text-slate-400 text-sm">Health is Wealth — Yeroo dhukkubsattan, nu bira jirra. We are here when you need us.</p>
            </div>
            <a
              href="tel:+251911728000"
              className="shrink-0 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-black text-sm rounded-xl transition-colors"
            >
              +251 911 72 80 00
            </a>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
