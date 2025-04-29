
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Calendar, User } from 'lucide-react';

const blogCategories = [
  "All",
  "Learning Tips",
  "Accessibility",
  "Technology",
  "Student Success",
  "Career Development",
  "Education Trends"
];

const blogPosts = [
  {
    id: 1,
    title: "Building an Inclusive Learning Environment: 5 Key Strategies",
    excerpt: "Discover practical approaches to create educational spaces that welcome and support all students, regardless of their abilities or backgrounds.",
    category: "Accessibility",
    author: "Dr. Emily Chen",
    date: "April 25, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "Mastering Online Learning: Time Management Techniques That Work",
    excerpt: "Learn effective strategies to manage your time while studying online, boost productivity, and maintain a healthy work-life balance.",
    category: "Learning Tips",
    author: "James Wilson",
    date: "April 22, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "The Rise of AI in Education: Benefits and Challenges",
    excerpt: "Explore how artificial intelligence is transforming education, from personalized learning experiences to new accessibility features.",
    category: "Technology",
    author: "Sophia Rodriguez",
    date: "April 18, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    title: "From Student to Professional: Bridging the Skills Gap",
    excerpt: "Insights on how education needs to evolve to prepare students for the rapidly changing job market and emerging career paths.",
    category: "Career Development",
    author: "Marcus Johnson",
    date: "April 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    title: "The Power of Community Learning: Success Stories",
    excerpt: "Read inspiring stories of students who thrived through collaborative learning environments and peer support systems.",
    category: "Student Success",
    author: "Aisha Patel",
    date: "April 10, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 6,
    title: "Screen Readers and Course Content: A Guide for Educators",
    excerpt: "Learn how to create course materials that are fully compatible with screen readers and other assistive technologies.",
    category: "Accessibility",
    author: "David Kim",
    date: "April 5, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
];

const featuredPost = {
  id: 0,
  title: "The Future of Education: Hybrid Learning Models Post-Pandemic",
  excerpt: "An in-depth analysis of how educational institutions are transforming their approaches by combining the best aspects of in-person and remote learning to create more flexible, accessible, and effective educational experiences for all students.",
  category: "Education Trends",
  author: "Dr. Michael Chen",
  date: "April 28, 2025",
  readTime: "10 min read",
  image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
};

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    // Filter by category
    if (selectedCategory !== "All" && post.category !== selectedCategory) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-edu-purple/90 to-edu-blue/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Edu-Able Blog</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Educational insights, success stories, and learning resources for our community.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
        <div className="bg-white rounded-xl overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="h-64 lg:h-auto">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-edu-purple/10 text-edu-purple">
                  {featuredPost.category}
                </span>
                <span className="ml-3 text-gray-500 text-sm flex items-center">
                  <Calendar className="h-4 w-4 mr-1" /> {featuredPost.date}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
              <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <User className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-gray-500 text-sm">{featuredPost.author}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                </div>
                <Button className="bg-edu-purple hover:bg-edu-dark-purple">
                  Read Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Listings with Filters */}
      <section className="py-8 pb-16 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between mb-8">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((category, index) => (
                <Button 
                  key={index}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-edu-purple hover:bg-edu-dark-purple" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-edu-purple"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-edu-purple/10 text-edu-purple">
                      {post.category}
                    </span>
                    <span className="ml-auto text-gray-500 text-sm">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" /> {post.author}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline">
              Load More Articles
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;
