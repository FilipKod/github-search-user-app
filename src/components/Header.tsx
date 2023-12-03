import MoonIcon from './Icons/MoonIcon';

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <span className="font-bold text-light-black dark:text-light-white text-base-plus">
        devfinder
      </span>
      <button
        type="button"
        className="flex items-center text-light-gray dark:text-dark-white text-xsm">
        <span className="uppercase font-bold tracking-xxl pr-4">dark</span>
        <MoonIcon className="fill-light-gray dark:fill-dark-white" />
      </button>
    </header>
  );
}
