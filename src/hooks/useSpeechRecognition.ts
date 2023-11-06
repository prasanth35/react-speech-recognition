import { useEffect, useState } from "react";

type SpeechRecognitionHook = {
    speechText: string;
    isListening: boolean;
    startListening: () => void;
    stopListening: () => void;
    hasRecognitionSupport: boolean;
  };
  
  const useSpeechRecognition = (): SpeechRecognitionHook => {
  const [speechText, setSpeechText] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const recognition: SpeechRecognition | null = 
    'webkitSpeechRecognition' in window ? new webkitSpeechRecognition() : null;

  useEffect(() => {
    if (!recognition) return;
    
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      setSpeechText(event.results[0][0].transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      console.error(event.error);
    };
  }, [recognition]);

  const startListening = () => {
    if (!recognition) return;
    setSpeechText('');
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    if (!recognition) return;
    setIsListening(false);
    recognition.stop();
  };

  return {
    speechText,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport: !!recognition,
  };
};

export default useSpeechRecognition;
