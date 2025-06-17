import React, { useState } from 'react';
import MoodForm from './components/MoodForm';
import MoodHistory from './components/MoodHistory';

const App = () => {
  const [view, setView] = useState('form');

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">💖 VibeLog</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button onClick={() => setView('form')} className={`px-4 py-2 rounded ${view === 'form' ? 'bg-pink-500 text-white' : 'bg-white border'}`}>Log Mood</button>
        <button onClick={() => setView('history')} className={`px-4 py-2 rounded ${view === 'history' ? 'bg-pink-500 text-white' : 'bg-white border'}`}>Mood History</button>
      </div>

      {view === 'form' ? <MoodForm /> : <MoodHistory />}
    </div>
  );
};

export default App;