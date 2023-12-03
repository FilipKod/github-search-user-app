import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserBox from './components/UserBox';

function App() {
  return (
    <div className="bg-light-ghostwhite dark:bg-dark-gunmetal min-h-screen pt-36">
      <div className="font-space max-w-[730px] mx-auto">
        <Header />
        <SearchBar />
        <main>
          <UserBox />
        </main>
      </div>
    </div>
  );
}

export default App;
