
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-edu-purple/90 to-edu-blue/90 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning Without Limits?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of students already unlocking their potential with Edu-Able's accessible learning platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-edu-purple">
            <Link to="/courses">Explore Courses</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
            <Link to="/about">Learn About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
