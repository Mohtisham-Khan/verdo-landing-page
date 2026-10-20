import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#FBFADD] px-6 text-center text-[#034F46]">
      <p
        style={{
          fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
          fontSize: "64px",
          lineHeight: 1,
          margin: 0,
        }}
      >
        404
      </p>
      <p className="text-lg">This page could not be found.</p>
      <Link href="/" className="underline underline-offset-4">
        Back to homepage
      </Link>
    </main>
  );
}
