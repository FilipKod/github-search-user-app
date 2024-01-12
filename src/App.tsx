/* eslint-disable @typescript-eslint/no-unused-vars */
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {useState} from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserBox from './components/UserBox';

const apiKey = import.meta.env.VITE_GITHUB_TOKEN;

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
            Authorization: `Bearer ${apiKey}`,
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
    <div className="bg-light-ghostwhite dark:bg-dark-gunmetal min-h-screen pt-8 md:pt-36 pb-8 md:pb-36">
      <div className="font-space max-w-xs md:max-w-xl lg:max-w-3xl mx-auto">
        <Header />
        <SearchBar isUserNotFound={isError} onFormSubmit={onSubmitHandler} />
        <main>{userData && <UserBox userData={userData} />}</main>
      </div>
    </div>
  );
}

export default App;
