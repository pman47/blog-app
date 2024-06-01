import Image from "next/image";
import profilePic from "@/public/profile.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const featuredWorks = [
  {
    title: "Designing Dashboards",
    year: "2020",
    tag: "Dashboard",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    img: "https://placehold.co/600x400/png",
  },
  {
    title: "Vibrant Portraits of 2020",
    year: "2018",
    tag: "Illustration",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    img: "https://placehold.co/600x400/png",
  },
  {
    title: "36 Days of Malayalam type",
    year: "2018",
    tag: "Typography",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    img: "https://placehold.co/600x400/png",
  },
];

const recentPosts = [
  {
    title: "Making a design system from scratch",
    date: "12 Feb 2020",
    tag: "Design, Pattern",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    tag: "Figma, Icon Design",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "36 Days of Malayalam type",
    date: "12 Feb 2020",
    tag: "Design, Pattern",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* Hero */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between md:p-28">
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
          <button className="bg-red-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-red-600">
            Download Resume
          </button>
        </div>
        <div className="w-60 md:max-w-[30%] relative flex items-center justify-center p-2">
          <Image
            className="rounded-full object-contain flex-1"
            src={profilePic}
            alt="Profile"
          />
        </div>
      </div>
      {/* Posts */}
      <div className="bg-[#EDF7FA] w-full mt-9 md:mt-0">
        <div className="container my-5 md:px-28">
          <p className="text-lg">Recent posts</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-3">
            {recentPosts.map((post) => (
              <Card
                className="border-none rounded-none transform hover:scale-105 transition duration-300"
                key={post.title}
              >
                <CardHeader>
                  <CardTitle className="font-bold leading-8">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    {post.date} | {post.tag}
                  </p>
                </CardContent>
                <CardFooter>
                  <p>{post.desc}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* Featured Works */}
      <div className="w-full mt-9 md:mt-0">
        <div className="container my-5 md:px-28 flex flex-col gap-5">
          <p className="text-lg">Featured works</p>
          <div className="w-full flex flex-col gap-6">
            {featuredWorks.map((work) => (
              <div
                className="flex flex-col sm:flex-row gap-4 border-b pb-6"
                key={work.title}
              >
                <div className="aspect-[4/3] w-full sm:w-60 relative rounded-md overflow-hidden">
                  <Image src={work.img} alt="work image" fill />
                </div>
                <div className="w-full flex flex-col gap-5">
                  <h2 className="text-3xl font-bold">{work.title}</h2>
                  <div className="flex flex-row gap-4">
                    <span className="bg-black text-white rounded-full font-bold px-3 py-1 text-sm">
                      {work.year}
                    </span>
                    <span className="text-gray-400 text-base">{work.tag}</span>
                  </div>
                  <div className="text-base">{work.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
