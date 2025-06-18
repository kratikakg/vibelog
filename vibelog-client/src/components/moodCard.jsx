
const MoodCard = ({ mood, entry, createdAt, mediaSuggestions }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold capitalize">{mood}</span>
        <span className="text-sm text-gray-500">{new Date(createdAt).toLocaleString()}</span>
      </div>
      <p className="mt-2 text-gray-700">{entry}</p>
      <div className="mt-2 text-sm text-gray-600">
        <p><strong>Quote:</strong> {mediaSuggestions.quote}</p>
        <p><strong>Song:</strong> {mediaSuggestions.song}</p>
        <p><strong>Movie:</strong> {mediaSuggestions.movie}</p>
      </div>
    </div>
  );
};

export default MoodCard;
