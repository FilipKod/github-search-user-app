import {useEffect, useState} from 'react';
import MoonIcon from './Icons/MoonIcon';
import SunIcon from './Icons/SunIcon';

export default function Header() {
  const [activeTheme, setActiveTheme] = useState<'dark' | 'light'>('light');

  const themeIcon = () => {
    if (activeTheme === 'dark') {
      return <SunIcon className="fill-light-gray dark:fill-dark-white" />;
    }
    return <MoonIcon className="fill-light-gray dark:fill-dark-white" />;
  };

  const setLightTheme = () => {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    setActiveTheme('light');
  };

  const setDarkTheme = () => {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    setActiveTheme('dark');
  };

  const toggleTheme = () => {
    if (activeTheme === 'light') {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, []);

  return (
    <header className="flex justify-between items-center">
      <span className="font-bold text-light-black dark:text-light-white text-base-plus">
        devfinder
      </span>
      <button
        type="button"
        onClick={toggleTheme}
        className="flex items-center text-light-gray dark:text-dark-white text-xsm">
        <span className="uppercase font-bold tracking-xxl pr-4">
          {activeTheme === 'dark' ? 'light' : 'dark'}
        </span>
        {themeIcon()}
      </button>
    </header>
  );
}
