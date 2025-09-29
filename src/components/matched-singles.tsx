import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Heart, Clock, MapPin, Sparkles } from "lucide-react";

interface MatchedCouple {
  id: number;
  names: string;
  ages: string;
  image: string;
  story: string;
  matchDate: string;
  location: string;
  status: "matched" | "dating" | "engaged";
}

interface MatchedSinglesProps {
  matches: MatchedCouple[];
}

export function MatchedSingles({ matches }: MatchedSinglesProps) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "engaged":
        return { 
          label: "Engaged! 💍", 
          color: "bg-[#e91e63] text-white",
          emoji: "💍"
        };
      case "dating":
        return { 
          label: "Dating 💕", 
          color: "bg-[#ff7043] text-white",
          emoji: "💕"
        };
      default:
        return { 
          label: "Matched ✨", 
          color: "bg-[#ff5722] text-white",
          emoji: "✨"
        };
    }
  };

  return (
    <section id="matched-singles" className="py-20 bg-gradient-to-br from-[#fef7f3] to-[#fff3e0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#5d4037] mb-6">
            When Tricks Meet Treats 💎
          </h2>
          <p className="text-xl text-[#8d6e63] max-w-2xl mx-auto">
            Beautiful women and the generous men who won their hearts with the perfect tricks. 
            See what happens when charm meets beauty! 
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {matches.map((match) => {
            const statusConfig = getStatusConfig(match.status);
            
            return (
              <Card 
                key={match.id} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl bg-white"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={match.image} 
                    alt={`${match.names} together`}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={`${statusConfig.color} px-3 py-1 rounded-full`}>
                          {statusConfig.label}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm opacity-90">
                          <Clock className="h-4 w-4" />
                          <span>{match.matchDate}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-1">
                        {match.names}
                      </h3>
                      <div className="flex items-center gap-1 text-sm opacity-90 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{match.location}</span>
                      </div>
                      <p className="text-sm opacity-95 italic">
                        "{match.story}"
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating hearts */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-2 animate-pulse">
                      <Heart className="h-4 w-4 text-[#e91e63] fill-current" />
                    </div>
                    <div className="bg-white/90 rounded-full p-2 animate-bounce delay-150">
                      <Sparkles className="h-4 w-4 text-[#ff5722]" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-[#8d6e63]">
                      <span className="text-sm">Ages: {match.ages}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-2xl animate-pulse">🎃</span>
                      <span className="text-2xl animate-bounce">{statusConfig.emoji}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-[#ff5722] hover:bg-[#e64a19] text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Early Access 💕
          </Button>
          <p className="text-sm text-[#8d6e63] mt-4">
            Be among the first to experience the magic when we launch
          </p>
        </div>
      </div>
    </section>
  );
}