import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

const CalendarSection = () => {
  return (
    <section id="calendar" className="py-20 bg-gradient-to-b from-brand-dark to-brand-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Book a free 30-minute discovery call with our automation experts. We'll analyze your current workflows and show you exactly how much time and money you can save.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              What you'll get in this call:
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Free Workflow Analysis</h4>
                  <p className="text-muted-foreground">We'll review your current processes and identify automation opportunities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Time & Cost Savings Calculator</h4>
                  <p className="text-muted-foreground">See exactly how much time and money you'll save with automation.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Custom Solution Design</h4>
                  <p className="text-muted-foreground">Get a tailored automation plan designed specifically for your business.</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center space-x-3 mb-3">
                <Calendar className="w-5 h-5 text-brand-orange" />
                <span className="font-semibold text-foreground">30-minute call</span>
              </div>
              <p className="text-muted-foreground text-sm">
                No sales pressure. Just valuable insights about your automation potential.
              </p>
            </div>
          </div>

          {/* Right side - Calendar Embed */}
          <div className="relative">
            <div className="bg-brand-card rounded-2xl p-8 shadow-soft">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Schedule Your Free Discovery Call
                </h3>
                <p className="text-muted-foreground">
                  Choose a time that works best for you
                </p>
              </div>

              {/* Calendar Placeholder */}
              <div className="bg-brand-surface rounded-xl p-8 min-h-[400px] flex items-center justify-center border border-border/50">
                <div className="text-center space-y-4">
                  <Calendar className="w-16 h-16 text-brand-orange mx-auto" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Calendly Integration
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Replace this section with your actual Calendly embed code
                    </p>
                    <div className="text-xs text-muted-foreground bg-brand-dark rounded p-3 font-mono">
                      &lt;div className="calendly-inline-widget"<br/>
                      data-url="https://calendly.com/your-link"&gt;&lt;/div&gt;
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button variant="cta" size="lg" className="w-full">
                  Book Your Call Now
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Free consultation • No commitment required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;