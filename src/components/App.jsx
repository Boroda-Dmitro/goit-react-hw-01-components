import user from './data/user.json';
import stats from './data/statistic.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import { Profile } from './Profile/Profile';
import { StatisticList } from './StatisticList/StatisticList';
import { FriendsList } from './FriendsList/FriendList';
import { TransactionHistory } from './TransactionHistori/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        name={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticList stats={stats} title="Upload stats" />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  );
};
