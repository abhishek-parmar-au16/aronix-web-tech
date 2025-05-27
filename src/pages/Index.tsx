
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Hero />
      <Services />
      {/* <Stats /> */}
      <Contact />
    </div>
  );
};

export default Index;
