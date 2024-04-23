import "@/styles/global.css";

export default function Home() {
  return (
    <main>
      <div className="absolute inset-0 flex justify-center items-center">
        <video className="" autoPlay loop>
          <source src="/vids/Kaia_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="hover:bg-yellow bg-red cursor-pointer border rounded-xl border-[1.5px] px-5 pb-1 transition-colors">
          <p className="text-base">
            <strong>more</strong>
          </p>
        </div>
      </div>
    </main>
  );
}
