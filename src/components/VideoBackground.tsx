'use client';

import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  className?: string;
}

export default function VideoBackground({ className = '' }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className={`fixed inset-0 w-full h-full overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/assets/bg-web.png"
      >
        <source src="/assets/landing_desktop.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <img 
          src="/assets/bg-web.png" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
} 