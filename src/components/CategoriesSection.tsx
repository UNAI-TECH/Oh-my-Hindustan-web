import { TrendingUp, Cpu, HeartPulse, Landmark, Palette, Rocket } from "lucide-react";

const categories = [
  { icon: TrendingUp, title: "Business & Finance", count: "2.4K articles" },
  { icon: Cpu, title: "Technology", count: "3.1K articles" },
  { icon: HeartPulse, title: "Health & Science", count: "1.8K articles" },
  { icon: Landmark, title: "Politics & Policy", count: "2.0K articles" },
  { icon: Palette, title: "Culture & Arts", count: "1.2K articles" },
  { icon: Rocket, title: "Innovation", count: "950 articles" },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-24 md:py-32 bg-surface">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Categories</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Explore by topic
          </h2>
          <p className="text-muted-foreground text-lg">
            Dive into curated categories covering the stories that shape our world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group flex items-center gap-5 bg-surface-elevated rounded-xl border border-border p-6 transition-all duration-300 hover:shadow-md hover:border-primary/30 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <cat.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
