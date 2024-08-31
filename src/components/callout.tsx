export default function Callout({
  emoji,
  text,
}: {
  emoji: string;
  text: string;
}) {
  return (
    <div className="justify-center flex w-full">
      <div className="bg-neutral-100 dark:bg-neutral-900 w-4/5 rounded min-h-16 flex items-center">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            <div className="pl-4">
                <p className="text-xl">{emoji}</p>
            </div>
            <p className="text-base p-4">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
