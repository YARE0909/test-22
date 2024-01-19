import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full min-h-screen h-full bg-black p-6 flex items-center justify-center relative">
      <div>
        <button
          className="border rounded-lg px-6 py-2"
          onClick={() => setShowModal(!showModal)}
        >
          Click Me
        </button>
      </div>
      {showModal && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pink-400 rounded-lg border z-50">
          <div className="relative z-[99] w-full h-full">
            {/* Close Button (X) */}
            <button
              className="absolute top-2 right-2 text-white cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              X
            </button>

            {/* Image */}
            <Image
              src="/assets/background2.png"
              alt="Your Image"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Overlay Text with Neobrutalist Style */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-6">
              <div className="bg-opacity-75 backdrop-filter backdrop-blur-lg p-4 border border-white rounded-md flex flex-col gap-5">
                <h1 className="text-white font-black text-4xl font-mono">
                  MANAAAAAAAAAAAAA
                </h1>
                <h1>I am sorry I made fun of u when u hurt urself :(</h1>
                <h1>You are soooooooooo cuteeeeee, soooooooooo hotttttt, soooooooooo amazing</h1>
                <h1>Here is some coffee and cute dogs to cheer u up :)</h1>
                <h1>I will always like you and never stop liking you cutie &lt;333333333333333</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
