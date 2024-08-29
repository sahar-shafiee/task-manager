import Link from "next/link";

export default function Home() {
  return (
    <main className="w-10/12 mx-auto py-40 flex justify-center gap-3">
      <div className="w-1/4 h-40 bg-teal-400 rounded-md flex justify-center items-center">
        <Link href="/task">داشبورد</Link>
      </div>
      <div className="w-1/4 h-40 bg-teal-400 rounded-md flex justify-center items-center">
        <Link href="/task">مدیریت وظایف</Link>
      </div>
      <div className="w-1/4 h-40 bg-teal-400 rounded-md flex justify-center items-center">
        <Link href="/task">گالری</Link>
      </div>
    </main>
  );
}
