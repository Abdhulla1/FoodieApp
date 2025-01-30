"use client";
import Link from "next/link";

import classes from "./navlinks.module.css";
import { usePathname } from "next/navigation";

export default function navlinks({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
