import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-foreground">
                Agent<span className="text-brand-orange">Plus</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setIsAboutOpen(true)}
                className="text-foreground hover:text-brand-orange transition-colors duration-300"
              >
                About Us
              </button>
            </div>

            {/* CTA Button */}
            <div className="flex items-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => {
                  document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* About Us Modal */}
      {isAboutOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-brand-card rounded-2xl p-8 max-w-md w-full shadow-soft">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">About AgentPlus</h2>
                <button
                  onClick={() => setIsAboutOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AgentPlus is a leading automation platform that helps businesses streamline their workflows and boost productivity through intelligent automation solutions.
                </p>
                <p>
                  Our team of experts specializes in creating custom integrations and automated processes that save time, reduce errors, and allow your team to focus on high-value activities.
                </p>
                <p>
                  Founded in 2023, we've helped over 500+ businesses transform their operations through smart automation.
                </p>
              </div>
              <div className="mt-6">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                  onClick={() => {
                    setIsAboutOpen(false);
                    document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;