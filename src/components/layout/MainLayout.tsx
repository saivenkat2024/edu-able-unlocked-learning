
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import KeyboardFocusManager from '@/components/accessibility/KeyboardFocusManager';
import AccessibilityControls from '@/components/accessibility/AccessibilityControls';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <KeyboardFocusManager />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <AccessibilityControls />
      <Footer />
    </div>
  );
};

export default MainLayout;
