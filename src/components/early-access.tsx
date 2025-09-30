import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
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
	const [state, handleSubmit] = useForm("mnngdjpq");

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};
		return (
			<section
				id="early-access"
				className="py-28 px-2 md:px-0 bg-gradient-to-br from-[#fff3e0] via-[#fff8f3] to-[#fefbf8] text-[#4e342e] min-h-screen flex items-center justify-center relative overflow-hidden"
				style={{ fontFamily: 'Inter, sans-serif' }}
			>
				{/* Premium background decorations */}
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-[#ff5722]/30 to-[#e91e63]/20 rounded-full blur-3xl opacity-70 animate-pulse" />
					<div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-[#e91e63]/30 to-[#ff7043]/20 rounded-full blur-3xl opacity-70 animate-pulse delay-1000" />
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-br from-[#ff5722]/20 to-[#e91e63]/20 rounded-full blur-3xl opacity-50 animate-pulse" />
				</div>
				<div className="w-full max-w-2xl mx-auto z-10">
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#ff5722] to-[#e91e63] text-white shadow-xl text-xl font-bold tracking-wide animate-pulse">
							<Lock className="h-6 w-6" />
							VIP Waitlist
							<Star className="h-6 w-6" />
						</div>
						<h2 className="mt-10 mb-5 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#4e342e] drop-shadow-lg">
							Unlock Early Access
							<span className="block text-transparent bg-gradient-to-r from-[#ff5722] to-[#e91e63] bg-clip-text">to Trick or Treet</span>
						</h2>
						<p className="text-xl md:text-2xl text-[#8d6e63] max-w-2xl mx-auto leading-relaxed font-medium">
							Be the first to experience the most exclusive dating app. Join the waitlist for VIP perks, launch bonuses, and a magical community. 🎩💎
						</p>
					</div>
					<Card className="bg-white/95 backdrop-blur-2xl border-0 shadow-2xl max-w-2xl mx-auto mb-14 overflow-hidden">
						<div className="bg-gradient-to-r from-[#ff5722] to-[#e91e63] p-10 text-white flex flex-col items-center">
							<div className="flex items-center gap-4 mb-2">
								<Crown className="h-8 w-8" />
								<h3 className="text-3xl md:text-4xl font-bold tracking-tight">Join the VIP Waitlist</h3>
								<Gift className="h-8 w-8" />
							</div>
							<p className="text-white/90 text-lg md:text-xl font-medium">Early birds get exclusive rewards!</p>
						</div>
						<CardContent className="p-10 md:p-14">
							<form
								onSubmit={handleSubmit}
								className="space-y-10"
								autoComplete="off"
							>
							{/* Honeypot field for spam protection */}
							<div style={{ display: 'none' }} aria-hidden="true">
								<label htmlFor="website">Website</label>
								<input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
										className="rounded-2xl border-2 border-[#ff5722]/30 focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 px-5 py-4 text-base bg-gray-50 placeholder:text-gray-400 shadow-sm transition-all"
									/>
									<ValidationError prefix="Name" field="name" errors={state.errors} />
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
										className="rounded-2xl border-2 border-[#ff5722]/30 focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 px-5 py-4 text-base bg-gray-50 placeholder:text-gray-400 shadow-sm transition-all"
									/>
									<ValidationError prefix="Email" field="email" errors={state.errors} />
								</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
										className="rounded-2xl border-2 border-[#ff5722]/30 focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 px-5 py-4 text-base bg-gray-50 placeholder:text-gray-400 shadow-sm transition-all"
									/>
									<ValidationError prefix="City" field="city" errors={state.errors} />
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
										className="rounded-2xl border-2 border-[#ff5722]/30 focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 px-5 py-4 text-base bg-gray-50 placeholder:text-gray-400 shadow-sm transition-all"
									/>
									<ValidationError prefix="Country" field="country" errors={state.errors} />
								</div>
							</div>
							{/* Trick / Treat */}
							<div className="space-y-4">
								<Label className="block text-base font-semibold text-[#5d4037] text-center mb-2">Choose Your Role</Label>
								<RadioGroup
									value={formData.selection}
									onValueChange={(value: string) => handleInputChange("selection", value)}
									className="grid grid-cols-1 sm:grid-cols-2 gap-6"
									name="selection"
								>
									<div className="group">
										<div
											className={`flex items-center space-x-3 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-7 cursor-pointer transition-all duration-200 shadow-sm ${
												formData.selection === "trick" ? "ring-2 ring-[#ff5722] border-[#ff5722] scale-105 bg-amber-100/80" : "hover:bg-amber-100/60"
											}`}
										>
											<RadioGroupItem id="trick" value="trick" name="selection" className="border-orange-400 size-5" />
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
											className={`flex items-center space-x-3 bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 rounded-2xl p-7 cursor-pointer transition-all duration-200 shadow-sm ${
												formData.selection === "treat" ? "ring-2 ring-[#e91e63] border-[#e91e63] scale-105 bg-pink-100/80" : "hover:bg-pink-100/60"
											}`}
										>
											<RadioGroupItem id="treat" value="treat" name="selection" className="border-pink-400 size-5" />
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
									className={`bg-gradient-to-r ${getOnboardingTip()?.color} border-2 rounded-2xl p-8 transition-all mt-4`}
								>
									<div className="flex items-start gap-4">
										<span className="text-3xl">{getOnboardingTip()?.icon}</span>
										<p className="text-sm text-[#5d4037] font-medium">{getOnboardingTip()?.text}</p>
									</div>
								</div>
							)}
							<Button
								type="submit"
								className="w-full bg-gradient-to-r from-[#ff5722] to-[#e64a19] text-white rounded-2xl py-4 font-bold text-lg shadow-lg hover:scale-[1.04] hover:shadow-xl transition-all duration-200 focus:ring-2 focus:ring-[#ff5722]/40"
								disabled={state.submitting}
							>
								<Lock className="h-5 w-5 mr-2" />
								{state.submitting ? 'Submitting...' : 'Secure My VIP Spot'}
								<Sparkles className="h-5 w-5 ml-2" />
							</Button>
							<ValidationError errors={state.errors} />
						{state.succeeded && (
							<div className="mt-6 text-green-600 text-center font-semibold animate-in fade-in">
								Thanks for joining!
							</div>
						)}
						</form>
						{/* Stats and launch date */}
						<div className="mt-8 space-y-4">
							<p className="text-sm text-[#8d6e63] flex items-center justify-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 text-[#ff5722]"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657A8 8 0 118 8v8h8a8 8 0 011.657-1.343z"></path></svg>
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
			</div>
		</section>
	);
}
