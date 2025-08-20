import Link from "next/link";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 justify-center w-[90%] mx-auto">
      <Link href="/" className="">
        home
      </Link>
      {children}
    </div>
  );
}
