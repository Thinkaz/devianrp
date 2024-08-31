import { allChangelogs } from "contentlayer/generated";
import Link from "next/link";

export default function TtChangelogs() {
  const changelogs = allChangelogs.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-center gap-0 pb-5">
        <h1 className="text-7xl font-bold tracking-wide font-space-grotesk">
          ChangeLogs
        </h1>
        <p className="text-xl pt-2">
          Les nouveautés des dernières mises à jour
          <br />
        </p>
      </div>
      <div className="flex pb-12 z-10 justify-center">
        <div className="max-w-3xl grid grid-cols-3 gap-8">
          {changelogs.map((changelog) => (
            <article
              className="bg-neutral-900 rounded-md group flex flex-row justify-between items-center border border-neutral-800 hover:bg-neutral-800 transition-all duration-200"
              key={changelog._id}
            >
              <div className="p-6">
                <Link href={changelog.slug}>
                  <h2 className="font-space-grotesk text-xl font-bold underline hover:text-pink-700 transition duration-150 ease-in-out">
                    {changelog.title} du{" "}
                    {new Date(changelog.date).toLocaleDateString("fr-FR")}
                  </h2>
                </Link>
                <Link href={changelog.slug}>
                  <p className="text-left text-neutral-300 hover:text-pink-700 transition duration-150 ease-in-out italic text-sm pt-2">
                    Lire ➜
                  </p>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
