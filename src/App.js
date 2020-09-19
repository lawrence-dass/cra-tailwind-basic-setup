import React from 'react';
import './App.css';

function App() {
  return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl text-center">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl font-lato text-blue-700 leading-tight">
          create-react-app with tailwind setup
        </h1>
        <p className="text-base font-openSans text-gray-700 my-2 leading-normal">
          Development
        </p>
        <p className="text-base font-openSans text-gray-700 my-2 leading-normal">
          Production
        </p>
      </div>
    </div>
  );
}

export default App;
