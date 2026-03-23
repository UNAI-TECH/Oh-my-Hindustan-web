import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary-foreground/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>

      <div className="container relative text-center space-y-6 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground">
          Ready to accelerate your workflow?
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
          Join millions of developers and teams who trust RedCore to build, ship, and scale.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10 py-6 text-base shadow-lg transition-all duration-300 gap-2"
          >
            Get Started — It's Free
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-10 py-6 text-base transition-all duration-300"
          >
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
