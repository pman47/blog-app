import Image from "next/image";
import profilePic from "@/public/profile.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between md:p-24">
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between md:p-5">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:max-w-[70%]">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I am John,
            <br />
            Creative Technologist
          </h1>
          <p className="mb-6 md:max-w-[70%]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="bg-red-500 text-white py-2 px-4 rounded">
            Download Resume
          </button>
        </div>
        <div className="w-full md:max-w-[30%] relative flex items-center justify-center p-12">
          <Image
            className="rounded-full object-contain flex-1"
            src={profilePic}
            alt="Profile"
          />
        </div>
      </div>
    </main>
  );
}
