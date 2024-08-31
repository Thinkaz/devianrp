import Link from "next/link";

export default function Button({
  text,
  lien,
  emoji,
  title,
}: {
  text: string;
  lien: string;
  emoji: string;
  title: string;
}) {
  return (
    <Link
      className="flex flex-col rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:bg-opacity-60 transition duration-150 ease-in-out pt-2 pb-2"
      href={lien}
    >
      <div className="p-1">
        <div className="flex flex-row">
          <h1 className="text-base font-semibold">
            {emoji} {title}
          </h1>
        </div>
        <a className="text-sm text-neutral-500 dark:text-neutral-400">{text}</a>
      </div>
    </Link>
  );
}
