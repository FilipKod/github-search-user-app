import LocationIcon from '../Icons/LocationIcon';
import CompanyIcon from '../Icons/CompanyIcon';
import WebsiteIcon from '../Icons/WebsiteIcon';
import TwitterIcon from '../Icons/TwitterIcon';

interface IProps {
  detail_key: 'company' | 'location' | 'html_url' | 'twitter_username';
  detail_value: string | null;
}

export default function ListItem({detail_key, detail_value}: IProps) {
  const renderIcon = () => {
    if (detail_key === 'company') return <CompanyIcon />;
    if (detail_key === 'html_url') return <WebsiteIcon />;
    if (detail_key === 'twitter_username') return <TwitterIcon />;
    if (detail_key === 'location') return <LocationIcon />;
    return null;
  };

  return (
    <li
      className={
        'flex items-center ' +
        `${detail_value === null ? 'opacity-50' : 'opacity-100'}`
      }>
      <span className="w-8">{renderIcon()}</span>
      <span className="text-[15px] leading-none text-[#4B6A9B]">
        {detail_value || 'Not Available'}
      </span>
    </li>
  );
}
