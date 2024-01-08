"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();

  return (
    <header>
      <Link href="/" className={pathname === "/" ? "is-active" : ""}>
        Home
      </Link>
      <Link
        href="/client-only"
        className={pathname === "/client-only" ? "is-active" : ""}
      >
        Client-Only
      </Link>
      <style jsx>{`
        header {
          margin-bottom: 25px;
        }
        a {
          font-size: 14px;
          margin-right: 15px;
          text-decoration: none;
        }
        .is-active {
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
}
