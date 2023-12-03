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
    <div className="bg-light-white dark:bg-dark-blue dark:shadow-none rounded-2xl p-12 shadow-light grid grid-cols-[120px_auto] gap-x-9">
      <div className="rounded-full w-[117px] h-[117px] overflow-hidden">
        <img
          src="https://avatars.githubusercontent.com/u/583231?v=4"
          alt="github profile"
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl text-light-gunmetal dark:text-dark-white">
            The Octocat
          </h1>
          <span className="text-base text-light-gray dark:text-dark-white">
            Joined 25 Jan 2011
          </span>
        </div>
        <h3 className="text-base text-azure mt-1 inline-block">@octocat</h3>
        <div className="text-base text-light-blue mt-5 mb-8 w-full dark:text-dark-white dark:opacity-75">
          This profile has no bio
        </div>
        <div className="bg-light-ghostwhite dark:bg-dark-gunmetal rounded-[10px] px-8 py-4 grid grid-cols-3 mb-9">
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
