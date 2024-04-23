import Image from "next/image";

export default function Kaia() {
  return (
    <div>
      <div className="absolute h-screen w-screen flex justify-center items-center">
        <video
          className="md:h-screen md:w-auto h-auto max-w-[100vw] "
          autoPlay
          //   controls
          loop
        >
          <source src="/vids/kaia2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className={` absolute flex justify-center items-end w-screen h-screen `}
      >
        <Image
          className=" w-[20vw] h-auto"
          src="/imgs/cake.svg"
          width={100}
          height={100}
          alt="hamster"
        />
      </div>
      {/* <div className="absolute flex h-auto w-screen justify-center items-center z-10">
        <video className="" autoPlay muted loop>
          <source src="/vids/flowers.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
}
