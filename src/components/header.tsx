import { Button } from "./ui/button";
import trickortreetlogo from '../assets/trickortreetlogo.png';

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src={trickortreetlogo} alt="Trick or Treet Logo" className="h-16 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="text-[#5d4037] hover:text-[#ff5722] transition-colors">
            How It Works
          </a>
          <a href="#matched-singles" className="text-[#5d4037] hover:text-[#ff5722] transition-colors">
            Success Stories
          </a>
          <a href="#gifts" className="text-[#5d4037] hover:text-[#ff5722] transition-colors">
            Tricks
          </a>
          <a href="#early-access" className="text-[#5d4037] hover:text-[#ff5722] transition-colors">
            Join Waitlist
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            className="text-[#5d4037] hover:text-[#5d4037] hover:bg-white"
            onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist
          </Button>
          <Button 
            className="bg-[#ff5722] hover:bg-[#e64a19] text-white rounded-full px-6"
            onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </header>
  );
}