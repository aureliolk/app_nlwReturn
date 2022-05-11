import { DarkMode } from "./darkmode";

export function Menu() {
  return (
    <div className="w-full justify-between items-center flex px-40 py-3 bg-ligth-secondary dark:bg-dark-secondary">
      <div>
        <div className="w-40 h-10 bg-ligth-shover rounded-lg dark:bg-dark-shover"></div>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-24 h-4 bg-ligth-shover rounded-full dark:bg-dark-shover"></div>
        <div className="w-24 h-4 bg-ligth-shover rounded-full dark:bg-dark-shover"></div>
        <div className="w-24 h-4 bg-ligth-shover rounded-full dark:bg-dark-shover"></div>
        <div className="w-24 h-4 bg-ligth-shover rounded-full dark:bg-dark-shover"></div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-ligth-shover rounded-lg dark:bg-dark-shover"></div>
        <div className="w-8 h-8 bg-ligth-shover rounded-lg dark:bg-dark-shover"></div>
        <DarkMode />
      </div>
    </div>
  );
}
