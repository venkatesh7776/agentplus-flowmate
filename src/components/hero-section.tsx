import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Streamline Your Business with{" "}
            <span className="text-transparent bg-gradient-to-r from-brand-orange to-orange-400 bg-clip-text">
              Smart Automation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            AgentPlus helps automate your workflows so you can focus on what matters most — growing your business.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-brand-orange mr-2" />
              Save 20+ hours per week
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-brand-orange mr-2" />
              Reduce manual errors by 90%
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-brand-orange mr-2" />
              Scale without hiring
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => {
                document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group"
            >
              Book a Free Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="nav" 
              size="xl"
              onClick={() => {
                document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Watch Demo
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;