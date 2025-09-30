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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getOnboardingTip = () => {
    if (formData.selection === "treat") {
      return {
        icon: "🎁",
        text: "You'll discover how to receive love and attention while enjoying surprises.",
        color: "from-pink-100 to-rose-100 border-pink-200",
      };
    } else if (formData.selection === "trick") {
      return {
        icon: "🎩",
        text: "You'll learn how to charm with thoughtful gestures and win their hearts.",
        color: "from-orange-100 to-amber-100 border-orange-200",
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
              <h2 className="text-4xl font-bold mb-4">You're In! 🎃</h2>
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
    <section
      id="early-access"
      className="py-20 bg-gradient-to-br from-[#fefbf8] via-[#fff8f3] to-[#fff3e0] text-[#5d4037] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-[#ff5722] text-6xl animate-pulse opacity-20">🔮</div>
        <div className="absolute top-20 right-20 text-[#e91e63] text-4xl animate-bounce opacity-20">✨</div>
        <div className="absolute bottom-20 left-20 text-[#ff5722] text-5xl animate-pulse opacity-20">🎭</div>
        <div className="absolute bottom-10 right-10 text-[#e91e63] text-6xl animate-bounce opacity-20">💫</div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#ff5722]/10 to-[#e91e63]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-[#e91e63]/10 to-[#ff7043]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Badge className="bg-gradient-to-r from-[#ff5722] to-[#e64a19] text-white px-6 py-3 rounded-full mb-6 inline-flex items-center gap-2 shadow-lg animate-pulse">
              <Lock className="h-4 w-4" />
              Invitation Only
              <Star className="h-4 w-4" />
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#5d4037] mb-6 leading-tight">
              Something Magical{" "}
              <span className="text-transparent bg-gradient-to-r from-[#ff5722] to-[#e91e63] bg-clip-text block">
                Is Coming...
              </span>
            </h2>
            <p className="text-xl text-[#8d6e63] mb-8 max-w-2xl mx-auto leading-relaxed">
              The most exclusive dating experience is almost here. Where stunning ladies meet generous gentlemen, and
              every connection is worth the wait. 🎩💎
            </p>
          </div>

          {/* Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl max-w-2xl mx-auto mb-12 overflow-hidden">
            <div className="bg-gradient-to-r from-[#ff5722] to-[#e91e63] p-6 text-white">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Crown className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Get VIP Early Access</h3>
                <Gift className="h-6 w-6" />
              </div>
              <p className="text-white/90 text-sm">Join the exclusive circle of early adopters</p>
            </div>

            <CardContent className="p-8">
              <form
                action="https://formspree.io/f/mnngdjpq"
                method="POST"
                onSubmit={() => setIsSubmitted(true)}
                className="space-y-6"
              >
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-[#5d4037]">
                    <User className="h-4 w-4 text-[#ff5722]" />
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
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-[#5d4037]">
                    <Mail className="h-4 w-4 text-[#ff5722]" />
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
                  />
                </div>

                {/* City + Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="city" className="flex items-center gap-2 text-sm font-medium text-[#5d4037]">
                      <MapPin className="h-4 w-4 text-[#ff5722]" />
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
                    />
                  </div>
                  <div>
                    <Label htmlFor="country" className="flex items-center gap-2 text-sm font-medium text-[#5d4037]">
                      🌍 Country
                    </Label>
                    <Input
                      id="country"
                      name="country"
                      type="text"
                      placeholder="Your country"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Trick / Treat */}
                <div className="space-y-4">
                  <Label className="block text-sm font-medium text-[#5d4037] text-center">Choose Your Role</Label>
                  <RadioGroup
                    value={formData.selection}
                    onValueChange={(value: string) => handleInputChange("selection", value)}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <div className="group">
                      <div
                        className={`flex items-center space-x-3 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-6 cursor-pointer ${
                          formData.selection === "trick" ? "ring-2 ring-[#ff5722] border-[#ff5722]" : ""
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
                        className={`flex items-center space-x-3 bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 rounded-2xl p-6 cursor-pointer ${
                          formData.selection === "treat" ? "ring-2 ring-[#e91e63] border-[#e91e63]" : ""
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
                    className={`bg-gradient-to-r ${getOnboardingTip()?.color} border-2 rounded-2xl p-6 transition-all`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{getOnboardingTip()?.icon}</span>
                      <p className="text-sm text-[#5d4037] font-medium">{getOnboardingTip()?.text}</p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ff5722] to-[#e64a19] text-white rounded-2xl py-4 font-bold text-lg"
                >
                  <Lock className="h-5 w-5 mr-2" />
                  Secure My VIP Spot
                  <Sparkles className="h-5 w-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
