import "@/styles/global.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  function playVideo() {
    if (video) {
      video.muted = false;
      video.play();
      setShowMore(true);
    }
  }
  return (
    <main>
      <div className="absolute inset-0 flex justify-center items-center">
        <video
          ref={(el) => setVideo(el)}
          className="md:h-screen md:w-auto h-auto w-screen"
          loop
        >
          <source src="/vids/kaia.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className={`${
          isFlipped ? "scale-x-[-1]" : ""
        } absolute flex justify-center items-end w-screen h-screen `}
      >
        <Image
          className=" w-[20vw] h-auto"
          src="/imgs/hamster.png"
          width={100}
          height={100}
          alt="hamster"
        />
      </div>

      <div className="absolute inset-0 flex justify-center items-center">
        {showMore ? (
          <Link
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            href="/kaia"
            className="hover:bg-yellow bg-red cursor-pointer border rounded-xl border-[1.5px] px-5 pb-1 transition-colors"
          >
            <p className="text-xs">
              <strong>more</strong>
            </p>
          </Link>
        ) : (
          <button
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={playVideo}
            className="hover:bg-yellow bg-red cursor-pointer border rounded-xl border-[1.5px] px-5 pb-1 transition-colors"
          >
            <p className="text-xs">
              <strong>secret!</strong>
            </p>
          </button>
        )}
      </div>
    </main>
  );
}
