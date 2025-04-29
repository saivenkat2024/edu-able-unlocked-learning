import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Book, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const courseCategories = [
  "All Categories",
  "Web Development",
  "Data Science",
  "Graphic Design",
  "Language Learning",
  "Personal Development",
  "Science & Technology",
  "Arts & Music"
];

const difficultyLevels = ["Beginner", "Intermediate", "Advanced"];

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript to build responsive websites.",
    instructor: "Alex Morgan",
    level: "Beginner",
    duration: "8 weeks",
    enrolled: 1250,
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
  },
  {
    id: 2,
    title: "Python for Data Science",
    description: "Master Python programming and its applications in data analysis and visualization.",
    instructor: "Sarah Chen",
    level: "Intermediate",
    duration: "10 weeks",
    enrolled: 980,
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Graphic Design Principles",
    description: "Explore the core concepts of visual design and create stunning graphics.",
    instructor: "Miguel Rodriguez",
    level: "Beginner",
    duration: "6 weeks",
    enrolled: 750,
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 4,
    title: "Advanced JavaScript Frameworks",
    description: "Deep dive into modern JavaScript frameworks like React, Vue, and Angular.",
    instructor: "Emma Thompson",
    level: "Advanced",
    duration: "12 weeks",
    enrolled: 620,
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    title: "Introduction to Spanish",
    description: "Learn the basics of Spanish language with focus on conversation skills.",
    instructor: "Carlos Martinez",
    level: "Beginner",
    duration: "8 weeks",
    enrolled: 1100,
    category: "Language Learning",
    image: "https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 6,
    title: "Leadership and Management",
    description: "Develop essential leadership skills to manage teams effectively.",
    instructor: "James Wilson",
    level: "Intermediate",
    duration: "6 weeks",
    enrolled: 890,
    category: "Personal Development",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
];

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(course => {
    // Filter by category
    if (selectedCategory !== "All Categories" && course.category !== selectedCategory) {
      return false;
    }
    
    // Filter by difficulty
    if (selectedDifficulty.length > 0 && !selectedDifficulty.includes(course.level)) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !course.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-edu-purple/90 to-edu-blue/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Discover a wide range of courses designed to be accessible to everyone, regardless of abilities or backgrounds.
          </p>
        </div>
      </section>
      
      <section className="py-12 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Search</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-edu-purple"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {courseCategories.map((category) => (
                  <div 
                    key={category} 
                    className={`cursor-pointer p-2 rounded-md ${selectedCategory === category ? 'bg-edu-purple/10 text-edu-purple font-medium' : 'hover:bg-gray-50'}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Difficulty Level</h2>
              <div className="space-y-3">
                {difficultyLevels.map((level) => (
                  <div key={level} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`level-${level}`}
                      checked={selectedDifficulty.includes(level)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedDifficulty([...selectedDifficulty, level]);
                        } else {
                          setSelectedDifficulty(selectedDifficulty.filter(l => l !== level));
                        }
                      }}
                    />
                    <label 
                      htmlFor={`level-${level}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {level}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setSelectedCategory("All Categories");
                setSelectedDifficulty([]);
                setSearchQuery("");
              }}
            >
              Reset Filters
            </Button>
          </div>
          
          {/* Course listings */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Available
              </h2>
            </div>
            
            {filteredCourses.length === 0 ? (
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-edu-purple/10 text-edu-purple">
                          {course.category}
                        </span>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                          {course.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{course.instructor}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Book className="h-4 w-4" />
                          <span>{course.enrolled} students</span>
                        </div>
                      </div>
                      <Button className="w-full bg-edu-purple hover:bg-edu-dark-purple" asChild>
                        <Link to={`/course/${course.id}`}>View Course</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
