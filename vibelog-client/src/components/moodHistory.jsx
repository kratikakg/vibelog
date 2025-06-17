import React, { useEffect, useState } from 'react';

const MoodHistory = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await fetch('http://localhost:5000/api/mood');
      const data = await res.json();
      setLogs(data);
    };
    fetchLogs();
  }, []);

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      {logs.map((log) => (
        <div key={log._id} className="bg-white p-4 shadow rounded">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold capitalize">{log.mood}</span>
            <span className="text-sm text-gray-500">{new Date(log.createdAt).toLocaleString()}</span>
          </div>
          <p className="mt-2 text-gray-700">{log.entry}</p>
          <div className="mt-2 text-sm text-gray-600">
            <p><strong>Quote:</strong> {log.mediaSuggestions.quote}</p>
            <p><strong>Song:</strong> {log.mediaSuggestions.song}</p>
            <p><strong>Movie:</strong> {log.mediaSuggestions.movie}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodHistory;