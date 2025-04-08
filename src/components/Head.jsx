import {useDispatch, useSelector} from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cache, useEffect, useState } from "react";
import { Youtube_Search_Api } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

  const[search,setSearch] = useState("");

  const [suggestion, setSuggestion] = useState([]);
  const[showSuggestion, setshowSuggestion] = useState(false);

  const searchCache = useSelector((store)=> store.search);
     
    useEffect(()=>{
    //  console.log(search);
  
   const timer =  setTimeout(() => {
    if(searchCache[search]){
      setSuggestion(searchCache[search]);
    } else{
      getSuggestion()
      }
    }, 200);
    
    return ()=>{
      clearTimeout(timer);
    }

      },[search]);


     const getSuggestion = async()=>{
     const data = await fetch(Youtube_Search_Api + search);
     const json = await data.json();
     setSuggestion(json[1]);

     dispatch(cacheResults({
       [search] : json[1],
     }));
      }

    const dispatch = useDispatch();

    const toggleBtnHandler = ()=>{
        dispatch(toggleMenu());
    }

  return (
    <div className="grid grid-flow-col shadow-lg  justify-around items-center">
         <div className="flex justify-center items-center col-span-1 gap-10">
           <img className="h-6 cursor-pointer" onClick={()=>toggleBtnHandler()} src="https://as1.ftcdn.net/jpg/02/24/13/60/1000_F_224136032_b11na6zJLTpORSjfauRdpKamQDc7Uejv.jpg" alt="hamsberg icon"/>
           <a href = "/"> <img className="h-24" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="logo"/> </a>
         </div>
         <div className="col-span-10 text-center">
          <div>
            <input className="border border-black w-1/2 rounded-tl-3xl rounded-bl-3xl p-2 bg-gray-200" type="text" placeholder="SearchBar" value={search} onChange={(e)=>setSearch(e.target.value)}  onFocus={()=>setshowSuggestion(true)} onBlur={()=>setshowSuggestion(false)}/>
            <button className="border border-black p-2   rounded-tr-3xl bg-gray-200 rounded-br-3xl"><i class="fa-solid fa-magnifying-glass"></i></button>
           </div>
          { showSuggestion && ( <div className="absolute bg-white ml-48 px-2 py-4 w-80 rounded-lg shadow-lg border border-gray-400  text-start">
           <ul>
             {suggestion.map((s) => (
               <li key={s} className="py-2 px-2 hover:bg-gray-200 cursor-default"><i class="fa-solid fa-magnifying-glass"></i> {s}</li>
              ))}
           </ul>

           </div>)}
         </div>
         <div className="col-span-1">
             <img className="h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSEPxHF0-PRxJlVMHla55wvcxWdSi8RU2g&s" alt="userIcon" />
         </div>
    </div>
  )
}

export default Head;