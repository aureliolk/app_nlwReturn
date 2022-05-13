export function Footer() {
  return (
    <div className="bg-ligth-secondary dark:bg-dark-secondary fixed flex bottom-0 w-full justify-center p-2 opacity-90 ">
      <p className="text-xs flex gap-1 items-center">
        <span className="font-bold">By: Aurelio Castro</span>
        <p className="underline underline-offset-4  hover:text-ligth-textsecondary dark:hover:text-dark-textsecondary ">
          <a href="https://github.com/aureliolk/app_nlwReturn" target="_blank">
            {"{ App_NlwReturn }"}
          </a>
        </p>
      </p>
    </div>
  );
}
