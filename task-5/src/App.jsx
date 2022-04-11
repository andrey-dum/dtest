import { useState } from 'react';
import { SearchForm } from './components/SearchForm'
import { Words } from './components/Words'

function App() {
  const [words, setWords] = useState([])

  return (
    <div className="h-screen flex pt-16 justify-center px-6 sm:px-0">
      <div className="flex flex-col w-full max-w-xl gap-8 items-center">

        <SearchForm setWords={setWords} />
        <Words words={words} />
      </div>
    </div>
  );
}

export default App;
