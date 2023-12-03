import SearchIcon from './Icons/SearchIcon';

export default function SearchBar() {
  return (
    // change bg input to transparent a move that bg to parent div
    <div className="flex mt-9 h-16 mb-6 relative items-center bg-light-white dark:bg-dark-blue dark:shadow-none rounded-2xl py-2 pl-8 pr-[10px] shadow-light">
      <SearchIcon className="fill-azure" />
      <input
        placeholder="Search GitHub username…"
        className="text-lg ml-4 flex-grow bg-transparent text-light-black dark:text-dark-white placeholder:text-light-blue dark:placeholder:text-dark-white focus:outline-none mr-auto"
      />
      <span className="font-bold text-red hidden">No results</span>
      <button
        type="button"
        className="font-bold ml-4 px-6 py-3 rounded-[10px] bg-azure text-light-white">
        Search
      </button>
    </div>
  );
}
