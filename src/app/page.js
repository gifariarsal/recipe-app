import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Recipe App</h1>
      <Link href="/recipes"></Link>
    </div>
  );
}
