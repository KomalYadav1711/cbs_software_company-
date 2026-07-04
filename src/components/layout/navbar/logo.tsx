import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-slate-900"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-extrabold shadow-md shadow-blue-500/20">
        C
      </div>
      <span className="font-heading">
        CBS <span className="text-blue-600">Software</span>
      </span>
    </Link>
  );
}