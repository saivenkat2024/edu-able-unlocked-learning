
import React from 'react';
import { Book, Users, Calendar, Globe } from 'lucide-react';

const features = [
  {
    icon: <Globe className="h-10 w-10 text-edu-purple" />,
    title: "Accessibility for All",
    description: "Our platform is designed to be accessible to everyone, including people with disabilities."
  },
  {
    icon: <Book className="h-10 w-10 text-edu-blue" />,
    title: "Wide Range of Courses",
    description: "Access thousands of courses across various subjects and disciplines to expand your knowledge."
  },
  {
    icon: <Users className="h-10 w-10 text-edu-green" />,
    title: "Expert Instructors",
    description: "Learn from professionals and educators with years of experience in their fields."
  },
  {
    icon: <Calendar className="h-10 w-10 text-edu-yellow" />,
    title: "Flexible Learning",
    description: "Study at your own pace, on your own schedule, from anywhere in the world."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Edu-Able?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're dedicated to breaking down barriers to education and providing a platform where everyone can thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 card-hover border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
