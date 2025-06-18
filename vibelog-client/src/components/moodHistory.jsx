import { useEffect, useState } from 'react';
import MoodCard from './moodCard';
const MoodHistory = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await fetch('http://localhost:3000/api/mood');
      const data = await res.json();
      const sorted = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setLogs(sorted);
    };
    fetchLogs();
  }, []);

  return (
    <div className="space-y-4 max-w-2xl mx-auto animate-slide-in">
      {logs.map((log) => (
        <MoodCard 
          key={log._id}
          mood={log.mood}
          entry={log.entry}
          createdAt={log.createdAt}
          mediaSuggestions={log.mediaSuggestions}
        />
      ))}
    </div>
  );
};

export default MoodHistory;
// This component fetches and displays the mood logs from the server
// It sorts them by creation date and displays each log with its mood, entry, and media suggestions
