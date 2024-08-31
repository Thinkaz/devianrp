import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faBook, faCode } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

export default function Card({
  title,
  subtitle,
  icon,
  to,
}: {
  title: string;
  subtitle: string;
  icon: any;
  to: string;
}) {

    if(icon == "faBook") {
        icon = faBook;
    } else if(icon == "faCode") {
        icon = faCode;
    } else if(icon == "faTwitch") {
        icon = faTwitch;
    }

  return (
    <Link href={to} className="bg-purple-100 group dark:bg-neutral-900 h-32 rounded border border-purple-200 dark:border-neutral-800 hover:bg-purple-200 hover:dark:bg-neutral-800 transition-all duration-150">
      <div className="flex mt-3">
        <div className="justify-center items-start w-1/4 pl-4 pt-2">
            <FontAwesomeIcon
                icon={icon}
                className="text-2xl text-neutral-500 group-hover:scale-105 duration-200"
            />
        </div>
        <div className="flex flex-col justify-center items-start w-2/3">
          <h1 className="text-md font-semibold font-space-grotesk pb-1">{title}</h1>
          <p className="text-sm w-5/6">{subtitle}</p>
        </div>
        <div className="flex-grow -ml-3 text-neutral-700 group-hover:text-neutral-800 group-hover:dark:text-neutral-400 group-hover:translate-x-1 duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="sbui-icon"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </Link>
  );
}
