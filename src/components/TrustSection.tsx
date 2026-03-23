const partners = [
  "Acme Corp", "Globex", "Initech", "Umbrella", "Soylent", "Massive Dynamic",
];

const TrustSection = () => {
  return (
    <section className="py-14 md:py-16 bg-surface border-y border-border">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Trusted by industry leaders worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((name) => (
            <span
              key={name}
              className="text-xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300 cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
