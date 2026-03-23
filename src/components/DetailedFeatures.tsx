import { ArrowRight, Check } from "lucide-react";

const blocks = [
  {
    id: "platform",
    label: "Platform",
    title: "A unified platform for modern development",
    description:
      "OHH My Hindusthan aggregates, orchestrates, and automates your entire development pipeline — from code to production. Our intelligent engine adapts to your team's workflow.",
    bullets: [
      "AI-powered workflow automation",
      "Customizable pipelines and environments",
      "Cross-platform synchronization",
    ],
    cta: "Explore the platform",
    visual: (
      <div className="space-y-4 w-full">
        <div className="flex gap-4">
          <div className="flex-1 h-32 rounded-lg bg-primary/[0.08] border border-primary/10" />
          <div className="flex-1 h-32 rounded-lg bg-muted" />
        </div>
        <div className="h-16 rounded-lg bg-primary/[0.05] border border-primary/15" />
        <div className="flex gap-4">
          <div className="flex-1 h-10 rounded-md bg-muted" />
          <div className="flex-1 h-10 rounded-md bg-muted" />
          <div className="flex-1 h-10 rounded-md bg-muted" />
        </div>
      </div>
    ),
  },
  {
    id: "resources",
    label: "Resources",
    title: "Developer-first documentation and tooling",
    description:
      "Comprehensive APIs, SDKs, and guides built by engineers, for engineers. Get started in minutes with our interactive tutorials and code samples.",
    bullets: [
      "Interactive API playground",
      "Auto-generated SDK libraries",
      "Community-driven knowledge base",
    ],
    cta: "View documentation",
    visual: (
      <div className="space-y-4 w-full">
        <div className="h-8 bg-primary/15 rounded-md w-2/3" />
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-5/6" />
          <div className="h-4 bg-muted rounded w-4/5" />
        </div>
        <div className="h-28 rounded-lg bg-foreground/[0.04] border border-border p-4">
          <div className="space-y-2">
            <div className="h-3 bg-primary/20 rounded w-48" />
            <div className="h-3 bg-muted rounded w-36" />
            <div className="h-3 bg-muted rounded w-52" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "about",
    label: "About",
    title: "Built by experts, trusted by millions",
    description:
      "Our engineering team spans 30+ countries, building infrastructure that serves billions of requests daily. We combine deep expertise with relentless focus on reliability.",
    bullets: [
      "99.99% uptime guarantee",
      "24/7 dedicated support",
      "Enterprise SLA with priority response",
    ],
    cta: "Learn about us",
    visual: (
      <div className="space-y-4 w-full">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-lg bg-primary/[0.06]">
            <div className="text-2xl font-extrabold text-primary">10M+</div>
            <div className="text-xs text-muted-foreground mt-1">Developers</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted">
            <div className="text-2xl font-extrabold text-foreground">190+</div>
            <div className="text-xs text-muted-foreground mt-1">Countries</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted">
            <div className="text-2xl font-extrabold text-foreground">99.99%</div>
            <div className="text-xs text-muted-foreground mt-1">Uptime</div>
          </div>
        </div>
        <div className="h-24 rounded-lg bg-gradient-to-br from-primary/[0.08] to-primary/[0.03]" />
      </div>
    ),
  },
];

const DetailedFeatures = () => {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container space-y-28 md:space-y-36">
        {blocks.map((block, i) => {
          const reversed = i % 2 !== 0;
          return (
            <div
              key={block.id}
              id={block.id}
              className={`animate-on-scroll flex flex-col ${
                reversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12 lg:gap-20`}
            >
              <div className="flex-1 space-y-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {block.label}
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                  {block.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {block.description}
                </p>
                <ul className="space-y-3">
                  {block.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={`#${block.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 pt-2"
                >
                  {block.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="flex-1 w-full">
                <div className="rounded-2xl bg-surface-elevated shadow-xl border border-border p-8 aspect-[4/3] flex items-center justify-center">
                  {block.visual}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DetailedFeatures;
