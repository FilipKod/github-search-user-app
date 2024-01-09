/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import SearchIcon from './Icons/SearchIcon';

interface IProps {
  isUserNotFound: boolean;
  onFormSubmit: (value: string) => void;
}

export default function SearchBar({isUserNotFound, onFormSubmit}: IProps) {
  const [usernameValue, setUsernameValue] = useState<string>('');
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit(usernameValue);
  };

  return (
    <form
      className="flex mt-9 h-16 mb-6 relative items-center bg-light-white dark:bg-dark-blue dark:shadow-none rounded-2xl py-2 pl-8 pr-[10px] shadow-light"
      onSubmit={submitHandler}>
      <SearchIcon className="fill-azure" />
      <input
        name="username"
        value={usernameValue}
        onChange={e => setUsernameValue(e.target.value)}
        placeholder="Search GitHub username…"
        className="text-lg ml-4 flex-grow bg-transparent text-light-black dark:text-dark-white placeholder:text-light-blue dark:placeholder:text-dark-white focus:outline-none mr-auto"
      />
      {isUserNotFound && <span className="font-bold text-red">No results</span>}
      <button
        type="submit"
        className="font-bold ml-4 px-6 py-3 rounded-[10px] bg-azure text-light-white">
        Search
      </button>
    </form>
  );
}
