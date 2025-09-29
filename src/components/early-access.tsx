import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Badge } from "./ui/badge";
import { Lock, Mail, Sparkles, Crown, Users, MapPin, User, Star, Gift } from "lucide-react";

export function EarlyAccess() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
    selection: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.city && formData.country && formData.selection) {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getOnboardingTip = () => {
    if (formData.selection === "treat") {
      return {
        icon: "🎁",
        text: "You'll discover how to receive love and attention while enjoying surprises.",
        color: "from-pink-100 to-rose-100 border-pink-200"
      };
    } else if (formData.selection === "trick") {
      return {
        icon: "🎩",
        text: "You'll learn how to charm with thoughtful gestures and win their hearts.",
        color: "from-orange-100 to-amber-100 border-orange-200"
      };
    }
    return null;
  };

  if (isSubmitted) {
    return (
      <section id="early-access" className="py-20 bg-[#fefbf8] text-[#5d4037]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#ff5722] to-[#e64a19] rounded-full mb-6 shadow-lg">
                <Sparkles className="h-12 w-12 text-white animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                You're In! 🎃
              </h2>
              <p className="text-xl text-[#8d6e63]">
                Welcome to the inner circle, {formData.name}! You'll be the first to know when the magic begins!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-3">👑</div>
                <p className="text-sm text-[#8d6e63]">VIP Early Access</p>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-3">💎</div>
                <p className="text-sm text-[#8d6e63]">Exclusive Perks</p>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-3">🎁</div>
                <p className="text-sm text-[#8d6e63]">Launch Day Bonus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="early-access" className="py-20 bg-gradient-to-br from-[#fefbf8] via-[#fff8f3] to-[#fff3e0] text-[#5d4037] relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-[#ff5722] text-6xl animate-pulse opacity-20">🔮</div>
        <div className="absolute top-20 right-20 text-[#e91e63] text-4xl animate-bounce opacity-20">✨</div>
        <div className="absolute bottom-20 left-20 text-[#ff5722] text-5xl animate-pulse opacity-20">🎭</div>
        <div className="absolute bottom-10 right-10 text-[#e91e63] text-6xl animate-bounce opacity-20">💫</div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#ff5722]/10 to-[#e91e63]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-[#e91e63]/10 to-[#ff7043]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          {/* Header section with enhanced styling */}
          <div className="mb-12">
            <Badge className="bg-gradient-to-r from-[#ff5722] to-[#e64a19] text-white px-6 py-3 rounded-full mb-6 inline-flex items-center gap-2 shadow-lg animate-pulse">
              <Lock className="h-4 w-4" />
              Invitation Only
              <Star className="h-4 w-4" />
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-[#5d4037] mb-6 leading-tight">
              Something Magical 
              <span className="text-transparent bg-gradient-to-r from-[#ff5722] to-[#e91e63] bg-clip-text block">
                Is Coming...
              </span>
            </h2>
            
            <p className="text-xl text-[#8d6e63] mb-8 max-w-2xl mx-auto leading-relaxed">
              The most exclusive dating experience is almost here. Where stunning ladies meet generous gentlemen, 
              and every connection is worth the wait. 🎩💎
            </p>
          </div>

          {/* Enhanced form card */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl max-w-2xl mx-auto mb-12 overflow-hidden">
            {/* Card header with gradient */}
            <div className="bg-gradient-to-r from-[#ff5722] to-[#e91e63] p-6 text-white">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Crown className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Get VIP Early Access</h3>
                <Gift className="h-6 w-6" />
              </div>
              <p className="text-white/90 text-sm">Join the exclusive circle of early adopters</p>
            </div>

            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field with enhanced styling */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="block text-sm font-medium text-[#5d4037] flex items-center gap-2">
                    <User className="h-4 w-4 text-[#ff5722]" />
                    Full Name
                  </Label>
                  <div className="relative group">
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="pl-4 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-[#5d4037] placeholder:text-gray-400 focus:border-[#ff5722] focus:bg-white transition-all duration-300 group-hover:border-[#ff7043]"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff5722]/5 to-[#e91e63]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                {/* Email Field with enhanced styling */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="block text-sm font-medium text-[#5d4037] flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#ff5722]" />
                    Email Address
                  </Label>
                  <div className="relative group">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-4 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-[#5d4037] placeholder:text-gray-400 focus:border-[#ff5722] focus:bg-white transition-all duration-300 group-hover:border-[#ff7043]"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff5722]/5 to-[#e91e63]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                {/* City and Country with enhanced grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="block text-sm font-medium text-[#5d4037] flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#ff5722]" />
                      City
                    </Label>
                    <div className="relative group">
                      <Input
                        id="city"
                        type="text"
                        placeholder="Your city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="pl-4 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-[#5d4037] placeholder:text-gray-400 focus:border-[#ff5722] focus:bg-white transition-all duration-300 group-hover:border-[#ff7043]"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff5722]/5 to-[#e91e63]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country" className="block text-sm font-medium text-[#5d4037] flex items-center gap-2">
                      <span className="text-[#ff5722]">🌍</span>
                      Country
                    </Label>
                    <div className="relative group">
                      <Input
                        id="country"
                        type="text"
                        placeholder="Your country"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        className="pl-4 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-[#5d4037] placeholder:text-gray-400 focus:border-[#ff5722] focus:bg-white transition-all duration-300 group-hover:border-[#ff7043]"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff5722]/5 to-[#e91e63]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Trick or Treat Selection */}
                <div className="space-y-4">
                  <Label className="block text-sm font-medium text-[#5d4037] text-center">
                    Choose Your Role
                  </Label>
                  <RadioGroup 
                    value={formData.selection} 
                    onValueChange={(value) => handleInputChange("selection", value)}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <div className="group">
                      <div className={`flex items-center space-x-3 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-6 cursor-pointer hover:from-amber-100 hover:to-orange-100 hover:border-orange-300 transition-all duration-300 ${formData.selection === 'trick' ? 'ring-2 ring-[#ff5722] border-[#ff5722]' : ''}`}>
                        <RadioGroupItem value="trick" id="trick" className="border-orange-400 text-[#ff5722]" />
                        <Label htmlFor="trick" className="cursor-pointer text-[#5d4037] flex items-center gap-3 flex-1">
                          <span className="text-3xl">🎩</span>
                          <div className="text-left">
                            <div className="font-semibold">Trick</div>
                            <div className="text-xs text-[#8d6e63]">Be the charmer</div>
                          </div>
                        </Label>
                      </div>
                    </div>
                    <div className="group">
                      <div className={`flex items-center space-x-3 bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 rounded-2xl p-6 cursor-pointer hover:from-pink-100 hover:to-rose-100 hover:border-pink-300 transition-all duration-300 ${formData.selection === 'treat' ? 'ring-2 ring-[#e91e63] border-[#e91e63]' : ''}`}>
                        <RadioGroupItem value="treat" id="treat" className="border-pink-400 text-[#e91e63]" />
                        <Label htmlFor="treat" className="cursor-pointer text-[#5d4037] flex items-center gap-3 flex-1">
                          <span className="text-3xl">🎁</span>
                          <div className="text-left">
                            <div className="font-semibold">Treat</div>
                            <div className="text-xs text-[#8d6e63]">Enjoy the magic</div>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Enhanced Onboarding Tip */}
                {getOnboardingTip() && (
                  <div className={`bg-gradient-to-r ${getOnboardingTip()?.color} border-2 rounded-2xl p-6 transform transition-all duration-500 animate-in slide-in-from-bottom-4`}>
                    <div className="flex items-start gap-4">
                      <span className="text-3xl animate-bounce">{getOnboardingTip()?.icon}</span>
                      <div>
                        <p className="text-sm text-[#5d4037] font-medium leading-relaxed">
                          {getOnboardingTip()?.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Enhanced Submit Button */}
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ff5722] to-[#e64a19] hover:from-[#e64a19] hover:to-[#d84315] text-white border-0 rounded-2xl py-4 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Lock className="h-5 w-5 mr-2" />
                  Secure My VIP Spot
                  <Sparkles className="h-5 w-5 ml-2" />
                </Button>
              </form>
              
              {/* Enhanced stats and launch date */}
              <div className="mt-8 space-y-4">
                <p className="text-sm text-[#8d6e63] flex items-center justify-center gap-2">
                  <Users className="h-4 w-4" />
                  Join over 5,000+ people waiting for launch day
                </p>

                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff5722]/10 to-[#e91e63]/10 border border-[#ff5722]/20 rounded-full px-6 py-3">
                    <span className="text-2xl animate-pulse">🎃</span>
                    <p className="text-[#ff5722] font-bold">
                      Launch Date: October 31st
                    </p>
                    <span className="text-2xl animate-pulse">🎃</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced feature grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#ff5722]/20 to-[#e64a19]/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Crown className="h-8 w-8 text-[#ff5722]" />
              </div>
              <h3 className="font-bold text-lg mb-2">VIP Status</h3>
              <p className="text-sm text-[#8d6e63]">First access when we launch</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#e91e63]/20 to-[#c2185b]/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-[#e91e63]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Exclusive Perks</h3>
              <p className="text-sm text-[#8d6e63]">Special launch day bonuses</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#ff7043]/20 to-[#ff5722]/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-[#ff7043]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Elite Community</h3>
              <p className="text-sm text-[#8d6e63]">Join the most exclusive dating app</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}