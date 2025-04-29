
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Users, Search, BookOpen } from 'lucide-react';

const CommunityPage = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-edu-purple/90 to-edu-blue/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Edu-Able Community</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Connect with fellow learners, join discussions, and find mentorship opportunities.
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <Tabs defaultValue="discussions" className="w-full">
          <TabsList className="w-full justify-start mb-8">
            <TabsTrigger value="discussions">
              <MessageSquare className="h-4 w-4 mr-2" />
              Discussions
            </TabsTrigger>
            <TabsTrigger value="study-groups">
              <Users className="h-4 w-4 mr-2" />
              Study Groups
            </TabsTrigger>
            <TabsTrigger value="mentorship">
              <BookOpen className="h-4 w-4 mr-2" />
              Mentorship
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discussions" className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Popular Discussions</h2>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-edu-purple w-full max-w-xs"
                  />
                </div>
                <Button className="bg-edu-purple hover:bg-edu-dark-purple">
                  New Topic
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Tips for learning programming with screen readers",
                  author: "Sarah J.",
                  category: "Accessibility",
                  replies: 24,
                  views: 342,
                  lastActivity: "2 hours ago"
                },
                {
                  title: "What are your favorite data visualization libraries?",
                  author: "David Chen",
                  category: "Data Science",
                  replies: 18,
                  views: 215,
                  lastActivity: "5 hours ago"
                },
                {
                  title: "Struggling with JavaScript promises - need help!",
                  author: "Miguel R.",
                  category: "Web Development",
                  replies: 32,
                  views: 410,
                  lastActivity: "1 day ago"
                },
                {
                  title: "Resources for learning UI/UX design principles?",
                  author: "Emma T.",
                  category: "Design",
                  replies: 15,
                  views: 198,
                  lastActivity: "2 days ago"
                },
                {
                  title: "How to stay motivated during long courses?",
                  author: "James W.",
                  category: "Study Tips",
                  replies: 42,
                  views: 536,
                  lastActivity: "3 days ago"
                }
              ].map((discussion, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{discussion.title}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>Posted by {discussion.author}</span>
                        <span className="mx-2">•</span>
                        <span>{discussion.lastActivity}</span>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-edu-purple/10 text-edu-purple text-sm">
                      {discussion.category}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="flex items-center mr-4">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>{discussion.replies} replies</span>
                    </div>
                    <div className="flex items-center">
                      <Search className="h-4 w-4 mr-1" />
                      <span>{discussion.views} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline">Load More Discussions</Button>
            </div>
          </TabsContent>

          <TabsContent value="study-groups" className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Available Study Groups</h2>
              <Button className="bg-edu-purple hover:bg-edu-dark-purple">
                Create Study Group
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Web Development Basics",
                  members: 12,
                  focus: "HTML, CSS, and JavaScript fundamentals",
                  schedule: "Tuesdays & Thursdays, 7PM EST",
                  openSpots: 3
                },
                {
                  name: "Python Data Analysis",
                  members: 8,
                  focus: "Working with Pandas and NumPy libraries",
                  schedule: "Mondays & Wednesdays, 6PM EST",
                  openSpots: 4
                },
                {
                  name: "UX Design Principles",
                  members: 10,
                  focus: "User research and prototyping techniques",
                  schedule: "Saturdays, 10AM EST",
                  openSpots: 5
                },
                {
                  name: "JavaScript Advanced Concepts",
                  members: 15,
                  focus: "Promises, async/await, and modern ES6+ features",
                  schedule: "Fridays, 5PM EST",
                  openSpots: 0
                },
                {
                  name: "Accessible Web Design",
                  members: 9,
                  focus: "WCAG standards and inclusive design patterns",
                  schedule: "Tuesdays, 6PM EST",
                  openSpots: 6
                },
                {
                  name: "Mobile App Development",
                  members: 14,
                  focus: "React Native fundamentals and best practices",
                  schedule: "Wednesdays & Sundays, 8PM EST",
                  openSpots: 1
                }
              ].map((group, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{group.members} members</span>
                      <span className="mx-2">•</span>
                      <span>{group.openSpots > 0 ? `${group.openSpots} spots available` : 'Full'}</span>
                    </div>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Focus:</span> {group.focus}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Schedule:</span> {group.schedule}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled={group.openSpots === 0} variant={group.openSpots > 0 ? 'default' : 'outline'}>
                      {group.openSpots > 0 ? 'Join Group' : 'Group Full'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mentorship" className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Mentorship Opportunities</h2>
              <Button className="bg-edu-purple hover:bg-edu-dark-purple">
                Become a Mentor
              </Button>
            </div>
            
            <div className="bg-edu-purple/10 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-edu-purple mb-3">About Our Mentorship Program</h3>
              <p className="text-gray-700 mb-4">
                Our mentorship program connects experienced professionals and educators with students looking for guidance. 
                Whether you need help with specific course material, career advice, or want someone to help you navigate 
                your learning journey, our mentors are here to support you.
              </p>
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-edu-purple/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-edu-purple" />
                  </div>
                  <div>
                    <p className="font-medium">1:1 Guidance</p>
                    <p className="text-sm text-gray-600">Personalized support</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-edu-purple/20 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-edu-purple" />
                  </div>
                  <div>
                    <p className="font-medium">Expert Knowledge</p>
                    <p className="text-sm text-gray-600">Industry professionals</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-edu-purple/20 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-edu-purple" />
                  </div>
                  <div>
                    <p className="font-medium">Regular Sessions</p>
                    <p className="text-sm text-gray-600">Weekly/bi-weekly meetings</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Available Mentors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Dr. Rebecca Lee",
                  expertise: "Data Science, Machine Learning",
                  experience: "10+ years in AI research",
                  availability: "2 spots available",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "Michael Chen",
                  expertise: "Web Development, React, Node.js",
                  experience: "Senior Developer at Tech Co.",
                  availability: "1 spot available",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "Aisha Johnson",
                  expertise: "UX/UI Design, Accessibility",
                  experience: "Design Lead at Creative Studio",
                  availability: "Currently full",
                  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "James Wilson",
                  expertise: "Project Management, Leadership",
                  experience: "Former CTO, Business Consultant",
                  availability: "3 spots available",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "Sofia Patel",
                  expertise: "Mobile Development, Flutter",
                  experience: "App Developer at Mobile Tech",
                  availability: "2 spots available",
                  image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "David Rodriguez",
                  expertise: "Cybersecurity, Ethical Hacking",
                  experience: "Security Specialist at SecureNet",
                  availability: "Currently full",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                }
              ].map((mentor, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={mentor.image} 
                        alt={mentor.name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">{mentor.name}</h4>
                        <p className="text-edu-purple">{mentor.expertise}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">{mentor.experience}</p>
                    <p className={`font-medium ${mentor.availability.includes('full') ? 'text-red-500' : 'text-green-600'}`}>
                      {mentor.availability}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      disabled={mentor.availability.includes('full')}
                      variant={mentor.availability.includes('full') ? 'outline' : 'default'}
                    >
                      {mentor.availability.includes('full') ? 'Join Waitlist' : 'Request Mentorship'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default CommunityPage;
