import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, MessageSquare, Heart } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success("Thank you for your message! We'll get back to you within 24 hours. 💕");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      category: ""
    });
    
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#fefbf8] to-[#fff3e0]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-[#5d4037] text-xl">
            <MessageSquare className="h-6 w-6 text-[#ff5722]" />
            Get in Touch
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[#ff5722]/10">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-[#e91e63] fill-current" />
              <p className="text-[#8d6e63] text-sm">
                We'd love to hear from you! Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#5d4037]">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-white/80 border-[#ff5722]/20 focus:border-[#ff5722] focus:ring-[#ff5722]/20"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#5d4037]">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white/80 border-[#ff5722]/20 focus:border-[#ff5722] focus:ring-[#ff5722]/20"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category" className="text-[#5d4037]">Category</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger className="bg-white/80 border-[#ff5722]/20 focus:border-[#ff5722] focus:ring-[#ff5722]/20">
                    <SelectValue placeholder="What can we help you with?" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="press">Press & Media</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-[#5d4037]">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="bg-white/80 border-[#ff5722]/20 focus:border-[#ff5722] focus:ring-[#ff5722]/20"
                  placeholder="Brief subject line"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#5d4037]">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-white/80 border-[#ff5722]/20 focus:border-[#ff5722] focus:ring-[#ff5722]/20 min-h-[120px] resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 border-[#ff5722]/30 text-[#5d4037] hover:bg-[#ff5722]/10"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#ff5722] to-[#ff7043] hover:from-[#e64a19] hover:to-[#ff5722] text-white shadow-lg"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-[#8d6e63] text-sm">
              🎃 We typically respond within 24 hours! 💕
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}