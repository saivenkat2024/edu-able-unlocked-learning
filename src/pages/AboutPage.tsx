
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Edu-Able</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Breaking barriers in education through technology and inclusivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Edu-Able, our mission is to democratize education by making quality learning accessible to everyone, 
                regardless of physical abilities, location, or background.
              </p>
              <p className="text-lg text-gray-700">
                We believe that education is a fundamental right, and technology can help bridge the gap between 
                traditional learning environments and the diverse needs of learners worldwide.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-edu-purple/10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                alt="Diverse group of educators planning curriculum" 
                className="w-full h-auto rounded-xl shadow-lg object-cover relative z-10"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-edu-blue/10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Edu-Able founding team" 
                className="w-full h-auto rounded-xl shadow-lg object-cover relative z-10"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Edu-Able was founded in 2023 by a team of educators, technologists, and accessibility experts who saw 
                firsthand the challenges faced by students with diverse learning needs.
              </p>
              <p className="text-lg text-gray-700">
                What started as a small project to help visually impaired students access educational content has evolved 
                into a comprehensive platform that serves learners with various abilities worldwide.
              </p>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Emily Chen",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                },
                {
                  name: "Marcus Johnson",
                  role: "Chief Technology Officer",
                  image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                },
                {
                  name: "Sophia Rodriguez",
                  role: "Head of Accessibility",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                },
                {
                  name: "David Kim",
                  role: "Lead Educator",
                  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 relative mx-auto w-40 h-40">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-edu-purple to-edu-blue opacity-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="rounded-full w-full h-full object-cover border-2 border-white shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Partners</h2>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {[
                "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1559403084-0d2ed007bcc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1486&q=80"
              ].map((logo, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                  <img src={logo} alt={`Partner ${index + 1}`} className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
