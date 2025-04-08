import React, { useState } from 'react'
import { findprime } from '../utils/helper';

const Memo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setDarkTheme] = useState(true);

  const prime = findprime(Number(text));

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <div className={'h-96 w-96 p-4 border border-black m-3' + (isDarkTheme ? " bg-green-500 text-black" : " bg-white text-black")}>
      <h2 className='text-xl font-bold text-center'>Prime Checker</h2>

      <div>
        <input
          className="w-full border border-black bg-blue-400 text-lime-800 p-4 m-2 rounded-lg text-center"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <h1 className='font-bold text-xl'>Is Prime? {prime ? "✅ Yes" : "❌ No"}</h1>
      </div>

      <button
        className='hover:bg-black bg-gray-700 text-white rounded-lg p-2 mt-4'
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Memo;
