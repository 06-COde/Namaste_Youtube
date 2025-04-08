import React from 'react';
import Comments from './Comments';

const Commentbox = () => {
  const commentsData = [
    {
      author: "User123",
      timestamp: "2025-04-04T10:00:00",
      comment: "This is a great post!",
      parentCommentId: null,
      replies: [
        {
          author: "User000",
          timestamp: "2025-04-04T10:15:00",
          comment: "You're welcome!",
          parentCommentId: "User789",
          replies: []
        }
      ]
    },
    {
      author: "User456",
      timestamp: "2025-04-04T10:05:00",
      comment: "I agree!",
      parentCommentId: "User123",
      replies: [
        {
          author: "User000",
          timestamp: "2025-04-04T10:15:00",
          comment: "You're welcome!",
          parentCommentId: "User789",
          replies: []
        }
      ]
    },
    {
      author: "User789",
      timestamp: "2025-04-04T10:10:00",
      comment: "Thanks for the info!",
      parentCommentId: "User123",
      replies: [
        {
          author: "User000",
          timestamp: "2025-04-04T10:15:00",
          comment: "You're welcome!",
          parentCommentId: "User789",
          replies: []
        },
        {
          author: "User007",
          timestamp: "2025-04-04T10:15:00",
          comment: " Welcome to Youtube",
          parentCommentId: "User789",
          replies: []
        },
        {
          author: "User008",
          timestamp: "2025-04-04T10:15:00",
          comment: "Who are you ?",
          parentCommentId: "User789",
          replies: []
        }
      ]
    }
  ];

  return (
    <div className="p-2 m-2">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Comments:</h1>
        <div>
          <button className="px-6 py-2 rounded-lg shadow-lg bg-gray-200 mr-5 hover:bg-gray-300 font-semibold">
            <i className="fa-solid fa-thumbs-up"></i> Like
          </button>
          <button className="px-6 py-2 rounded-lg shadow-xl bg-red-600 text-white font-semibold">
            <i className="fa-solid fa-bell"></i> Subscribe
          </button>
        </div>
      </div>


      {commentsData.map((comment, index) => (
        <Comments key={index} data={comment} />
      ))}
    </div>
  );
};

export default Commentbox;
