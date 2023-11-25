import SearchIcon from './Icons/SearchIcon';

export default function SearchBar() {
  return (
    <div className="flex mt-9 h-16 mb-6 relative items-center">
      <SearchIcon />
      <input
        placeholder="Search GitHub username…"
        className="w-full h-full rounded-2xl absolute flex-1 py-2 pl-20 pr-36 text-lg shadow-light text-[#4B6A9B] placeholder:text-[#4b6a9bcb] focus:outline-none bg-light-white"
      />
      <button
        type="button"
        className="font-bold px-6 py-3 absolute right-2 rounded-[10px] bg-[#0079FF] text-white">
        Search
      </button>
    </div>
  );
}
