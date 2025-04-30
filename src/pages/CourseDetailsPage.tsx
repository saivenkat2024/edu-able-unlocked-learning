
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CourseRegistrationDialog } from "@/components/courses/CourseRegistrationDialog";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

// Mock data for now - in a real app, this would come from your API/backend
const mockCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
    image: "/placeholder.svg",
    duration: "8 weeks",
    level: "Beginner",
    price: "$299",
    instructor: "Jane Smith",
    startDate: "June 15, 2025",
    curriculum: [
      "HTML Fundamentals",
      "CSS Styling",
      "JavaScript Basics",
      "Responsive Design",
      "Web Accessibility",
      "Version Control with Git",
      "Deployment Basics",
      "Final Project"
    ]
  },
  {
    id: 2,
    title: "Advanced React Development",
    description: "Take your React skills to the next level with advanced patterns and techniques.",
    image: "/placeholder.svg",
    duration: "10 weeks",
    level: "Intermediate/Advanced",
    price: "$499",
    instructor: "John Doe",
    startDate: "July 10, 2025",
    curriculum: [
      "React Hooks Deep Dive",
      "State Management Solutions",
      "Performance Optimization",
      "Server Components",
      "Testing React Applications",
      "Authentication Patterns",
      "Animations and Effects",
      "Full-Stack Integration",
      "Deployment Strategies",
      "Capstone Project"
    ]
  },
  // Add more mock courses as needed
];

const fetchCourse = async (id: string) => {
  // In a real app, you would fetch the course data from your API
  // For now, we'll use the mock data
  const numId = parseInt(id);
  const course = mockCourses.find(course => course.id === numId);
  
  if (!course) {
    throw new Error("Course not found");
  }
  
  return course;
};

const checkEnrollmentStatus = async (courseId: string) => {
  try {
    // Check if there are any registrations for this course by the current email
    const { data } = await supabase
      .from("course_registrations")
      .select("*")
      .eq("course_id", parseInt(courseId))
      .limit(1);
    
    return data && data.length > 0;
  } catch (error) {
    console.error("Error checking enrollment status:", error);
    return false;
  }
};

export default function CourseDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const courseId = id || "1"; // Default to the first course if no ID is provided

  const { data: course, isLoading: courseLoading, error: courseError } = useQuery({
    queryKey: ["course", courseId],
    queryFn: () => fetchCourse(courseId)
  });

  const { data: isEnrolled, isLoading: enrollmentLoading } = useQuery({
    queryKey: ["enrollment", courseId],
    queryFn: () => checkEnrollmentStatus(courseId),
    retry: false
  });

  if (courseLoading) {
    return (
      <div className="container mx-auto py-12">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="h-64 bg-gray-200 rounded mb-6"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (courseError || !course) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Course</h1>
        <p className="text-gray-600">
          We couldn't find the course you're looking for. Please try again or browse our other courses.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          
          <div className="mb-8">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Course Description</h2>
            <p className="text-gray-700">{course.description}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
            <ul className="list-disc pl-6 space-y-2">
              {course.curriculum.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border p-6 shadow-sm sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Course Details</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{course.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Level:</span>
                <span className="font-medium">{course.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Instructor:</span>
                <span className="font-medium">{course.instructor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Start Date:</span>
                <span className="font-medium">{course.startDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-bold text-lg">{course.price}</span>
              </div>
            </div>
            
            {isEnrolled ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 mb-4">
                <CheckCircle className="text-green-600 h-5 w-5" />
                <div>
                  <p className="font-medium text-green-700">You are enrolled!</p>
                  <p className="text-sm text-green-600">You have registered for this course</p>
                </div>
              </div>
            ) : (
              <CourseRegistrationDialog courseId={course.id} courseName={course.title} />
            )}
            
            {isEnrolled && (
              <Badge variant="outline" className="mt-4 w-full justify-center py-2 border-green-200 text-green-700 font-medium">
                Registered
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
