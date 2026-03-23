import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container text-center space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground">
          Ready to stay ahead?
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
          Join millions of professionals who trust PulseHub for curated, verified, and actionable information.
        </p>
        <div className="pt-2">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10 py-6 text-base shadow-lg transition-all duration-300"
          >
            Get Started — It's Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
