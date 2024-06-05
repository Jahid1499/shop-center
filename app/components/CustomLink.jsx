"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ category }) {
  const pathName = usePathname();
  const active = pathName === `/categories/${category}`;
  console.log(pathName);
  return (
    <>
      <Link href={`/categories/${category}`}>
        <button
          className={`
          ${active ? "border-b" : ""}
          hover:border-b capitalize border-black block h-6 box-border mt-5`}
        >
          {category}
        </button>
      </Link>
    </>
  );
}
