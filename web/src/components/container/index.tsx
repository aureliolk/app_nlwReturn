export function Container() {
  return (
    <>
      <div className="w-full px-40 py-12 flex flex-col">
        <div className="h-32 rounded-lg bg-ligth-secondary dark:bg-dark-secondary"></div>
        <div className="my-8 grid grid-cols-3 gap-8">
          <div className=" h-[310px] rounded-lg bg-ligth-secondary dark:bg-dark-secondary"></div>
          <div className=" h-[310px] rounded-lg bg-ligth-secondary dark:bg-dark-secondary"></div>
          <div className=" h-[310px] rounded-lg bg-ligth-secondary dark:bg-dark-secondary"></div>
          <div className=" h-[310px] rounded-lg bg-ligth-secondary dark:bg-dark-secondary"></div>
          <div className=" h-[310px] rounded-lg bg-ligth-secondary dark:bg-dark-secondary"></div>
        </div>
      </div>
    </>
  );
}
