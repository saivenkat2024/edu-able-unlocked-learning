
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Learning Platform', path: '/learning' },
  { label: 'Community', path: '/community' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-edu-purple to-edu-blue">
                Edu-Able
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                to={item.path}
                className="text-sm font-medium text-gray-700 hover:text-edu-purple animated-underline py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button variant="default" size="sm">
                  Sign up
                </Button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 hover:text-edu-purple focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-base font-medium text-gray-700 hover:text-edu-purple py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <SignedIn>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Your Account</span>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                </SignInButton>
                <SignInButton mode="modal">
                  <Button variant="default" className="w-full">
                    Sign up
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
