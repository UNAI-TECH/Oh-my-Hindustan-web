import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-background to-surface">
      <div className="container py-24 md:py-36 lg:py-44">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              The Modern Information Platform
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
              Stay Informed.<br />
              Stay Ahead.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Access curated insights, breaking updates, and expert analysis — all in one powerful, distraction-free platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button variant="hero" size="lg" className="px-8 py-6 text-base">
                Get Started Free
              </Button>
              <Button variant="hero-outline" size="lg" className="px-8 py-6 text-base">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl bg-surface-elevated shadow-2xl border border-border p-8 md:p-10">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary/80" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-primary/15 rounded-full w-3/4" />
                <div className="h-4 bg-muted rounded-full w-full" />
                <div className="h-4 bg-muted rounded-full w-5/6" />
                <div className="h-20 bg-primary/10 rounded-lg mt-6" />
                <div className="flex gap-3 mt-4">
                  <div className="h-8 bg-primary/20 rounded-md w-24" />
                  <div className="h-8 bg-muted rounded-md w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
