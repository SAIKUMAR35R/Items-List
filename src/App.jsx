import React from 'react';
import ItemsList from './components/ItemsList';
import Button from './components/Button';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-300 flex items-center justify-center">
      
      <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-sm w-full flex flex-col items-center gap-4">
        <ItemsList />
        <Button />
      </div>
    </div>
  );
}

export default App;
