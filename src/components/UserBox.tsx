/* eslint-disable @typescript-eslint/no-unused-vars */
import {User} from '../types/User';
import Details from './Details/Details';
import StatInfo from './StatInfo';

interface IProps {
  userData: User;
}

export default function UserBox({userData}: IProps) {
  const date = new Date(userData.created_at);
  const joinedDateFormat = `${date.toLocaleString('en-GB', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })}`;

  return (
    <div className="bg-light-white dark:bg-dark-blue dark:shadow-none rounded-2xl p-12 shadow-light grid grid-cols-[120px_auto] gap-x-9">
      <div className="rounded-full w-[117px] h-[117px] overflow-hidden">
        <img src={userData.avatar_url} alt="github profile" />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl text-light-gunmetal dark:text-dark-white">
            {userData.name}
          </h1>
          <span className="text-base text-light-gray dark:text-dark-white">
            Joined {joinedDateFormat}
          </span>
        </div>
        <h3 className="text-base text-azure mt-1 inline-block">
          @{userData.login}
        </h3>
        <div className="text-base text-light-blue mt-5 mb-8 w-full dark:text-dark-white dark:opacity-75">
          {userData.bio ? userData.bio : 'This profile has no bio'}
        </div>
        <div className="bg-light-ghostwhite dark:bg-dark-gunmetal rounded-[10px] px-8 py-4 grid grid-cols-3 mb-9">
          <StatInfo label="Repos" number={userData.public_repos} />
          <StatInfo label="Followers" number={userData.followers} />
          <StatInfo label="Following" number={userData.following} />
        </div>
        <div>
          <Details data={userData} />
        </div>
      </div>
    </div>
  );
}
