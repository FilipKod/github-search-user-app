import {User} from '../../types/User';
import ListItem from './ListItem';

interface IProps {
  data: User;
}

export default function Details({data}: IProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-[268px_auto] gap-y-4 gap-x-3">
      <ListItem detail_key="location" detail_value={data.location} />
      <ListItem
        detail_key="twitter_username"
        detail_value={data.twitter_username}
      />
      <ListItem detail_key="blog" detail_value={data.blog} />
      <ListItem detail_key="company" detail_value={data.company} />
    </ul>
  );
}
