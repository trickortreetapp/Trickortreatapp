import { Card, CardContent } from "./ui/card";
import { Gift, Heart, Sparkles } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Gift className="h-12 w-12 text-[#ff5722]" />,
      title: "Men Send Tricks",
      description: "Guys show their interest with virtual gifts, treats, and generous gestures to catch her eye",
      emoji: "🎩"
    },
    {
      icon: <Heart className="h-12 w-12 text-[#e91e63] fill-current" />,
      title: "Ladies Receive Treats",
      description: "Beautiful women enjoy the attention and choose who deserves their time and affection",
      emoji: "💎"
    },
    {
      icon: <Sparkles className="h-12 w-12 text-[#ff7043]" />,
      title: "Magical Connections",
      description: "When tricks meet treats, real chemistry happens and lasting relationships begin",
      emoji: "✨"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#5d4037] mb-6">
            How It Works
          </h2>
          <p className="text-xl text-[#8d6e63] max-w-2xl mx-auto">
            The perfect formula: Men bring the tricks, women bring the treats, magic happens! 🎃
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center p-8 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-gradient-to-br from-white to-[#fef7f3]">
                <CardContent className="p-0">
                  <div className="relative inline-block mb-6">
                    <div className="bg-gradient-to-br from-[#fff3e0] to-[#ffccbc] rounded-full p-6 shadow-md">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
                      {step.emoji}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-[#5d4037] mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#8d6e63] leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-12 lg:w-24 h-0.5 bg-gradient-to-r from-[#ff5722] to-[#e91e63] -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 w-0 h-0 border-l-[8px] border-l-[#e91e63] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}