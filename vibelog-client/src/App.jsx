import React, { useState } from 'react';
import MoodForm from './components/MoodForm';
import MoodHistory from './components/MoodHistory';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [view, setView] = useState('form');

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold text-center mb-6 animate-fade-in">💖 VibeLog</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button onClick={() => setView('form')} className={`px-4 py-2 rounded transition ${view === 'form' ? 'bg-pink-500 text-white' : 'bg-white border hover:bg-gray-100'}`}>Log Mood</button>
        <button onClick={() => setView('history')} className={`px-4 py-2 rounded transition ${view === 'history' ? 'bg-pink-500 text-white' : 'bg-white border hover:bg-gray-100'}`}>Mood History</button>
      </div>

      {view === 'form' ? <MoodForm /> : <MoodHistory />}
    </div>
  );
};

export default App;