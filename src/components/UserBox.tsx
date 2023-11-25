import Details, {IData} from './Details/Details';
import StatInfo from './StatInfo';

const details: IData = {
  html_url: 'https://github.com/blog',
  company: '@github',
  location: 'San Francisco',
  twitter_username: null,
};

export default function UserBox() {
  return (
    <div className="bg-light-white rounded-2xl p-12 shadow-light grid grid-cols-[120px_auto] gap-x-9">
      <div className="rounded-full w-[117px] h-[117px] overflow-hidden">
        <img
          src="https://avatars.githubusercontent.com/u/583231?v=4"
          alt="github profile"
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-2xl text-[#2B3442]">The Octocat</span>
          <span className="text-base text-[#697C9A]">Joined 25 Jan 2011</span>
        </div>
        <span className="text-base text-[#0079FF] mt-1 inline-block">
          @octocat
        </span>
        <div className="text-base text-[#4B6A9B] mt-5 mb-8 w-full">
          This profile has no bio
        </div>
        <div className="bg-[#F6F8FF] rounded-[10px] px-8 py-4 grid grid-cols-3 mb-9">
          <StatInfo label="Repos" number={8} />
          <StatInfo label="Followers" number={3938} />
          <StatInfo label="Following" number={9} />
        </div>
        <div>
          <Details data={details} />
        </div>
      </div>
    </div>
  );
}
