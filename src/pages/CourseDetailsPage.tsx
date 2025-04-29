
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Clock, User, DollarSign, BookOpen, Calendar, CheckCircle } from 'lucide-react';

// Mock course data - in a real app, this would come from an API or database
const coursesData = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript to build responsive websites.",
    longDescription: "This comprehensive course covers everything you need to know to start building modern, responsive websites from scratch. You'll learn HTML5 for structure, CSS3 for styling, and JavaScript for interactivity. By the end of this course, you'll have built several real-world projects and gained the skills needed to create your own web applications.",
    instructor: "Alex Morgan",
    instructorBio: "Alex has over 10 years of experience in web development and has worked with companies like Google and Facebook. He's passionate about teaching beginners and making complex concepts easy to understand.",
    level: "Beginner",
    duration: "8 weeks",
    hoursPerWeek: 10,
    enrolled: 1250,
    category: "Web Development",
    price: 99.99,
    rating: 4.8,
    reviewCount: 356,
    language: "English",
    prerequisites: ["Basic computer skills", "No prior programming experience required"],
    learningOutcomes: [
      "Build responsive websites using HTML, CSS, and JavaScript",
      "Understand web development fundamentals and best practices",
      "Create interactive web elements and basic animations",
      "Deploy websites to the internet",
      "Optimize websites for different devices"
    ],
    modules: [
      {
        title: "HTML Fundamentals",
        lessons: 8,
        duration: "1 week"
      },
      {
        title: "CSS Styling and Layout",
        lessons: 10,
        duration: "2 weeks"
      },
      {
        title: "JavaScript Basics",
        lessons: 12,
        duration: "3 weeks"
      },
      {
        title: "Building Responsive Web Projects",
        lessons: 6,
        duration: "2 weeks"
      }
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
  },
  {
    id: 2,
    title: "Python for Data Science",
    description: "Master Python programming and its applications in data analysis and visualization.",
    longDescription: "This specialized course teaches you Python programming specifically for data science applications. You'll learn how to use libraries like NumPy, Pandas, and Matplotlib to manipulate, analyze and visualize data. The course includes hands-on projects working with real-world datasets to develop practical skills in data analysis and visualization.",
    instructor: "Sarah Chen",
    instructorBio: "Sarah holds a PhD in Computer Science and specializes in machine learning and data analysis. She has published multiple research papers and previously taught at MIT before becoming an online educator.",
    level: "Intermediate",
    duration: "10 weeks",
    hoursPerWeek: 12,
    enrolled: 980,
    category: "Data Science",
    price: 129.99,
    rating: 4.9,
    reviewCount: 278,
    language: "English",
    prerequisites: ["Basic programming knowledge", "Understanding of algebra concepts"],
    learningOutcomes: [
      "Write efficient Python code for data processing",
      "Analyze and visualize data using Python libraries",
      "Create data visualizations that tell compelling stories",
      "Apply statistical methods to extract insights from data",
      "Build predictive models using machine learning"
    ],
    modules: [
      {
        title: "Python Programming Basics",
        lessons: 10,
        duration: "2 weeks"
      },
      {
        title: "Data Manipulation with NumPy and Pandas",
        lessons: 8,
        duration: "2 weeks"
      },
      {
        title: "Data Visualization with Matplotlib and Seaborn",
        lessons: 6,
        duration: "2 weeks"
      },
      {
        title: "Statistical Analysis and Machine Learning",
        lessons: 8,
        duration: "3 weeks"
      },
      {
        title: "Final Data Science Project",
        lessons: 4,
        duration: "1 week"
      }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Graphic Design Principles",
    description: "Explore the core concepts of visual design and create stunning graphics.",
    longDescription: "This course covers all the essential principles of graphic design including color theory, typography, layout, and composition. You'll learn to use professional design software to create logos, marketing materials, social media graphics, and more. The course is designed to build your design portfolio while teaching you the theoretical knowledge needed to make informed design decisions.",
    instructor: "Miguel Rodriguez",
    instructorBio: "Miguel is an award-winning graphic designer with over 15 years of experience working with major brands including Nike and Apple. He specializes in branding and identity design and has helped hundreds of students launch their design careers.",
    level: "Beginner",
    duration: "6 weeks",
    hoursPerWeek: 8,
    enrolled: 750,
    category: "Graphic Design",
    price: 89.99,
    rating: 4.7,
    reviewCount: 195,
    language: "English",
    prerequisites: ["Basic computer skills", "No prior design experience needed"],
    learningOutcomes: [
      "Understand fundamental graphic design principles",
      "Create professional designs using industry-standard software",
      "Develop an eye for effective design and layout",
      "Build a portfolio of graphic design projects",
      "Apply design thinking to solve visual communication problems"
    ],
    modules: [
      {
        title: "Design Foundations and Color Theory",
        lessons: 6,
        duration: "1 week"
      },
      {
        title: "Typography and Text Design",
        lessons: 8,
        duration: "1.5 weeks"
      },
      {
        title: "Layout and Composition",
        lessons: 7,
        duration: "1.5 weeks"
      },
      {
        title: "Software Skills: Adobe Creative Suite",
        lessons: 10,
        duration: "2 weeks"
      }
    ],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 4,
    title: "Advanced JavaScript Frameworks",
    description: "Deep dive into modern JavaScript frameworks like React, Vue, and Angular.",
    longDescription: "Take your JavaScript skills to the next level with this advanced course on modern frameworks. You'll gain hands-on experience with React, Vue, and Angular by building real-world applications. The course covers component architecture, state management, routing, and connecting to APIs. You'll learn best practices for building scalable, maintainable web applications using today's most popular frameworks.",
    instructor: "Emma Thompson",
    instructorBio: "Emma is a senior frontend engineer at a leading tech company and has contributed to several open source JavaScript projects. She specializes in React and has helped companies build complex web applications used by millions of users.",
    level: "Advanced",
    duration: "12 weeks",
    hoursPerWeek: 15,
    enrolled: 620,
    category: "Web Development",
    price: 149.99,
    rating: 4.9,
    reviewCount: 142,
    language: "English",
    prerequisites: ["Strong JavaScript fundamentals", "HTML and CSS experience", "Some experience building web applications"],
    learningOutcomes: [
      "Build complex applications with React, Vue, and Angular",
      "Implement state management solutions like Redux and Vuex",
      "Create single page applications with client-side routing",
      "Connect frontend applications to backend APIs",
      "Deploy and optimize JavaScript applications for production"
    ],
    modules: [
      {
        title: "Advanced JavaScript Concepts",
        lessons: 8,
        duration: "2 weeks"
      },
      {
        title: "React & Redux",
        lessons: 12,
        duration: "3 weeks"
      },
      {
        title: "Vue & Vuex",
        lessons: 10,
        duration: "2.5 weeks"
      },
      {
        title: "Angular Framework",
        lessons: 10,
        duration: "2.5 weeks"
      },
      {
        title: "Building Full-Stack Applications",
        lessons: 8,
        duration: "2 weeks"
      }
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    title: "Introduction to Spanish",
    description: "Learn the basics of Spanish language with focus on conversation skills.",
    longDescription: "This beginner-friendly Spanish course focuses on practical conversation skills and essential grammar. You'll learn everyday vocabulary and phrases through interactive exercises, audio recordings by native speakers, and cultural contexts. The course is designed to get you speaking Spanish from day one with a focus on real-world communication skills.",
    instructor: "Carlos Martinez",
    instructorBio: "Carlos is a native Spanish speaker from Madrid with over 10 years of language teaching experience. He specializes in making language learning fun and accessible through practical, conversation-focused methods.",
    level: "Beginner",
    duration: "8 weeks",
    hoursPerWeek: 5,
    enrolled: 1100,
    category: "Language Learning",
    price: 79.99,
    rating: 4.8,
    reviewCount: 315,
    language: "English with Spanish instruction",
    prerequisites: ["No prior Spanish knowledge required"],
    learningOutcomes: [
      "Conduct basic conversations in Spanish",
      "Understand essential Spanish vocabulary and phrases",
      "Grasp fundamental Spanish grammar concepts",
      "Read and write simple Spanish texts",
      "Develop proper Spanish pronunciation"
    ],
    modules: [
      {
        title: "Introductions and Greetings",
        lessons: 5,
        duration: "1 week"
      },
      {
        title: "Everyday Vocabulary and Phrases",
        lessons: 8,
        duration: "2 weeks"
      },
      {
        title: "Basic Grammar and Sentence Structure",
        lessons: 10,
        duration: "2.5 weeks"
      },
      {
        title: "Practical Conversation Practice",
        lessons: 8,
        duration: "2 weeks"
      },
      {
        title: "Cultural Context and Reading",
        lessons: 4,
        duration: "0.5 weeks"
      }
    ],
    image: "https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 6,
    title: "Leadership and Management",
    description: "Develop essential leadership skills to manage teams effectively.",
    longDescription: "This course is designed for both aspiring and current managers looking to enhance their leadership capabilities. You'll learn proven management techniques, effective communication strategies, conflict resolution, and how to build high-performing teams. The course combines theoretical frameworks with practical scenarios to prepare you for real-world leadership challenges.",
    instructor: "James Wilson",
    instructorBio: "James has 20+ years of executive leadership experience across multiple industries. He's served as CEO for two Fortune 500 companies and now focuses on helping others develop their management potential through education and coaching.",
    level: "Intermediate",
    duration: "6 weeks",
    hoursPerWeek: 7,
    enrolled: 890,
    category: "Personal Development",
    price: 119.99,
    rating: 4.7,
    reviewCount: 210,
    language: "English",
    prerequisites: ["Some work experience recommended", "No specific prior knowledge required"],
    learningOutcomes: [
      "Lead teams effectively using proven management strategies",
      "Communicate with clarity and impact in various business contexts",
      "Manage conflicts and difficult conversations constructively",
      "Develop and mentor team members to maximize potential",
      "Create action plans for personal leadership development"
    ],
    modules: [
      {
        title: "Leadership Fundamentals and Styles",
        lessons: 6,
        duration: "1 week"
      },
      {
        title: "Effective Communication for Leaders",
        lessons: 7,
        duration: "1 week"
      },
      {
        title: "Building and Managing High-Performance Teams",
        lessons: 8,
        duration: "1.5 weeks"
      },
      {
        title: "Conflict Resolution and Difficult Conversations",
        lessons: 6,
        duration: "1 week"
      },
      {
        title: "Strategic Decision Making and Problem Solving",
        lessons: 8,
        duration: "1.5 weeks"
      }
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
];

// Text-to-speech function
const textToSpeech = (text: string) => {
  if ('speechSynthesis' in window) {
    const synthesis = window.speechSynthesis;
    synthesis.cancel(); // Stop any current speech

    // Create a new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    
    // Speak the text
    synthesis.speak(utterance);
  }
};

const CourseDetailsPage = () => {
  const { id: courseIdString } = useParams<{ id: string }>();
  const courseId = parseInt(courseIdString || "0", 10);
  const [course, setCourse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // Simulate loading course data
    setIsLoading(true);
    setTimeout(() => {
      const foundCourse = coursesData.find(c => c.id === courseId);
      setCourse(foundCourse);
      setIsLoading(false);
    }, 500);
  }, [courseId]);

  const handleEnrollClick = () => {
    toast({
      title: "Enrollment initiated",
      description: `You've started enrollment for ${course?.title}. Complete payment to gain access.`,
    });
  };

  const toggleSpeech = (text: string) => {
    if ('speechSynthesis' in window) {
      const synthesis = window.speechSynthesis;
      
      if (isSpeaking) {
        synthesis.cancel();
        setIsSpeaking(false);
      } else {
        textToSpeech(text);
        setIsSpeaking(true);
        
        // Update state when speech ends
        synthesis.onvoiceschanged = () => {
          const voices = synthesis.getVoices();
          if (voices.length > 0) {
            // Choose a voice here if needed
          }
        };
      }
    } else {
      toast({
        title: "Text-to-Speech Unavailable",
        description: "Your browser doesn't support text-to-speech functionality.",
        variant: "destructive"
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-pulse flex flex-col items-center w-full max-w-4xl">
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-8"></div>
          <div className="w-3/4 h-10 bg-gray-200 rounded mb-4"></div>
          <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
          <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
          <div className="w-5/6 h-4 bg-gray-200 rounded mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Course Not Found</h2>
        <p className="mb-8">We couldn't find the course you're looking for.</p>
        <Button asChild>
          <Link to="/courses">Back to Courses</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-edu-purple/90 to-edu-blue/90 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <div className="flex items-start mb-4">
                <span className="bg-white text-edu-purple text-sm font-medium px-3 py-1 rounded-full">
                  {course.category}
                </span>
                <span className="ml-2 bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{course.title}</h1>
              <div className="flex items-center text-white mb-6">
                <div className="flex items-center mr-4">
                  <User className="h-5 w-5 mr-2" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-8">
                <Button onClick={handleEnrollClick} className="bg-white text-edu-purple hover:bg-gray-100">
                  Enroll Now - ${course.price}
                </Button>
                <Button 
                  variant="outline" 
                  className="text-white border-white hover:bg-white/20"
                  onClick={() => toggleSpeech(`Course: ${course.title}. Description: ${course.longDescription}`)}
                >
                  {isSpeaking ? "Stop Text-to-Speech" : "Read Description Aloud"}
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Course</h2>
              <p className="text-gray-700 mb-6">{course.longDescription}</p>
              <Button 
                variant="outline"
                onClick={() => toggleSpeech(course.longDescription)}
                className="text-edu-purple border-edu-purple hover:bg-edu-purple/10"
              >
                {isSpeaking ? "Stop Reading" : "Read Aloud"}
              </Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.learningOutcomes.map((outcome: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-edu-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline" 
                className="mt-6 text-edu-purple border-edu-purple hover:bg-edu-purple/10"
                onClick={() => toggleSpeech(`What you'll learn in this course: ${course.learningOutcomes.join('. ')}`)}
              >
                {isSpeaking ? "Stop Reading" : "Read Learning Outcomes Aloud"}
              </Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">Course Content</h2>
              <div className="space-y-4">
                {course.modules.map((module: any, index: number) => (
                  <Card key={index} className="p-4 border">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{module.title}</h3>
                      <div className="text-sm text-gray-500">
                        {module.lessons} lessons • {module.duration}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <Button 
                variant="outline" 
                className="mt-6 text-edu-purple border-edu-purple hover:bg-edu-purple/10"
                onClick={() => toggleSpeech(`Course modules: ${course.modules.map((m: any) => 
                  `${m.title}, containing ${m.lessons} lessons over ${m.duration}`).join('. ')}`)}
              >
                {isSpeaking ? "Stop Reading" : "Read Modules Aloud"}
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4">Course Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-edu-purple mr-3" />
                  <div>
                    <p className="text-gray-500 text-sm">Price</p>
                    <p className="font-medium">${course.price}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-edu-purple mr-3" />
                  <div>
                    <p className="text-gray-500 text-sm">Duration</p>
                    <p className="font-medium">{course.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-edu-purple mr-3" />
                  <div>
                    <p className="text-gray-500 text-sm">Time Commitment</p>
                    <p className="font-medium">{course.hoursPerWeek} hours/week</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <User className="h-5 w-5 text-edu-purple mr-3" />
                  <div>
                    <p className="text-gray-500 text-sm">Instructor</p>
                    <p className="font-medium">{course.instructor}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-edu-purple mr-3" />
                  <div>
                    <p className="text-gray-500 text-sm">Level</p>
                    <p className="font-medium">{course.level}</p>
                  </div>
                </div>
              </div>
              
              <hr className="my-6" />
              
              <h4 className="font-semibold mb-2">Prerequisites:</h4>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                {course.prerequisites.map((prereq: string, index: number) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
              
              <Button onClick={handleEnrollClick} className="w-full bg-edu-purple hover:bg-edu-dark-purple">
                Enroll Now
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full mt-3"
                onClick={() => toggleSpeech(`Course information: This is a ${course.level} level course taught by ${course.instructor}. 
                  It runs for ${course.duration} with a time commitment of ${course.hoursPerWeek} hours per week. 
                  The price is ${course.price} dollars. Prerequisites include: ${course.prerequisites.join(', ')}.`)}
              >
                {isSpeaking ? "Stop Reading" : "Read Course Info Aloud"}
              </Button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">About the Instructor</h3>
              <p className="text-gray-700 mb-4">{course.instructorBio}</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => toggleSpeech(`About the instructor: ${course.instructorBio}`)}
              >
                {isSpeaking ? "Stop Reading" : "Read Instructor Bio Aloud"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
