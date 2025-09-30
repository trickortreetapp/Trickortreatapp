import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, Download } from "lucide-react";

interface DownloadAppProps {
  phoneImage: string;
}

export function DownloadApp({ phoneImage }: DownloadAppProps) {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-[#5d4037] to-[#8d6e63] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-pulse">🎃</div>
        <div className="absolute top-20 right-20 text-4xl animate-bounce">💕</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-pulse">🍬</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-bounce">✨</div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="bg-[#ff5722] text-white mb-6 px-4 py-2 rounded-full">
              <Download className="h-4 w-4 mr-2" />
              Get the App
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Take the Magic
              <span className="text-[#ff7043] block">Anywhere You Go</span>
            </h2>
            
            <p className="text-xl text-gray-200 mb-8 max-w-lg">
              Download the Trick or Treet app and never miss a chance to connect. 
              Swipe, chat, and send treats on the go!
            </p>
            
            {/* App Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ff5722] rounded-full flex items-center justify-center text-sm">
                  🎯
                </div>
                <span>Smart matching algorithm</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ff5722] rounded-full flex items-center justify-center text-sm">
                  💬
                </div>
                <span>Real-time chat with treats</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ff5722] rounded-full flex items-center justify-center text-sm">
                  🔔
                </div>
                <span>Instant match notifications</span>
              </div>
            </div>
            
            {/* Download buttons */}
            <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white rounded-xl px-6 py-4 flex items-center gap-3"
              >
                <div className="text-2xl">📱</div>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
              
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white rounded-xl px-6 py-4 flex items-center gap-3"
              >
                <div className="text-2xl">🤖</div>
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
            
            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 text-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2">4.8/5</span>
              </div>
              <div className="text-gray-300">•</div>
              <div>50K+ Downloads</div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* Phone mockup */}
              <div className="bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={phoneImage} 
                    alt="Trick or Treet App Interface" 
                    className="w-full h-[600px] object-cover"
                  />
                </div>
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg animate-bounce">
                <div className="flex items-center gap-2">
                  <span className="text-lg">💕</span>
                  <span className="text-xs font-semibold text-[#5d4037]">New Match!</span>
                </div>
              </div>
              
              <div className="absolute top-1/3 -left-6 bg-white rounded-xl p-3 shadow-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🍭</span>
                  <span className="text-xs font-semibold text-[#5d4037]">Treat Sent!</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 -right-6 bg-white rounded-xl p-3 shadow-lg animate-bounce">
                <div className="flex items-center gap-2">
                  <span className="text-lg">💬</span>
                  <span className="text-xs font-semibold text-[#5d4037]">3 Messages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}