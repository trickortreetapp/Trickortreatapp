import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Heart, MapPin } from "lucide-react";

interface Profile {
  id: number;
  name: string;
  age: number;
  image: string;
  tagline: string;
  location: string;
}

interface FeaturedProfilesProps {
  profiles: Profile[];
}

export function FeaturedProfiles({ profiles }: FeaturedProfilesProps) {
  return (
    <section id="profiles" className="py-20 bg-gradient-to-br from-[#fef7f3] to-[#fff3e0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#5d4037] mb-6">
            Featured Singles
          </h2>
          <p className="text-xl text-[#8d6e63] max-w-2xl mx-auto">
            Meet some of our amazing members looking for that special connection
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile) => (
            <Card 
              key={profile.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl bg-white"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={profile.image} 
                  alt={`${profile.name}'s profile`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-lg font-medium mb-1">"{profile.tagline}"</p>
                    <div className="flex items-center gap-1 text-sm opacity-90">
                      <MapPin className="h-4 w-4" />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Heart icon */}
                <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="h-5 w-5 text-[#e91e63] cursor-pointer hover:fill-current transition-colors" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#5d4037]">
                      {profile.name}
                    </h3>
                    <p className="text-[#8d6e63]">{profile.age} years old</p>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-2xl">🎃</span>
                    <span className="text-2xl">💕</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white rounded-full"
                  size="sm"
                >
                  Send a Treat 🍭
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-[#ff5722] text-[#ff5722] hover:bg-[#ff5722] hover:text-white rounded-full px-8"
          >
            View More Singles 👻
          </Button>
        </div>
      </div>
    </section>
  );
}