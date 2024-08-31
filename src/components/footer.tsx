//create a simple footer component with a border top and a text

export default function Footer() {
  return (
    <div className="relative">
      <div className="flex justify-center items-center border-t-2 border-neutral-200 dark:border-neutral-700">
        <p className="text-sm text-neutral-500 dark:text-neutral-400 pt-4 pb-4">
          © 2023 Devian - Made with ❤️ by Saw_6
        </p>
      </div>
    </div>
  );
}
