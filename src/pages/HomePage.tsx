
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import QuickLinksSection from '@/components/home/QuickLinksSection';
import CTASection from '@/components/home/CTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <QuickLinksSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
