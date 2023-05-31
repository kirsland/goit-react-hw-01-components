import user from '../path/to/user.json';
import { Profile } from './Profile';

import data from '../path/to/data.json';
import { Statistics } from './Statistics';

import friends from '../path/to/friends.json';
import { FriendList } from './FriendList';

import transactions from '../path/to/transactions.json';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
