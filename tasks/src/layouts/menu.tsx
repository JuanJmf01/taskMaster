// src/layouts/menu.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./css/menu.css";

export default function Menu({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className="menu">
        <div className="left-item">
          <Image
            src="/taskMasterLogo2.png"
            alt="TaskMaster Logo"
            width={130}
            height={35}
            priority
          />
        </div>

        <ul className="middle-item">
          <li>
            <Link
              href="/tasks"
              className={pathname === "/tasks" ? "active" : ""}
            >
              My leaves
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
        </ul>

        <div className="right-items">
          <Link href="/">Log out</Link>
        </div>
      </div>
      {children}
    </>
  );
}
