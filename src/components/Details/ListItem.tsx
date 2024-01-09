import LocationIcon from '../Icons/LocationIcon';
import CompanyIcon from '../Icons/CompanyIcon';
import WebsiteIcon from '../Icons/WebsiteIcon';
import TwitterIcon from '../Icons/TwitterIcon';

interface IProps {
  detail_key: 'company' | 'location' | 'blog' | 'twitter_username';
  detail_value: string | null;
}

export default function ListItem({detail_key, detail_value}: IProps) {
  const iconClassName = 'dark:fill-dark-white fill-light-blue';

  const renderIcon = () => {
    if (detail_key === 'company')
      return <CompanyIcon className={iconClassName} />;
    if (detail_key === 'blog') return <WebsiteIcon className={iconClassName} />;
    if (detail_key === 'twitter_username')
      return <TwitterIcon className={iconClassName} />;
    if (detail_key === 'location')
      return <LocationIcon className={iconClassName} />;
    return null;
  };

  const displayValue = () => {
    if (detail_value) {
      if (detail_key === 'blog') {
        return (
          <a className="hover:underline" href={detail_value}>
            {detail_value}
          </a>
        );
      }
      return detail_value;
    }
    return 'Not Available';
  };

  return (
    <li
      className={
        'flex items-center ' +
        `${
          detail_value === null || detail_value.length === 0
            ? 'opacity-50'
            : 'opacity-100'
        }`
      }>
      <span className="w-8">{renderIcon()}</span>
      <span className="text-[15px] leading-none text-light-blue dark:text-dark-white">
        {displayValue()}
      </span>
    </li>
  );
}
