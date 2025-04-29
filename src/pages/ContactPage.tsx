
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We will respond to your inquiry within 48 hours.",
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-edu-purple/90 to-edu-blue/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Have questions or need support? Reach out to our team and we'll be happy to assist you.
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Our support team is here to help you with any questions you might have about our platform, 
              courses, or accessibility features. We strive to respond to all inquiries within 48 hours.
            </p>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start">
                  <div className="p-3 rounded-full bg-edu-purple/10 mr-4">
                    <Mail className="h-6 w-6 text-edu-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-1">For general inquiries:</p>
                    <a href="mailto:info@edu-able.com" className="text-edu-purple hover:underline">
                      info@edu-able.com
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">For technical support:</p>
                    <a href="mailto:support@edu-able.com" className="text-edu-purple hover:underline">
                      support@edu-able.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start">
                  <div className="p-3 rounded-full bg-edu-purple/10 mr-4">
                    <Phone className="h-6 w-6 text-edu-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600 mb-1">Customer Support:</p>
                    <p className="font-medium text-lg">+1 (555) 123-4567</p>
                    <p className="text-gray-600 text-sm">Monday-Friday: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start">
                  <div className="p-3 rounded-full bg-edu-purple/10 mr-4">
                    <MessageSquare className="h-6 w-6 text-edu-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Live Chat</h3>
                    <p className="text-gray-600 mb-3">
                      Chat with our support team in real-time for immediate assistance.
                    </p>
                    <Button className="bg-edu-purple hover:bg-edu-dark-purple">
                      Start Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start">
                  <div className="p-3 rounded-full bg-edu-purple/10 mr-4">
                    <MapPin className="h-6 w-6 text-edu-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-gray-600 mb-1">Headquarters:</p>
                    <p className="mb-3">
                      123 Education Lane<br />
                      Suite 400<br />
                      Boston, MA 02108
                    </p>
                    <Button variant="outline">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Type your message here..."
                    required
                    rows={5}
                  />
                </div>
                
                <div className="flex items-center">
                  <input 
                    id="accessibility" 
                    type="checkbox" 
                    className="h-4 w-4 text-edu-purple border-gray-300 rounded focus:ring-edu-purple" 
                  />
                  <label htmlFor="accessibility" className="ml-2 block text-sm text-gray-600">
                    I need accessibility accommodations for communications
                  </label>
                </div>
                
                <Button type="submit" className="w-full bg-edu-purple hover:bg-edu-dark-purple">
                  Submit Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How do I reset my password?",
                answer: "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password."
              },
              {
                question: "Can I get a refund for a course?",
                answer: "Yes, we offer a 30-day money-back guarantee for all our courses if you're not satisfied with your purchase."
              },
              {
                question: "How do I enable accessibility features?",
                answer: "Accessibility features can be found in your account settings under 'Preferences.' You can enable text-to-speech, high contrast mode, and adjust text size."
              },
              {
                question: "Do you offer discounts for educational institutions?",
                answer: "Yes, we provide special pricing for schools, colleges, and nonprofit organizations. Please contact our sales team for more information."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
