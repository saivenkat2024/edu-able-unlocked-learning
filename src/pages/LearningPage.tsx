
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Bell, Book, Calendar, CheckCircle2, Eye, EyeOff, Volume, VolumeX } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const LearningPage = () => {
  const [textSize, setTextSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(false);
  const { toast } = useToast();

  const toggleTextToSpeech = () => {
    setTextToSpeech(!textToSpeech);
    toast({
      title: textToSpeech ? "Text-to-Speech disabled" : "Text-to-Speech enabled",
      description: textToSpeech ? "The content will no longer be read aloud." : "The content will now be read aloud when focused.",
    });
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    toast({
      title: highContrast ? "High contrast mode disabled" : "High contrast mode enabled",
      description: highContrast ? "Display has returned to standard contrast." : "Higher contrast applied to improve readability.",
    });
  };

  const changeTextSize = (size: string) => {
    setTextSize(size);
    toast({
      title: `Text size changed to ${size}`,
      description: "Text size preference has been updated.",
    });
  };

  // Classes for high contrast mode
  const contrastClass = highContrast ? 'bg-black text-white border-white' : '';

  // Classes for different text sizes
  const textSizeClass = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    'extra-large': 'text-xl'
  }[textSize];

  return (
    <div className={`min-h-screen ${highContrast ? 'bg-black text-white' : 'bg-white'}`}>
      <section className={`py-16 ${highContrast ? 'bg-black text-white' : 'bg-gradient-to-r from-edu-purple/90 to-edu-blue/90 text-white'}`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Platform</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Access your courses, track your progress, and engage with interactive learning materials.
          </p>
        </div>
      </section>

      {/* Accessibility Controls */}
      <div className={`sticky top-16 z-40 ${highContrast ? 'bg-gray-900' : 'bg-white'} border-b shadow-sm py-3`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className={`font-medium ${highContrast ? 'text-white' : 'text-gray-700'}`}>Accessibility:</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className={highContrast ? 'text-white' : 'text-gray-600'}>Text Size:</span>
                <Button 
                  variant={textSize === 'small' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => changeTextSize('small')}
                  className={highContrast && textSize !== 'small' ? 'border-white text-white' : ''}
                >
                  A<sup>-</sup>
                </Button>
                <Button 
                  variant={textSize === 'medium' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => changeTextSize('medium')}
                  className={highContrast && textSize !== 'medium' ? 'border-white text-white' : ''}
                >
                  A
                </Button>
                <Button 
                  variant={textSize === 'large' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => changeTextSize('large')}
                  className={highContrast && textSize !== 'large' ? 'border-white text-white' : ''}
                >
                  A<sup>+</sup>
                </Button>
                <Button 
                  variant={textSize === 'extra-large' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => changeTextSize('extra-large')}
                  className={highContrast && textSize !== 'extra-large' ? 'border-white text-white' : ''}
                >
                  A<sup>++</sup>
                </Button>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleHighContrast}
                className={highContrast ? 'border-white text-white' : ''}
              >
                {highContrast ? <Eye className="h-4 w-4 mr-2" /> : <EyeOff className="h-4 w-4 mr-2" />}
                {highContrast ? 'Standard Contrast' : 'High Contrast'}
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleTextToSpeech}
                className={highContrast ? 'border-white text-white' : ''}
              >
                {textToSpeech ? <VolumeX className="h-4 w-4 mr-2" /> : <Volume className="h-4 w-4 mr-2" />}
                {textToSpeech ? 'Disable Text-to-Speech' : 'Enable Text-to-Speech'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-12 container mx-auto px-4">
        <Tabs defaultValue="my-courses" className="w-full">
          <TabsList className={`w-full justify-start mb-8 ${highContrast ? 'bg-gray-800' : ''}`}>
            <TabsTrigger value="my-courses" className={highContrast ? 'data-[state=active]:bg-white data-[state=active]:text-black' : ''}>My Courses</TabsTrigger>
            <TabsTrigger value="progress" className={highContrast ? 'data-[state=active]:bg-white data-[state=active]:text-black' : ''}>Progress</TabsTrigger>
            <TabsTrigger value="upcoming" className={highContrast ? 'data-[state=active]:bg-white data-[state=active]:text-black' : ''}>Upcoming Classes</TabsTrigger>
            <TabsTrigger value="notifications" className={highContrast ? 'data-[state=active]:bg-white data-[state=active]:text-black' : ''}>Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="my-courses">
            <h2 className={`text-2xl font-bold mb-6 ${highContrast ? 'text-white' : ''}`}>My Enrolled Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "Introduction to Web Development",
                  progress: 65,
                  nextLesson: "CSS Flexbox Layout",
                  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                },
                {
                  id: 2,
                  title: "Python for Data Science",
                  progress: 42,
                  nextLesson: "Pandas Dataframes",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  id: 3,
                  title: "Leadership and Management",
                  progress: 88,
                  nextLesson: "Conflict Resolution",
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }
              ].map(course => (
                <Card key={course.id} className={`overflow-hidden hover:shadow-md transition-shadow ${contrastClass}`}>
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader className={textSizeClass}>
                    <CardTitle className="text-xl font-semibold">{course.title}</CardTitle>
                    <CardDescription className={highContrast ? 'text-gray-300' : ''}>
                      Progress: {course.progress}%
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={course.progress} className={`h-2 ${highContrast ? 'bg-gray-700' : ''}`} />
                    <p className={`mt-4 ${textSizeClass} ${highContrast ? 'text-gray-300' : 'text-gray-600'}`}>
                      Next lesson: {course.nextLesson}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-edu-purple hover:bg-edu-dark-purple">
                      Continue Learning
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="progress">
            <h2 className={`text-2xl font-bold mb-6 ${highContrast ? 'text-white' : ''}`}>Your Learning Progress</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className={contrastClass}>
                <CardHeader>
                  <CardTitle className={textSizeClass}>Overall Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {[
                    { course: "Introduction to Web Development", progress: 65 },
                    { course: "Python for Data Science", progress: 42 },
                    { course: "Leadership and Management", progress: 88 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className={`${textSizeClass} ${highContrast ? 'text-white' : 'text-gray-700'}`}>{item.course}</span>
                        <span className={`${textSizeClass} ${highContrast ? 'text-white' : 'text-gray-700'}`}>{item.progress}%</span>
                      </div>
                      <Progress value={item.progress} className={`h-2 ${highContrast ? 'bg-gray-700' : ''}`} />
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card className={contrastClass}>
                <CardHeader>
                  <CardTitle className={textSizeClass}>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "Fast Learner", description: "Completed 5 lessons in one day", icon: CheckCircle2 },
                      { title: "Perfect Score", description: "Achieved 100% on a quiz", icon: CheckCircle2 },
                      { title: "Consistent Learner", description: "Logged in for 7 consecutive days", icon: CheckCircle2 }
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <achievement.icon className="h-5 w-5 text-edu-purple mt-0.5" />
                        <div>
                          <h4 className={`font-semibold ${textSizeClass} ${highContrast ? 'text-white' : ''}`}>{achievement.title}</h4>
                          <p className={`${textSizeClass} ${highContrast ? 'text-gray-300' : 'text-gray-600'}`}>{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming">
            <h2 className={`text-2xl font-bold mb-6 ${highContrast ? 'text-white' : ''}`}>Upcoming Classes and Deadlines</h2>
            <Card className={contrastClass}>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {[
                    { 
                      title: "Live Q&A Session - Web Development Basics", 
                      date: "May 12, 2025", 
                      time: "3:00 PM - 4:00 PM EST",
                      description: "Join instructor Alex Morgan for a live session to ask questions about HTML and CSS concepts."
                    },
                    { 
                      title: "Assignment Deadline - Python Data Visualization", 
                      date: "May 15, 2025", 
                      time: "11:59 PM EST",
                      description: "Submit your data visualization project using Python, Matplotlib and Pandas."
                    },
                    { 
                      title: "Group Discussion - Leadership Styles", 
                      date: "May 18, 2025", 
                      time: "2:00 PM - 3:30 PM EST",
                      description: "Participate in a facilitated discussion about different leadership styles and their applications."
                    }
                  ].map((event, index) => (
                    <div key={index} className={`flex gap-4 pb-6 ${index < 2 ? 'border-b' : ''} ${highContrast ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className={`min-w-24 text-center p-3 rounded-md ${highContrast ? 'bg-gray-800 text-white' : 'bg-edu-purple/10 text-edu-purple'}`}>
                        <Calendar className="h-5 w-5 mx-auto mb-1" />
                        <div className={`font-medium ${textSizeClass}`}>{event.date.split(',')[0]}</div>
                        <div className={`text-sm ${highContrast ? 'text-gray-300' : ''}`}>{event.date.split(',')[1]}</div>
                      </div>
                      <div>
                        <h3 className={`font-semibold ${textSizeClass} ${highContrast ? 'text-white' : ''}`}>{event.title}</h3>
                        <p className={`${highContrast ? 'text-gray-300' : 'text-gray-600'} ${textSizeClass} mb-2`}>{event.time}</p>
                        <p className={`${highContrast ? 'text-gray-400' : 'text-gray-700'} ${textSizeClass}`}>{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <h2 className={`text-2xl font-bold mb-6 ${highContrast ? 'text-white' : ''}`}>Notifications</h2>
            <Card className={contrastClass}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { type: "announcement", title: "New Course Available: Mobile App Development", time: "2 hours ago" },
                    { type: "feedback", title: "Your assignment has been graded", time: "1 day ago" },
                    { type: "reminder", title: "Upcoming deadline: Python project submission", time: "2 days ago" }
                  ].map((notification, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-4 p-4 rounded-lg ${
                        highContrast 
                          ? 'bg-gray-800 hover:bg-gray-700' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      } cursor-pointer transition-colors`}
                    >
                      <div className={`p-3 rounded-full ${
                        notification.type === 'announcement' 
                          ? (highContrast ? 'bg-blue-900' : 'bg-blue-100') 
                          : notification.type === 'feedback'
                            ? (highContrast ? 'bg-green-900' : 'bg-green-100')
                            : (highContrast ? 'bg-yellow-900' : 'bg-yellow-100')
                      }`}>
                        <Bell className={`h-5 w-5 ${
                          notification.type === 'announcement' 
                            ? 'text-blue-600' 
                            : notification.type === 'feedback'
                              ? 'text-green-600'
                              : 'text-yellow-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-medium ${textSizeClass} ${highContrast ? 'text-white' : ''}`}>{notification.title}</h3>
                        <p className={`text-sm ${highContrast ? 'text-gray-400' : 'text-gray-500'}`}>{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default LearningPage;
