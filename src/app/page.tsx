import VideoBackground from "@/components/VideoBackground";
import CenteredCard from "@/components/CenteredCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <VideoBackground />

      {/* Centered Card with Responsive Background */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-8">
        <CenteredCard>
          <div className="space-y-6 w-full h-full">
            <div className="flex flex-col h-full w-full">
              <div className="font-bold text-2xl text-black flex-1 flex flex-row items-center justify-between">
                <div>
                  <Image src="logo.svg" alt="Logo" width={50} height={50} />
                </div>
                <div className="flex flex-row gap-2 sm:gap-3 w-full justify-end">
                  <button className="w-auto bg-gray-200 text-black py-1 px-2 sm:py-2 sm:px-4 rounded-full sm:ml-3">
                    <p className="text-[11px] sm:text-sm font-medium">X/Twitter</p>
                  </button>
                  <button className="w-auto bg-gray-200 text-black py-1 px-2 sm:py-2 sm:px-4 rounded-full sm:ml-3">
                    <p className="text-[11px] sm:text-sm font-medium">Telegram</p>
                  </button>
                  <button className="w-auto bg-gray-200 text-black py-1 px-2 sm:py-2 sm:px-4 rounded-full sm:ml-3">
                    <p className="text-[11px] sm:text-sm font-medium">GitHub</p>
                  </button>
                </div>
              </div>
              <div className=" flex-3 mt-4">
                <p className="text-black text-4xl text-5xl-at-500 font-medium text-left">
                  Unlock the Value <br/>
                  of Your Listening
                </p>
                <p className="text-gray-600 text-lg text-xl-at-500 font-medium text-left mt-4 pr-10">
                  Vibin&apos; makes your music data work for you, not for platforms. Private. Secure. Yours.
                </p>
              </div>
              <div className="font-bold text-2xl text-black flex-1 flex flex-row gap-2 justify-between mt-6 mb-3">
                <button className="flex-1 bg-gray-200 text-black py-2 sm:py-1 px-4 rounded-l-full rounded-r-none text-left">
                  <p className="text-xs sm:text-sm font-medium">Invitation Code</p>
                </button>
                <button className="flex-1 bg-gray-200 text-black py-2 sm:py-1 px-4 rounded-l-none rounded-r-full text-right">
                  <p className="text-xs sm:text-sm font-medium">Open Dashboard</p>
                </button>
              </div>
            </div>
          </div>
        </CenteredCard>
      </div>
    </div>
  );
}
