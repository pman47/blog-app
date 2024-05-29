import Image from "next/image";
import profilePic from "@/public/profile.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
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
          <button className="bg-red-500 text-white py-2 px-4 rounded">
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
      <div className="bg-[#EDF7FA] w-full mt-9 md:mt-0">
        <div className="container my-5 md:px-28">
          <p className="text-lg">Recent posts</p>
          <div className="flex flex-row items-start justify-start gap-4 w-full mt-3 flex-wrap">
            <Card className="flex-1 max-w-96 border-none rounded-none min-w-60">
              <CardHeader>
                <CardTitle className="font-bold leading-8">
                  Making a design system from scratch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>12 Feb 2020 | Design, Pattern</p>
              </CardContent>
              <CardFooter>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </CardFooter>
            </Card>
            <Card className="flex-1 max-w-96 border-none rounded-none min-w-60">
              <CardHeader>
                <CardTitle className="font-bold leading-8">
                  Creating pixel perfect icons in Figma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>12 Feb 2020 | Figma, Icon Design</p>
              </CardContent>
              <CardFooter>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </CardFooter>
            </Card>
            <Card className="flex-1 max-w-96 border-none rounded-none min-w-60">
              <CardHeader>
                <CardTitle className="font-bold leading-8">
                  Creating pixel perfect icons in Figma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>12 Feb 2020 | Figma, Icon Design</p>
              </CardContent>
              <CardFooter>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
