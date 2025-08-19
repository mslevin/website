import Image from "next/image";
import Link from "next/link";
import { urls } from "./data";

export default function Home() {
  const bytes = [
    109, 105, 99, 104, 97, 101, 108, 115, 108, 101, 118, 105, 110, 49, 49, 64,
    103, 109, 97, 105, 108, 46, 99, 111, 109,
  ];
  const address = String.fromCharCode(...bytes);
  return (
    <main className="font-[Times_New_Roman] p-8 gap-8 flex">
      <div className="flex flex-col gap-4">
        <Image
          src="/img/flowers_crop.jpeg"
          alt="Me, standing in front of a flower bush."
          width={200}
          height={200}
          priority
        />
        <div className="flex gap-1">
          <div>
            <div className="text-2xl font-bold">Michael Slevin</div>
            <div className="text-sm pb-2">
              <div>Software Engineer</div>
              <div>Berkeley, CA</div>
              <div>B.S. Computer Science</div>
              <div>Cal Poly, San Luis Obispo</div>
              <div>{address}</div>
            </div>
            <div className="flex flex-col">
              {urls.map((url) => (
                <a href={url.url} key={url.name}>
                  {url.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-4 justify-center w-[90%] mx-auto">
          <p>
            I&apos;m Michael, an engineer at{" "}
            <a target="_blank" href="https://www.complete.so">
              Complete
            </a>
            . While my focus in the past has been primarily on the frontend,
            I&apos;m always learning and I enjoy working across the stack. I
            started at Complete in August 2023, and have worked on every aspect
            of our stack and product offerings. Previously I worked at a startup
            in Berkeley called{" "}
            <a
              target="_blank"
              href="https://www.paymentsdive.com/news/grabango-ceases-operations/729589/"
            >
              Grabango
            </a>
            , where we were building computer-vision based retrofit solutions
            for cashierless checkout- think Amazon Go, but better and less evil.
          </p>
          <p>
            Growing up in Sunnyvale, I was surrounded by tech from a young age,
            and have always enjoyed tinkering, modifying, breaking, and
            sometimes fixing things. My first job was an internship where I
            spent a summer doing IT Helpdesk Support. This was a challenging and
            truly formative experience for me, and laid a foundation for the
            customer-focused career I lead today. Empathy is a hugely underrated
            skill in engineering.
          </p>
          <p>
            When I&apos;m not at the computer I&apos;m usually driving, fixing,{" "}
            <a target="_blank" href="https://youtu.be/iqFAuFdM_q0">
              racing
            </a>
            , breaking, buying, or selling cars. I&apos;m a man of many hobbies,
            but I&apos;ll always be a car guy first.
          </p>
          <Link href="/thoughts" className="text-lg ">
            thoughts
          </Link>
        </div>
      </div>
    </main>
  );
}
