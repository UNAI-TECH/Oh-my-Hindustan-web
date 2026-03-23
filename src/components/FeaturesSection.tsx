import { Zap, Shield, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Get breaking news and insights delivered instantly with our lightning-fast content pipeline.",
  },
  {
    icon: Shield,
    title: "Verified Sources",
    description: "Every piece of content is vetted through our rigorous multi-layer verification process.",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Understand trends with powerful data visualizations and AI-driven analysis tools.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Access information from 190+ countries with localized translations and context.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-surface">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Everything you need, nothing you don't
          </h2>
          <p className="text-muted-foreground text-lg">
            Built for professionals who demand accuracy, speed, and clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-surface-elevated rounded-xl border border-border p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
