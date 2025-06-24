const VideoCards = ({ info }) => {
  if (!info) return <div>Loading...</div>;

  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails, publishedAt } = snippet || {};

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer w-full max-w-sm mx-auto">
      <img
        className="w-full h-48 object-cover"
        src={thumbnails?.medium?.url}
        alt={title}
      />
      <div className="p-4 space-y-2">
        <h2 className="text-md font-semibold line-clamp-2 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{channelTitle}</p>
        <div className="text-xs text-gray-500 dark:text-gray-400 flex justify-between">
          <span>👍 {statistics?.likeCount || "N/A"}</span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
