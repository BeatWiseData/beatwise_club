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
              <div className="font-bold text-2xl text-black flex-1 flex flex-col sm:flex-row items-center justify-between">
                <div>
                  <Image src="logo.svg" alt="Logo" width={50} height={50} />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-0 w-full sm:justify-end">
                  <button className="w-full sm:w-auto bg-gray-200 text-black py-2 px-4 rounded-full sm:ml-3">
                    <p className="text-sm font-medium">X/Twitter</p>
                  </button>
                  <button className="w-full sm:w-auto bg-gray-200 text-black py-2 px-4 rounded-full sm:ml-3">
                    <p className="text-sm font-medium">Telegram</p>
                  </button>
                  <button className="w-full sm:w-auto bg-gray-200 text-black py-2 px-4 rounded-full sm:ml-3">
                    <p className="text-sm font-medium">Github</p>
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
              <div className="font-bold text-2xl text-black flex-1 flex flex-col md:flex-row gap-3 justify-between mt-6 mb-3">
                <button className="flex-1 bg-gray-200 text-black py-1 px-4 rounded-full md:rounded-l-full md:rounded-r-none text-center md:text-left">
                  <p className="text-sm font-medium">Get Invitation Code</p>
                </button>
                <button className="flex-1 bg-gray-200 text-black py-1 px-4 rounded-full md:rounded-l-none md:rounded-r-full text-center md:text-right">
                  <p className="text-sm font-medium">Open Dashboard</p>
                </button>
              </div>
            </div>
          </div>
        </CenteredCard>
      </div>
    </div>
  );
}
