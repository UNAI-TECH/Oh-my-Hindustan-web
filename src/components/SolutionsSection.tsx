import { Code2, Briefcase, Cloud, LineChart } from "lucide-react";

const solutions = [
  {
    icon: Code2,
    title: "Developer Tools",
    description: "Powerful CLIs, SDKs, and APIs designed for developer productivity.",
  },
  {
    icon: Briefcase,
    title: "Business Solutions",
    description: "Enterprise-grade tools for team collaboration and project management.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless multi-cloud deployment with AWS, GCP, and Azure support.",
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    description: "Real-time monitoring, custom dashboards, and performance analytics.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Solutions</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Built for every use case
          </h2>
          <p className="text-muted-foreground text-lg">
            From solo developers to enterprise teams, OHH My Hindusthan adapts to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, i) => (
            <div
              key={sol.title}
              className={`animate-on-scroll delay-${(i % 4) + 1} group bg-surface-elevated rounded-xl border border-border p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/30 cursor-pointer`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <sol.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{sol.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{sol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
