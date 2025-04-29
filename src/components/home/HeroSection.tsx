
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="hero-gradient py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering Everyone to Learn 
              <span className="text-edu-purple"> Without Boundaries</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Access quality education regardless of physical abilities, location, or background. Start your learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="bg-edu-purple hover:bg-edu-dark-purple">
                <Link to="/courses" className="flex items-center gap-2">
                  Explore Courses <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-scale-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-edu-purple/10 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-edu-blue/10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                alt="Diverse group of students learning together" 
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
