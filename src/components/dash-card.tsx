import Link from "next/link";

export default function DashCards({
  number,
  color,
  date,
  status,
  society,
}: {
  number: number;
  color: string;
  date?: string;
  status?: string;
  society?: string;
}) {
  date = date ? new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }) : '';
  society = society ? society.charAt(0).toUpperCase() + society.slice(1) : "";

  return (
    <div
      className={`flex flex-col rounded-xl ${color} p-3 h-48 justify-center`}
    >
      <div className="p-3">
        <div className="flex flex-col pb-16">
          <h1 className="text-xl font-semibold font-space-grotesk dark:text-black">${number}</h1>
          <a className="text-sm text-neutral-500">{date}</a>
        </div>
        <div className="flex flex-row">
          <a className="text-sm text-neutral-500">{society}</a>
          {status === "paid" ? (
            <div className="text-right w-full">
              <a className="text-sm text-emerald-600">Payé</a>
            </div>
          ) : (
            <div className="text-right w-full">
              <a className="text-sm text-red-500">Impayé</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function CarCards({
  name,
  date,
  price,
  color,
}: {
  name: string;
  date: string;
  price: number;
  color: string;
}) {
  //make the price look like a distance in km eg 1,000,000 => 1,000km
  const price2 = (price / 1000).toFixed(1);

  name = name.charAt(0).toUpperCase() + name.slice(1);
  name = name.replace(/([a-z])([0-9])/i, "$1 $2");

  return (
    <div className="flex flex-col rounded-xl bg-zinc-100 p-3 h-36 justify-center">
      <div className="p-3">
        <div className={`border-l-2 flex flex-col ${color} mb-3`}>
          <div className="pl-8">
            <h1 className="text-lg font-semibold font-space-grotesk dark:text-black">{name}</h1>
            <a className="text-sm text-neutral-500">{date}</a>
          </div>
        </div>
        <div className="border-t border-t-neutral-500">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-sm pt-3 text-neutral-500">Distance</h1>
            <h1 className="text-md font-semibold pt-3">{price2}km</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Finances({
  text,
  number,
  boolean,
}: {
  text: string;
  number: number;
  boolean?: boolean;
}) {
  return (
    <div className="flex flex-col rounded-xl bg-stone-100 p-3 h-32 justify-center">
      {boolean ? (
        <a className="text-2xl font-bold font-space-grotesk pb-4 dark:text-black">{number}</a>
      ) : (
        <a className="text-2xl font-bold font-space-grotesk pb-4 dark:text-black">${number}</a>
      )}
      <a className="text-sm text-neutral-500">{text}</a>
    </div>
  );
}

export function CharSelector({
  nom,
  age,
  href,
} : {
  nom: string;
  age: string;
  href: string;
}) {
  return (
    <Link href={href} className="flex flex-col rounded-xl bg-zinc-100 dark:bg-neutral-900 p-3 h-36 justify-center hover:scale-105 duration-300">
      <div className="p-3">
        <div className="flex flex-col mb-3">
          <div className="pl-8">
            <h1 className="text-lg font-semibold font-space-grotesk">{nom}</h1>
            <a className="text-sm text-neutral-500">Du : {age}</a>
          </div>
        </div>
        <div className="border-t border-t-neutral-500">
          <div className="flex flex-row justify-end">
            <a className="text-md font-semibold pt-3">Voir ➜</a>
          </div>
        </div>
      </div>
    </Link>
  );
}
