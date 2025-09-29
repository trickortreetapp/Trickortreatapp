import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { HowItWorks } from "./components/how-it-works";
import { MatchedSingles } from "./components/matched-singles";
import { GiftingTokens } from "./components/gifting-tokens";
import { EarlyAccess } from "./components/early-access";
import { Footer } from "./components/footer";

export default function App() {
  // Sample matched couples data - showcasing the Tricks & Treats dynamic
  const matchedCouples = [
    {
      id: 1,
      names: "Stunning Isabella & Mike",
      ages: "24 & 32",
      image: "https://images.unsplash.com/photo-1756277242553-147261b654d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMG1hbiUyMGdpdmluZyUyMGdpZnRzJTIwc2hvcHBpbmclMjBsdXh1cnl8ZW58MXx8fHwxNzU4MjcwMjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      story: "He spoils me with treats at Saks - I can't resist his generous tricks! 💎",
      matchDate: "3 months ago",
      location: "New York, NY",
      status: "dating" as const
    },
    {
      id: 2,
      names: "Gorgeous Sophia & Alex",
      ages: "23 & 29",
      image: "https://images.unsplash.com/photo-1755810922274-7cd40d0fc8df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3JnZW91cyUyMHdvbWFuJTIwb3JkaW5hcnklMjBtYW4lMjBkYXRpbmclMjBjb3VwbGUlMjByZXN0YXVyYW50fGVufDF8fHx8MTc1ODI3MDI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      story: "His tricks of fine dining and roses always lead to the sweetest treats! 🌹",
      matchDate: "8 months ago",
      location: "Chicago, IL",
      status: "engaged" as const
    },
    {
      id: 3,
      names: "Beautiful Maya & David",
      ages: "22 & 28",
      image: "https://images.unsplash.com/photo-1698834883115-845339a9d5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVubmluZyUyMHdvbWFuJTIwcmVndWxhciUyMGd1eSUyMGNvZmZlZSUyMHNob3AlMjBkYXRlfGVufDF8fHx8MTc1ODI3MDI1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      story: "Coffee dates with gifts? His tricks make every morning a treat! ☕",
      matchDate: "6 months ago",
      location: "Los Angeles, CA",
      status: "dating" as const
    },
    {
      id: 4,
      names: "Stunning Lisa & Tom",
      ages: "25 & 31",
      image: "https://images.unsplash.com/photo-1618333858238-c174ee56a54d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwd29tYW4lMjBiZWF1dGlmdWwlMjBtYW4lMjBhdmVyYWdlJTIwbG9va2luZyUyMGNvdXBsZXxlbnwxfHx8fDE3NTgyNzAyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      story: "From virtual tricks to real treats - he knows how to win my heart! 💕",
      matchDate: "1 year ago",
      location: "Austin, TX",
      status: "matched" as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#fefbf8]">
      <Header />
      <HeroSection 
        heroImage="https://images.unsplash.com/photo-1650595808048-5cb2a8c1e314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwY291cGxlJTIwZmxpcnRpbmclMjByb21hbnRpYyUyMGRhdGV8ZW58MXx8fHwxNzU4MjY5NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
      />
      <HowItWorks />
      <MatchedSingles matches={matchedCouples} />
      <GiftingTokens />
      <EarlyAccess />
      <Footer />
    </div>
  );
}