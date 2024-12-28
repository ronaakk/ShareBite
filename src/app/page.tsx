'use client';

import Image from "next/image";
import  NavBar from "@/components/landing/NavBar"
import HowItWorksSection from "@/components/landing/howItWorks/HowItWorksSection"
import HeroSection from "@/components/landing/hero/HeroSection"
import DashboardSection from "@/components/landing/dashboard/DashboardSection"

export default function Home() {
  return (
    <div className="w-full container flex flex-col mx-auto text-center">
        <NavBar />
          
        <HeroSection />
        <div className="w-full">
            <HowItWorksSection />
        </div>
    
        <div className="flex flex-col items-center justify-center h-full gap-4">
            <DashboardSection />
        </div>

        {/* TODO: Need to make footer section */}

    </div>
    
  );
}
