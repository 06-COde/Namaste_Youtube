import React from 'react';

const Comments = ({ data }) => {
  const { author, comment, timestamp, replies } = data;

  return (
    <div className="flex p-4 items-start bg-gray-50 rounded-lg my-2">
      <img
        className="h-10 pr-2 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSEPxHF0-PRxJlVMHla55wvcxWdSi8RU2g&s"
        alt="user-icon"
      />
      <div className="hover:bg-gray-200 cursor-pointer w-full">
          <p className="text-sm text-gray-500">{author} - {new Date(timestamp).toLocaleString()}</p>
          <p className="font-semibold">{comment}</p>

            {replies && replies.length > 0 && (
             <div className="ml-6 border-l-2 pl-4 mt-2">
              {replies.map((reply, index) => (
                <Comments key={index} data={reply}/>
            ))}
            </div>
            )}
      </div>
    </div>
  );
};

export default Comments;
