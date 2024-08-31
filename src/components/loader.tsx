const Loading = () => {
  return (
    <div className="bg-neutral-950 w-full flex justify-center items-center">
      <div className="flex w-full items-center justify-center dark:bg-neutral-950 bg-zinc-50">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-pink-600 to-orange-400 animate-spin">
          <div className="h-12 w-12 rounded-full dark:bg-neutral-950 bg-zinc-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;