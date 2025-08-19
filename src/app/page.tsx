"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const bytes = [
    109, 105, 99, 104, 97, 101, 108, 115, 108, 101, 118, 105, 110, 49, 49, 64,
    103, 109, 97, 105, 108, 46, 99, 111, 109,
  ];
  const address = String.fromCharCode(...bytes);
  return (
    <main>
      <div className="flex font-[Times_New_Roman] p-8 gap-8">
        <div className="flex gap-4">
          <Image
            className="dark:invert"
            src="/img/flowers_crop.jpeg"
            alt="Me, standing in front of a flower bush."
            width={300}
            height={38}
            priority
          />
          <div className="flex gap-1">
            <div>
              <div className="text-2xl font-bold">Michael Slevin</div>
              <div className="text-sm pb-2">
                <div>Software Engineer and Car Enthusiast</div>
                <div>B.S. Computer Science, Cal Poly, San Luis Obispo</div>
                <div>Berkeley, CA</div>
                <div>{address}</div>
              </div>
              <div className="flex flex-col">
                <a
                  href="https://www.linkedin.com/in/michaelslevin11/"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/mslevin"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/michael_slevin/"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  Instagram
                </a>
                <a
                  href="https://www.imnotspeeding.com"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  imnotspeeding.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>Content</div>
      </div>
    </main>
  );
}
