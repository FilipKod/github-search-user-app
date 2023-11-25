import moonIcon from '../assets/icon-moon.svg';

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <span className="font-bold text-[26px]">devfinder</span>
      <button
        type="button"
        className="flex items-center text-[#697C9A] text-[13px]">
        <span className="uppercase font-bold tracking-[2.5px] pr-4">dark</span>
        <img src={moonIcon} alt="switch to dark mode" />
      </button>
    </header>
  );
}
