'use client';

import Image from 'next/image';

interface CenteredCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function CenteredCard({ children, className = '' }: CenteredCardProps) {
  return (
    <div className={`relative w-full max-w-[489px] mx-auto ${className}`}>
      {/* Background Image Container */}
      <div className="relative w-full h-auto md:h-[372px] rounded-[42px] overflow-hidden">
        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/assets/bg-web.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Mobile Background */}
        <div className="md:hidden absolute inset-0">
          <Image
            src="/assets/bg-mobile.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay for better content readability */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[300px] md:h-[372px] p-6">
          <div className="text-center text-white w-full h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 