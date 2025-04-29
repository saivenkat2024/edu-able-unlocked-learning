
import React, { useEffect } from 'react';

const KeyboardFocusManager: React.FC = () => {
  useEffect(() => {
    // Track whether the user is using a keyboard to navigate
    let usingKeyboard = false;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        usingKeyboard = true;
        document.body.classList.add('using-keyboard');
      }
    };

    const handleMouseDown = () => {
      usingKeyboard = false;
      document.body.classList.remove('using-keyboard');
    };

    // Add event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default KeyboardFocusManager;
