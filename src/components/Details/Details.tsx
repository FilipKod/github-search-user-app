import ListItem from './ListItem';

export interface IData {
  html_url: string;
  location: string;
  twitter_username: string | null;
  company: string;
}

interface IProps {
  data: IData;
}

export default function Details({data}: IProps) {
  return (
    <ul className="grid grid-cols-[268px_auto] gap-y-4 gap-x-3">
      <ListItem detail_key="location" detail_value={data.location} />
      <ListItem
        detail_key="twitter_username"
        detail_value={data.twitter_username}
      />
      <ListItem detail_key="html_url" detail_value={data.html_url} />
      <ListItem detail_key="company" detail_value={data.company} />
    </ul>
  );
}
