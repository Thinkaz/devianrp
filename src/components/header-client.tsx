"use client";

import { useEffect } from "react";

function setPadding(padding: string) {
  const header = document.getElementById("header");
  if (!header) return;
  header.classList.remove("py-3", "py-1");
  header.classList.add(padding);
}

export default function HeaderClient({ children } : { children: React.ReactNode }) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setPadding("py-1");
      } else {
        setPadding("py-3");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="header" className="fixed left-0 right-0 z-20 bg-neutral-100 dark:bg-neutral-950 dark:text-white transition-[padding] duration-300 py-3 bg-opacity-70 backdrop-blur-lg">
        {children}
    </div>
  );
}
