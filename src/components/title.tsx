export default function Title({
  title,
  subtitle,
  color1,
  color2,
}: {
  title: string;
  subtitle: string;
  color1: string;
  color2: string;
}) {
  return (
    <div className="flex ml-40 pb-16 pt-16">
      <div className="flex flex-col max-w-xl">
        <h2
          className={`font-space-grotesk font-bold bg-gradient-to-r bg-clip-text text-transparent text-3xl ${color1} ${color2}`}
        >
          {title}
        </h2>
        <p className="text-md font-semibold pt-4 text-neutral-600 dark:text-neutral-600">{subtitle}</p>
      </div>
    </div>
  );
}
