import type { Metadata } from "next";
import "./globals.css";
import "./tufte.css";
import Image from "next/image";
import Link from "next/link";
import { urls } from "./data";

export const metadata: Metadata = {
  title: "Michael Slevin",
  description: "Michael Slevin's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bytes = [
    109, 105, 99, 104, 97, 101, 108, 115, 108, 101, 118, 105, 110, 49, 49, 64,
    103, 109, 97, 105, 108, 46, 99, 111, 109,
  ];
  const address = String.fromCharCode(...bytes);
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="p-8 gap-8 flex">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/img/me.jpeg"
                alt="Me, standing in front of a flower bush."
                width={200}
                height={200}
                priority
              />
            </Link>
            <div className="flex gap-1">
              <div>
                <div className="text-2xl font-bold">Michael Slevin</div>
                <div className="text-sm pb-2">
                  <div>Software Engineer</div>
                  <div>Berkeley, CA</div>
                  <div>B.S. Computer Science</div>
                  <div>Cal Poly San Luis Obispo</div>
                  <div>{address}</div>
                </div>
                <a href="/files/Michael Slevin Resume 2025.pdf" download>
                  Resume
                </a>
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
          <div className="w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
