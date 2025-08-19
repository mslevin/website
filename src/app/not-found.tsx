import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center pt-10">
      <div className="flex flex-col items-center justify-center">
        <p className="">there&apos;s nothing here</p>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
