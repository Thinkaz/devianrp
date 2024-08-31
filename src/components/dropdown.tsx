"use client";

import { useState } from "react";
import Image from "next/image";

const Dropdown = ({
  children,
  image,
}: {
  children: React.ReactNode;
  image?: string;
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowDropdown(false);
    }, 190);
  };

  return (
    <div className="relative">
      <Image
        src={image || "/default-avatar.png"}
        alt="Avatar"
        width={32}
        height={32}
        className="rounded-md hover:cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showDropdown && (
        <div
          className="absolute top-14 -right-8 bg-neutral-100 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-900 rounded-md w-64 z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
