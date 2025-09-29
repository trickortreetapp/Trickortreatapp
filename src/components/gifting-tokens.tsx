import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Sparkles, Crown, Zap } from "lucide-react";

export function GiftingTokens() {
  const tokenBundles = [
    {
      id: 1,
      name: "Gentleman Starter",
      popular: false,
      gifts: ["🍬", "🌹", "☕"],
      perks: []
    },
    {
      id: 2,
      name: "Charming Provider",
      popular: true,
      gifts: ["🍬", "🌹", "☕", "🍷", "🎁"],
      perks: ["Instant Attention"]
    },
    {
      id: 3,
      name: "Ultimate Spoiler",
      popular: false,
      gifts: ["🍬", "🌹", "☕", "🍷", "🎁", "💎", "🦋"],
      perks: ["Instant Attention", "Premium Access", "VIP Status"]
    }
  ];

  const popularGifts = [
    { emoji: "🍬", name: "Candy" },
    { emoji: "🌹", name: "Rose" },
    { emoji: "☕", name: "Coffee" },
    { emoji: "🍷", name: "Wine" },
    { emoji: "🎁", name: "Gift Box" },
    { emoji: "💎", name: "Diamond" }
  ];

  return (
    <section id="gifts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#5d4037] mb-6">
            Your Trick Arsenal 🎩
          </h2>
          <p className="text-xl text-[#8d6e63] max-w-2xl mx-auto">
            Gentlemen, here are your tricks to impress the beautiful ladies and earn their treats
          </p>
        </div>
        
        {/* Token Bundles */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tokenBundles.map((bundle) => (
            <Card 
              key={bundle.id} 
              className={`relative text-center border-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                bundle.popular 
                  ? 'border-[#ff5722] bg-gradient-to-br from-[#fff3e0] to-white scale-105' 
                  : 'border-orange-100 bg-white hover:border-[#ff5722]'
              }`}
            >
              {bundle.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e91e63] text-white px-4 py-1 rounded-full">
                  <Crown className="h-4 w-4 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-[#5d4037] mb-4">
                  {bundle.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-medium text-[#5d4037] mb-2">Your Tricks:</p>
                    <div className="flex justify-center gap-2 text-2xl">
                      {bundle.gifts.map((gift, index) => (
                        <span key={index}>{gift}</span>
                      ))}
                    </div>
                  </div>
                  
                  {bundle.perks.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-[#5d4037] mb-2">Special Perks:</p>
                      <div className="space-y-1">
                        {bundle.perks.map((perk, index) => (
                          <div key={index} className="flex items-center justify-center gap-2 text-sm text-[#8d6e63]">
                            <Sparkles className="h-4 w-4 text-[#ff5722]" />
                            <span>{perk}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <Button 
                  className={`w-full rounded-full ${
                    bundle.popular 
                      ? 'bg-[#e91e63] hover:bg-[#c2185b] text-white' 
                      : 'bg-[#ff5722] hover:bg-[#e64a19] text-white'
                  }`}
                  onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Waitlist
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Popular Gifts */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#5d4037] text-center mb-8">
            Your Trick Collection
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularGifts.map((gift, index) => (
              <Card 
                key={index} 
                className="text-center p-4 border-orange-100 hover:border-[#ff5722] hover:shadow-md transition-all duration-300 rounded-xl cursor-pointer"
              >
                <div className="text-3xl mb-2">{gift.emoji}</div>
                <p className="font-medium text-[#5d4037] text-sm">{gift.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}