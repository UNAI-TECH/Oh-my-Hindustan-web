import { Zap, Shield, BarChart3, Globe, Layers, Settings } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Sub-millisecond response times with intelligent caching and edge distribution worldwide.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption, SSO, and granular access controls.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time dashboards and AI-driven insights to power data-informed decisions.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Deploy across 190+ edge locations with automatic failover and 99.99% SLA.",
  },
  {
    icon: Layers,
    title: "Seamless Integrations",
    description: "Connect with 200+ tools including CI/CD, monitoring, and collaboration platforms.",
  },
  {
    icon: Settings,
    title: "Full Customization",
    description: "Flexible APIs and SDKs that adapt to your workflow — not the other way around.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Everything you need to ship faster
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive platform built for speed, reliability, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`animate-on-scroll delay-${(i % 3) + 1} group bg-surface-elevated rounded-xl border border-border p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
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
