import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

import { Lock, Mail, Sparkles, Crown, MapPin, User, Star, Gift } from "lucide-react";

export function EarlyAccess() {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
    selection: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
  <section
      id="early-access"
      className="py-24 px-2 md:px-0 bg-gradient-to-br from-[#fff3e0] via-[#fff8f3] to-[#fefbf8] text-[#4e342e] min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Figma-style background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#ff5722]/20 to-[#e91e63]/10 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-br from-[#e91e63]/20 to-[#ff7043]/10 rounded-full blur-3xl opacity-60 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#ff5722]/10 to-[#e91e63]/10 rounded-full blur-3xl opacity-40 animate-pulse" />
      </div>
      <div className="w-full max-w-2xl mx-auto z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#ff5722] to-[#e91e63] text-white shadow-lg text-lg font-semibold tracking-wide animate-pulse">
            <Lock className="h-5 w-5" />
            Invitation Only
            <Star className="h-5 w-5" />
          </div>
          <h2 className="mt-8 mb-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#4e342e]">
            Something Magical
            <span className="block text-transparent bg-gradient-to-r from-[#ff5722] to-[#e91e63] bg-clip-text">Is Coming...</span>
          </h2>
          <p className="text-lg md:text-xl text-[#8d6e63] max-w-xl mx-auto leading-relaxed">
            The most exclusive dating experience is almost here. Where stunning ladies meet generous gentlemen, and every connection is worth the wait. 🎩💎
          </p>
        </div>
        <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl max-w-2xl mx-auto mb-12 overflow-hidden">
          <div className="bg-gradient-to-r from-[#ff5722] to-[#e91e63] p-8 text-white flex flex-col items-center">
            <div className="flex items-center gap-3 mb-2">
              <Crown className="h-7 w-7" />
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Get VIP Early Access</h3>
              <Gift className="h-7 w-7" />
            </div>
            <p className="text-white/90 text-base md:text-lg">Join the exclusive circle of early adopters</p>
          </div>
          <CardContent className="p-10 md:p-12">
            <form
              action="https://formspree.io/f/mnngdjpq"
              method="POST"
              className="space-y-7"
              autoComplete="off"
            >
              {/* Honeypot field for spam protection */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-base font-medium text-[#5d4037]">
                    <User className="h-5 w-5 text-[#ff5722]" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="rounded-xl border border-[#ff5722]/30 focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 px-4 py-3 text-base"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-base font-medium text-[#5d4037]">
                    <Mail className="h-5 w-5 text-[#ff5722]" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="rounded-xl border border-[#ff5722]/30 focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 px-4 py-3 text-base"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {/* City */}
                <div className="space-y-2">
                  <Label htmlFor="city" className="flex items-center gap-2 text-base font-medium text-[#5d4037]">
                    <MapPin className="h-5 w-5 text-[#ff5722]" />
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    required
                    className="rounded-xl border border-[#ff5722]/30 focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 px-4 py-3 text-base"
                  />
                </div>
                {/* Country */}
                <div className="space-y-2">
                  <Label htmlFor="country" className="flex items-center gap-2 text-base font-medium text-[#5d4037]">
                    <span role="img" aria-label="Country" className="text-[#ff5722]">🌍</span>
                    Country
                  </Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Your country"
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    required
                    className="rounded-xl border border-[#ff5722]/30 focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 px-4 py-3 text-base"
                  />
                </div>
              </div>
              {/* Trick / Treat */}
              <div className="space-y-4">
                <Label className="block text-base font-semibold text-[#5d4037] text-center mb-2">Choose Your Role</Label>
                <RadioGroup
                  value={formData.selection}
                  onValueChange={(value: string) => handleInputChange("selection", value)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  name="selection"
                >
                  <div className="group">
                    <div
                      className={`flex items-center space-x-3 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-6 cursor-pointer transition-all duration-200 ${
                        formData.selection === "trick" ? "ring-2 ring-[#ff5722] border-[#ff5722] scale-105" : ""
                      }`}
                    >
                      <RadioGroupItem id="trick" value="trick" name="selection" className="border-orange-400" />
                      <Label htmlFor="trick" className="flex items-center gap-3 flex-1 cursor-pointer">
                        <span className="text-3xl">🎩</span>
                        <div>
                          <div className="font-semibold">Trick</div>
                          <div className="text-xs text-[#8d6e63]">Be the charmer</div>
                        </div>
                      </Label>
                    </div>
                  </div>
                  <div className="group">
                    <div
                      className={`flex items-center space-x-3 bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 rounded-2xl p-6 cursor-pointer transition-all duration-200 ${
                        formData.selection === "treat" ? "ring-2 ring-[#e91e63] border-[#e91e63] scale-105" : ""
                      }`}
                    >
                      <RadioGroupItem id="treat" value="treat" name="selection" className="border-pink-400" />
                      <Label htmlFor="treat" className="flex items-center gap-3 flex-1 cursor-pointer">
                        <span className="text-3xl">🎁</span>
                        <div>
                          <div className="font-semibold">Treat</div>
                          <div className="text-xs text-[#8d6e63]">Enjoy the magic</div>
                        </div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              {/* Optional onboarding tip */}
              {getOnboardingTip() && (
                <div
                  className={`bg-gradient-to-r ${getOnboardingTip()?.color} border-2 rounded-2xl p-6 transition-all mt-2`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{getOnboardingTip()?.icon}</span>
                    <p className="text-sm text-[#5d4037] font-medium">{getOnboardingTip()?.text}</p>
                  </div>
                </div>
              )}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ff5722] to-[#e64a19] text-white rounded-2xl py-4 font-bold text-lg shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-200"
              >
                <Lock className="h-5 w-5 mr-2" />
                Secure My VIP Spot
                <Sparkles className="h-5 w-5 ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
