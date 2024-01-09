/* eslint-disable @typescript-eslint/no-unused-vars */
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {useState} from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserBox from './components/UserBox';
import token from '../token';

function App() {
  const [username, setUsername] = useState<string>('Filipkod');

  const {isError, data: userData} = useQuery({
    retry: false,
    refetchOnWindowFocus: false,
    queryKey: ['user', username],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
  });

  const onSubmitHandler = (usernameValue: string) => {
    setUsername(usernameValue);
  };

  return (
    <div className="bg-light-ghostwhite dark:bg-dark-gunmetal min-h-screen pt-36">
      <div className="font-space max-w-[730px] mx-auto">
        <Header />
        <SearchBar isUserNotFound={isError} onFormSubmit={onSubmitHandler} />
        <main>{userData && <UserBox userData={userData} />}</main>
      </div>
    </div>
  );
}

export default App;
