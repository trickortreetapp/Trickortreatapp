import { Button } from "./ui/button";
import { Heart, Sparkles } from "lucide-react";

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const scrollToEarlyAccess = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Join Waitlist button clicked'); // Debug log
    const element = document.getElementById('early-access');
    console.log('Found element:', element); // Debug log
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log('Scrolling to early access section'); // Debug log
    } else {
      console.log('Element with id "early-access" not found'); // Debug log
    }
  };

  const scrollToMatched = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.getElementById('matched-singles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#fefbf8] to-[#fff3e0] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 text-[#ff5722] text-6xl animate-pulse">🎃</div>
        <div className="absolute top-40 right-20 text-[#e91e63] text-4xl animate-bounce">💖</div>
        <div className="absolute bottom-20 left-20 text-[#ff5722] text-5xl animate-pulse">🍭</div>
      </div>
      
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <Heart className="h-8 w-8 text-[#e91e63] fill-current" />
              <Sparkles className="h-6 w-6 text-[#ff5722]" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#5d4037] mb-6 leading-tight">
              Trick or Treat
              <span className="text-[#e91e63] block">Your Heart</span>
            </h1>
            
            <p className="text-xl text-[#8d6e63] mb-8 max-w-lg">
              Where stunning ladies meet generous gentlemen. 
              Men bring the tricks, women enjoy the treats! 🎩💎
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-10">
              <button
                className="inline-flex items-center justify-center bg-[#ff5722] hover:bg-[#e64a19] text-white rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer font-medium h-auto"
                onClick={scrollToEarlyAccess}
                type="button"
              >
                Join Waitlist 🎃
              </button>
              <button
                className="inline-flex items-center justify-center border-2 border-[#ff5722] text-[#ff5722] hover:bg-[#ff5722] hover:text-white rounded-full px-8 py-4 text-lg cursor-pointer font-medium h-auto transition-all"
                onClick={scrollToMatched}
                type="button"
              >
                See Success Stories 💕
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-[#8d6e63]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4caf50] rounded-full"></div>
                <span>10k+ invited singles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#e91e63] rounded-full"></div>
                <span>500+ Matches Daily</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Happy couple enjoying a romantic moment" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
              <span className="text-2xl">💝</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg animate-pulse">
              <span className="text-2xl">🎭</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}