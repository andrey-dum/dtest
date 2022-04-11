import { useDebugValue, useState } from "react";
import { Api } from "../api";


export const SearchForm = ({ setWords }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null)

    if (useDebugValue.length > 0) {
        try {
            const data = await Api.fetchData(text);
            setWords(data.map((item) => item.word));
        } catch (error) {
            setError(error.message || 'Some error!')
        } finally {
            setText("");
        }
    }

  };

  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
        <div className="flex  gap-2 w-full">
            <input
            type="text"
            placeholder="Enter the word..."
            onChange={handleChange}
            value={text}
            className="border shadow-sm  px-4 py-3 rounded-md text-lg w-full"
            />
            <button
                disabled={!text}
                type="submit"
                className="cursor-pointer font-bold rounded-md shadow-sm py-3 
                px-6 text-gray-500 border border-gray-200
            hover:bg-gray-200 transition-all duration-200 ease-out "
            >
            Search
            </button>
        </div>
        <div className="text-red-500 text-sm">
            {error && error}
        </div>
    </form>
  );
};
