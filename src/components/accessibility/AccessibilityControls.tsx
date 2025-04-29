
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { 
  Volume, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Accessibility,
  Mic,
  MicOff 
} from 'lucide-react';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface AccessibilityControlsProps {
  className?: string;
}

const AccessibilityControls = ({ className = '' }: AccessibilityControlsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [textSize, setTextSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(false);
  const [voiceToText, setVoiceToText] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognitionInstance, setRecognitionInstance] = useState<any>(null);
  const { toast } = useToast();

  // Apply accessibility settings
  useEffect(() => {
    // Apply text size
    const htmlElement = document.documentElement;
    
    // Remove any existing size classes
    htmlElement.classList.remove('text-size-small', 'text-size-medium', 'text-size-large', 'text-size-xl');
    
    // Add the new size class
    htmlElement.classList.add(`text-size-${textSize}`);
    
    // Apply high contrast
    if (highContrast) {
      htmlElement.classList.add('high-contrast');
    } else {
      htmlElement.classList.remove('high-contrast');
    }
    
    // Store settings in localStorage
    localStorage.setItem('edu-able-accessibility', JSON.stringify({
      textSize,
      highContrast,
      textToSpeech,
      voiceToText
    }));
  }, [textSize, highContrast, textToSpeech, voiceToText]);

  // Load saved settings on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('edu-able-accessibility');
    if (savedSettings) {
      try {
        const { textSize: savedSize, highContrast: savedContrast, textToSpeech: savedTTS, voiceToText: savedVTT } = JSON.parse(savedSettings);
        setTextSize(savedSize || 'medium');
        setHighContrast(savedContrast || false);
        setTextToSpeech(savedTTS || false);
        setVoiceToText(savedVTT || false);
      } catch (e) {
        console.error('Error parsing accessibility settings:', e);
      }
    }
  }, []);

  const toggleTextToSpeech = () => {
    setTextToSpeech(!textToSpeech);
    toast({
      title: textToSpeech ? "Text-to-Speech disabled" : "Text-to-Speech enabled",
      description: textToSpeech ? "The content will no longer be read aloud." : "The content will now be read aloud when focused.",
    });
  };

  const toggleVoiceToText = () => {
    if (voiceToText) {
      setVoiceToText(false);
      stopListening();
      toast({
        title: "Voice-to-Text disabled",
        description: "Voice input has been turned off.",
      });
    } else {
      setVoiceToText(true);
      toast({
        title: "Voice-to-Text enabled",
        description: "You can now use voice input on text fields.",
      });
    }
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognitionAPI();
      
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      
      recognition.onstart = () => {
        setIsListening(true);
        toast({
          title: "Voice recognition active",
          description: "Start speaking now...",
        });
      };
      
      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        
        // Find the active element and fill it with the transcript if it's an input or textarea
        const activeElement = document.activeElement as HTMLInputElement | HTMLTextAreaElement;
        if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
          activeElement.value = transcript;
          // Create and dispatch an input event to trigger React's onChange
          const event = new Event('input', { bubbles: true });
          activeElement.dispatchEvent(event);
        }
      };
      
      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
        toast({
          title: "Voice recognition error",
          description: `Error: ${event.error}`,
          variant: "destructive"
        });
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
      setRecognitionInstance(recognition);
    } else {
      toast({
        title: "Voice Recognition Unavailable",
        description: "Your browser doesn't support voice recognition.",
        variant: "destructive"
      });
    }
  };
  
  const stopListening = () => {
    if (recognitionInstance) {
      recognitionInstance.stop();
      setIsListening(false);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const changeTextSize = (size: string) => {
    setTextSize(size);
    toast({
      title: `Text size changed to ${size}`,
      description: "Text size preference has been updated.",
    });
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    toast({
      title: highContrast ? "High contrast mode disabled" : "High contrast mode enabled",
      description: highContrast ? "Display has returned to standard contrast." : "Higher contrast applied to improve readability.",
    });
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <Collapsible 
        open={isExpanded} 
        onOpenChange={setIsExpanded}
        className="bg-white rounded-lg shadow-lg border border-gray-200"
      >
        <CollapsibleTrigger asChild>
          <Button variant="default" size="icon" className="bg-edu-purple hover:bg-edu-dark-purple rounded-full h-12 w-12">
            <Accessibility className="h-6 w-6" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 space-y-4 min-w-[300px]">
          <div>
            <h3 className="font-medium mb-2">Text Size</h3>
            <div className="flex items-center gap-2">
              <Button 
                variant={textSize === 'small' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => changeTextSize('small')}
                className={textSize === 'small' ? 'bg-edu-purple hover:bg-edu-dark-purple' : ''}
              >
                A<sup>-</sup>
              </Button>
              <Button 
                variant={textSize === 'medium' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => changeTextSize('medium')}
                className={textSize === 'medium' ? 'bg-edu-purple hover:bg-edu-dark-purple' : ''}
              >
                A
              </Button>
              <Button 
                variant={textSize === 'large' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => changeTextSize('large')}
                className={textSize === 'large' ? 'bg-edu-purple hover:bg-edu-dark-purple' : ''}
              >
                A<sup>+</sup>
              </Button>
              <Button 
                variant={textSize === 'xl' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => changeTextSize('xl')}
                className={textSize === 'xl' ? 'bg-edu-purple hover:bg-edu-dark-purple' : ''}
              >
                A<sup>++</sup>
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleHighContrast}
              className="w-full justify-start"
            >
              {highContrast ? <Eye className="h-4 w-4 mr-2" /> : <EyeOff className="h-4 w-4 mr-2" />}
              {highContrast ? 'Standard Contrast' : 'High Contrast'}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleTextToSpeech}
              className="w-full justify-start"
            >
              {textToSpeech ? <VolumeX className="h-4 w-4 mr-2" /> : <Volume className="h-4 w-4 mr-2" />}
              {textToSpeech ? 'Disable Text-to-Speech' : 'Enable Text-to-Speech'}
            </Button>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleVoiceToText}
              className="w-full justify-start"
            >
              <div className="flex items-center">
                {voiceToText ? <MicOff className="h-4 w-4 mr-2" /> : <Mic className="h-4 w-4 mr-2" />}
                {voiceToText ? 'Disable Voice Input' : 'Enable Voice Input'}
              </div>
            </Button>

            {voiceToText && (
              <Button 
                variant={isListening ? "default" : "outline"}
                size="sm" 
                onClick={toggleListening}
                className={`w-full justify-start ${isListening ? 'bg-edu-purple hover:bg-edu-dark-purple' : ''}`}
              >
                {isListening ? <MicOff className="h-4 w-4 mr-2" /> : <Mic className="h-4 w-4 mr-2" />}
                {isListening ? 'Stop Listening' : 'Start Listening'}
              </Button>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default AccessibilityControls;
