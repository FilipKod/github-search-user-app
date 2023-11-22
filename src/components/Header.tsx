import moonIcon from '../assets/icon-moon.svg';

export default function Header() {
  return (
    <header>
      <span>devfinder</span>
      <button type="button">
        <span>DARK</span>
        <img src={moonIcon} alt="switch to dark mode" />
      </button>
    </header>
  );
}
