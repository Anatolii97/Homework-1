import './theme/App.css';
import friends from './friends.json';
import { FriendList } from './components/FriendList';
import user from './user.json'
import { Profile } from './components/Profile';

function App() {
  return (
    <>
    <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
   <FriendList friends={friends}/>
   </>
  );
}

export default App;
