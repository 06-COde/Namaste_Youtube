const VideoCards = ({ info }) => {
    if (!info) {
      return <div>Loading...</div>;  // ✅ Prevents undefined errors
    }
  
    const { snippet, statistics } = info || {};  
    const { channelTitle, title, thumbnails } = snippet || {};  

    return (
      <div className="p-2 m-2 shadow-lg w-80 hover:bg-gray-200 cursor-pointer" >
        <img className="rounded-lg" src={thumbnails?.medium?.url} alt="thumbnails" />
        <ul>
          <li className="font-bold">{title}</li>
          <li>{channelTitle}</li>
          <li>Likes👍 - {statistics?.likeCount || "N/A"}</li>
          {/*<li>{snippet?.description || "No description available"}</li> */} 
        </ul>
      </div>
    );
  };
  
  export default VideoCards;
  