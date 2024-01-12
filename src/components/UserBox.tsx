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
    <div className="bg-light-white dark:bg-dark-blue dark:shadow-none rounded-2xl px-6 pt-8 pb-12 md:p-10 lg:p-12 shadow-light grid lg:grid-cols-[120px_auto] lg:gap-x-9">
      <div className="hidden lg:block rounded-full w-[117px] h-[117px] overflow-hidden">
        <img src={userData.avatar_url} alt="github profile" />
      </div>
      <div>
        <div className="grid items-center grid-cols-[repeat(2,_auto)] gap-y-0 grid-rows-3 justify-start lg:justify-between">
          <div className="lg:hidden rounded-full w-[70px] h-[70px] md:w-[117px] md:h-[117px] overflow-hidden row-span-3 col-start-1 col-end-2 mr-5 md:mr-10">
            <img src={userData.avatar_url} alt="github profile" />
          </div>
          <h1 className="font-bold text-base md:text-2xl text-light-gunmetal dark:text-dark-white self-end">
            {userData.name}
          </h1>
          <time className="text-xsm md:text-base text-light-gray dark:text-dark-white col-start-2 col-end-3 self-end md:self-start lg:self-center">
            Joined {joinedDateFormat}
          </time>
          <h3 className="text-xsm md:text-base text-azure lg:mt-1 inline-block row-start-2 row-end-3 col-start-2 col-end-3 lg:col-start-1 lg:col-end-2">
            @{userData.login}
          </h3>
        </div>
        <div className="text-xsm md:text-base leading-6 text-light-blue mt-5 mb-8 w-full dark:text-dark-white dark:opacity-75">
          {userData.bio ? userData.bio : 'This profile has no bio'}
        </div>
        <div className="bg-light-ghostwhite dark:bg-dark-gunmetal rounded-[10px] px-5 md:px-8 py-3 md:py-4 grid grid-cols-3 mb-9 text-center">
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
