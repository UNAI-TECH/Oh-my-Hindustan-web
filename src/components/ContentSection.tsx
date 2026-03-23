const ContentSection = () => {
  return (
    <section id="platform" className="py-24 md:py-32 bg-background">
      <div className="container space-y-24 md:space-y-32">
        {/* Block 1: Text Left, Visual Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Platform</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              A unified platform for modern information consumption
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              PulseHub aggregates, filters, and prioritizes content so you can focus on what matters most. Our intelligent engine learns your preferences and surfaces the stories that are relevant to you.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                AI-powered content curation
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                Customizable feeds and alerts
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                Cross-platform synchronization
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-2xl bg-surface shadow-xl border border-border p-8 aspect-[4/3] flex items-center justify-center">
              <div className="w-full space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1 h-28 rounded-lg bg-primary/10" />
                  <div className="flex-1 h-28 rounded-lg bg-muted" />
                </div>
                <div className="h-16 rounded-lg bg-primary/5 border border-primary/20" />
                <div className="flex gap-4">
                  <div className="flex-1 h-10 rounded-md bg-muted" />
                  <div className="flex-1 h-10 rounded-md bg-muted" />
                  <div className="flex-1 h-10 rounded-md bg-muted" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Visual Left, Text Right */}
        <div id="about" className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">About</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Built by experts, trusted by millions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our editorial team spans 50+ countries, delivering localized insights with global perspective. We combine human expertise with AI precision for unparalleled accuracy.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <div className="text-3xl font-extrabold text-primary">10M+</div>
                <div className="text-sm text-muted-foreground">Monthly readers</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">190+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-2xl bg-surface shadow-xl border border-border p-8 aspect-[4/3] flex items-center justify-center">
              <div className="w-full space-y-4">
                <div className="h-8 bg-primary/15 rounded-full w-2/3" />
                <div className="h-32 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5" />
                <div className="flex gap-3">
                  <div className="h-6 bg-muted rounded-full w-20" />
                  <div className="h-6 bg-muted rounded-full w-16" />
                  <div className="h-6 bg-primary/15 rounded-full w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
