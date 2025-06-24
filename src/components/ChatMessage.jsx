import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='p-2 flex hover:bg-gray-300 cursor-pointer items-center'>
          <img id="img" draggable="false" class="style-scope yt-img-shadow rounded-lg" alt="" height="24" width="24" src="https://yt4.ggpht.com/yhAHnVLkm943Bk9YNy_-ozGwgf0zP_vvjCMk4suwZ1c14Beu3YwkulnchIOzpE0OcP8svMcPGA=s64-c-k-c0x00ffffff-no-rj">
          </img>
          <span className='px-2 font-bold'>{name} -</span>
          <span>{message}</span>
    </div>
  )
}

export default ChatMessage;