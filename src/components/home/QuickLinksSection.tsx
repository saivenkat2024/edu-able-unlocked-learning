
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const courseCategories = [
  { title: "Web Development", image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80", link: "/courses/web-development" },
  { title: "Data Science", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", link: "/courses/data-science" },
  { title: "Graphic Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", link: "/courses/graphic-design" }
];

const QuickLinksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Learning Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most popular course categories and begin your educational adventure today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courseCategories.map((category, index) => (
            <Link to={category.link} key={index} className="group">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                    <span className="inline-flex items-center text-sm text-white/90 group-hover:text-edu-light-purple transition-colors">
                      Explore courses <ChevronRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-edu-purple hover:bg-edu-dark-purple">
            <Link to="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
