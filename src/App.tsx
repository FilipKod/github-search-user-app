import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserBox from './components/UserBox';

function App() {
  return (
    <div className="font-space max-w-[730px] mx-auto my-36">
      <Header />
      <SearchBar />
      <main>
        <UserBox />
      </main>
    </div>
  );
}

export default App;
