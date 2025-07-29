import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-20 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            See AgentPlus in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how we transform complex business processes into simple, automated workflows that save time and boost productivity.
          </p>
        </div>

        <div className="relative">
          {/* Video Container */}
          <div className="relative aspect-video bg-brand-card rounded-2xl overflow-hidden shadow-soft">
            {!isPlaying ? (
              // Video Thumbnail/Placeholder
              <div className="absolute inset-0 bg-gradient-to-br from-brand-surface to-brand-card flex items-center justify-center">
                <div className="text-center">
                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group relative mb-6"
                  >
                    <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center shadow-cta group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                    {/* Pulse animation */}
                    <div className="absolute inset-0 w-20 h-20 bg-brand-orange rounded-full animate-ping opacity-25"></div>
                  </button>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-foreground">
                      Complete Business Automation Demo
                    </h3>
                    <p className="text-muted-foreground">
                      5 minutes • See real results from day one
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              // Embedded Video (placeholder for actual video embed)
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                  <p>Loading video...</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Replace this with your actual video embed code
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">500+</div>
              <div className="text-muted-foreground">Businesses Automated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">20hrs</div>
              <div className="text-muted-foreground">Average Time Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">90%</div>
              <div className="text-muted-foreground">Reduction in Manual Tasks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;