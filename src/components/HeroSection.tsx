import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.02]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl" />

      <div className="container relative py-20 md:py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now Available — OHH My Hindusthan v3.0
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground">
              Build, Ship, and Scale<br />
              <span className="text-primary">Without Limits.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The enterprise platform that accelerates development, simplifies deployment, and powers modern teams across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button variant="hero" size="lg" className="px-8 py-6 text-base gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="hero-outline" size="lg" className="px-8 py-6 text-base gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground pt-1">
              Free forever for individuals. No credit card required.
            </p>
          </div>

          {/* Right visual — dashboard mockup */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-primary/[0.06] rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl bg-surface-elevated shadow-2xl border border-border overflow-hidden">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-surface">
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                  <div className="flex-1 mx-8">
                    <div className="h-5 bg-muted rounded-md w-48 mx-auto" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8 space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-primary/15 rounded-full w-3/4" />
                      <div className="h-4 bg-muted rounded-full w-full" />
                      <div className="h-4 bg-muted rounded-full w-5/6" />
                    </div>
                    <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 rounded-lg bg-primary/[0.08] border border-primary/10" />
                    <div className="h-24 rounded-lg bg-muted" />
                    <div className="h-24 rounded-lg bg-muted" />
                  </div>
                  <div className="flex gap-3">
                    <div className="h-9 bg-primary/20 rounded-md w-28" />
                    <div className="h-9 bg-muted rounded-md w-28" />
                  </div>
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
