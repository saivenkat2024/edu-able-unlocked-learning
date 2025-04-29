
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Edu-Able has transformed my learning experience. As someone with dyslexia, I've always struggled with traditional education platforms, but the accessibility features here have made all the difference."
  },
  {
    name: "David Chen",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "As an educator, I'm impressed by how Edu-Able enables me to reach students of all abilities. The platform's inclusive design helps me ensure that every student can access the material in a way that works for them."
  },
  {
    name: "Maya Rodriguez",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "My daughter has thrived since using Edu-Able. The flexible learning options allow her to study at her own pace while still getting the quality education she deserves."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students, educators, and parents who have experienced the difference with our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-edu-purple to-edu-blue rounded-full opacity-20"></div>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-edu-purple opacity-50 mx-auto" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
