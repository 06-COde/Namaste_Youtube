import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addNewMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";

const Livechat = (()=>{
     
    const[liveMessage,setLiveMessage] = useState([]);
    const dispatch = useDispatch();
    const chatMessage = useSelector((store)=>store.chat.messages);
     
 useEffect(()=>{
    const i = setInterval(() => {
         console.log("Api Polling");

         dispatch(
            addNewMessage({
                name : generateRandomNames(),
                message : makeRandomMessage(20) + "👍☑️😎",
            })
         )
    }, 2000);
    return () => clearInterval(i);
   },[]); 

    return (
        <div className="h-[400px] bg-gray-100 w-full border border-black rounded-lg overflow-y-scroll flex flex-col-reverse">
            <h1 className='p-2 text-center font-bold text-2xl bg-blue-500        text-white rounded-md'>
                   Live Chat
            </h1>
            <form className="w-full p-2 border border-black flex justify-between"onSubmit={(e)=>{e.preventDefault();
                dispatch(
                    addNewMessage({
                        name: "Shashi Raj",
                        message : liveMessage,
                    })
                )
            }}>
                <input 
                className="w-80 bg-gray-200 " type="text" placeholder="Write Something" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} 
                />
                <button className="bg-lime-100 text-black border hover:border-blue-400 rounded-lg">Send</button>
            </form>
            {chatMessage.map((c,index)=>(
               <ChatMessage key={index} name={c.name} message={c.message}/>
            ))}
        </div>
    )
});

export default Livechat;