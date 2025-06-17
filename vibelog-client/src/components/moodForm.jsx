import React, { useState } from 'react';

const MoodForm = () => {
  const [mood, setMood] = useState('happy');
  const [entry, setEntry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/mood', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mood, entry })
    });
    const data = await res.json();
    if (res.ok) {
      alert('Mood logged successfully!');
      setEntry('');
    } else {
      alert(data.error || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded max-w-xl mx-auto">
      <label className="block mb-4">
        <span className="text-lg font-medium">Mood</span>
        <select value={mood} onChange={(e) => setMood(e.target.value)} className="mt-1 block w-full border rounded p-2">
          <option value="happy">😊 Happy</option>
          <option value="sad">😢 Sad</option>
          <option value="anxious">😰 Anxious</option>
          <option value="angry">😡 Angry</option>
          <option value="excited">🤩 Excited</option>
        </select>
      </label>

      <label className="block mb-4">
        <span className="text-lg font-medium">What's on your mind?</span>
        <textarea value={entry} onChange={(e) => setEntry(e.target.value)} className="mt-1 block w-full border rounded p-2" rows={4} placeholder="Jot it down..." />
      </label>

      <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Save Mood</button>
    </form>
  );
};

export default MoodForm;