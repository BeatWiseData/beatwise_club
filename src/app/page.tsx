import VideoBackground from "@/components/VideoBackground";
import CenteredCard from "@/components/CenteredCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen" role="main">
      <VideoBackground />

      {/* Centered Card with Responsive Background */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-8">
        <CenteredCard>
          <div className="space-y-6 w-full h-full" role="region" aria-label="Main content">
            <div className="flex flex-col h-full w-full">
              <div className="font-bold text-2xl text-black flex-1 flex flex-row items-center justify-between mt-2">
                <div>
                  <Image src="black_logo.svg" alt="Logo" width={50} height={50} />
                </div>
                <div className="flex flex-row gap-2 sm:gap-3 w-full justify-end" role="navigation" aria-label="Social media links">
                  <a href="https://x.com/StartVibin" target="_blank" rel="noopener noreferrer" className="w-auto bg-gray-200 text-black py-1 px-2 sm:py-1 sm:px-2 rounded-full cursor-pointer" aria-label="Follow us on X/Twitter (opens in new tab)">
                    <p className="text-[11px] sm:text-xs font-medium">X/Twitter</p>
                  </a>
                  <a href="https://t.me/StartVibin" target="_blank" rel="noopener noreferrer" className="w-auto bg-gray-200 text-black py-1 px-2 sm:py-1 sm:px-2 rounded-full cursor-pointer" aria-label="Join our Telegram channel (opens in new tab)">
                    <p className="text-[11px] sm:text-xs font-medium">Telegram</p>
                  </a>
                  <a href="https://docs.startvibin.io/" target="_blank" rel="noopener noreferrer" className="w-auto bg-gray-200 text-black py-1 px-2 sm:py-1 sm:px-2 rounded-full cursor-pointer" aria-label="View our GitHub repository (opens in new tab)">
                    <p className="text-[11px] sm:text-xs font-medium">Documentation</p>
                  </a>
                </div>
              </div>
              <div className=" flex-2 mt-5">
                <p className="text-black text-4xl text-5xl-at-500 font-medium text-left">
                  Unlock the Value <br/>
                  of Your Listening
                </p>
                <p className="text-gray-600 text-lg text-xl-at-500 font-medium text-left mt-4 pr-10">
                  Vibin&apos; makes your music data work for you, not for platforms. Private. Secure. Yours.
                </p>
              </div>
              <div className="font-bold text-2xl text-black flex-1 flex flex-row gap-2 justify-between mt-6 mb-1" role="group" aria-label="Action buttons">
                <button className="flex-1 bg-gray-200 text-black py-3 px-3 sm:py-2 sm:px-3 rounded-l-full rounded-r-none text-left" aria-label="Enter invitation code">
                  <p className="text-[13px] sm:text-sm font-medium">Invitation Code</p>
                </button>
                <button className="flex-1 bg-gray-200 text-black py-3 px-3 sm:py-2 sm:px-3 rounded-l-none rounded-r-full text-right" aria-label="Open dashboard">
                  <p className="text-[13px] sm:text-sm font-medium">Open Dashboard</p>
                </button>
              </div>
            </div>
          </div>
        </CenteredCard>
      </div>
    </div>
  );
}
