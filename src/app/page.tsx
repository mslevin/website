import Image from "next/image";
import Link from "next/link";
import { urls } from "./data";

export default function Home() {
  return (
    <article>
      <section>
        <p>
          I&apos;m Michael, an engineer at{" "}
          <a target="_blank" href="https://www.meter.com">
            Meter 
          </a>
          .
        </p>
        <p>
          Growing up in Sunnyvale, I was surrounded by tech from a young age,
          and have always enjoyed tinkering, modifying, breaking, and sometimes
          fixing things. My first job was an internship where I spent a summer
          doing IT Helpdesk Support. This was a challenging and truly formative
          experience for me, and laid a foundation for the customer-focused
          career I lead today. Empathy is a hugely underrated skill in
          engineering.
        </p>
        <p>
          When I&apos;m not at the computer I&apos;m usually driving, fixing,{" "}
          <a target="_blank" href="https://youtu.be/iqFAuFdM_q0">
            racing
          </a>
          , breaking, buying, or selling cars. I&apos;m a man of many hobbies,
          but I&apos;ll always be a car guy first.
        </p>
        <section>
          <Link href="/thoughts" className="">
            <h3 id="epigraphs">thoughts</h3>
          </Link>
          {/* <Link href="/things" className="">
            <h3 id="things">things</h3>
          </Link>
          <Link href="/cars" className="">
            <h3 id="cars">cars</h3>
          </Link> */}
        </section>
      </section>
    </article>
  );
}
