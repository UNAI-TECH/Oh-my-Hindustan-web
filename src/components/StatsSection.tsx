const stats = [
  { value: "10M+", label: "Developers worldwide" },
  { value: "50B+", label: "Requests per month" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "190+", label: "Countries served" },
];

const StatsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-foreground">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center animate-on-scroll">
              <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
