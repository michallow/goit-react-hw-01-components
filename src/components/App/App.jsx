import { Profile } from './components/Profile/';
import { user, data, friends, transactions } from '../json/';
import { Container } from 'src/components/App/App.styled.js';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </Container>
  );
};