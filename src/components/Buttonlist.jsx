import Button from "./Button";

const list = ["All", "Gaming", "Football", "Clown", "Trendings", "Live", "News", "Playlist", "CR7", "Astrology","Fitness"];

const Buttonlist = () => {
  return (
    <div className="flex">
        {list.map((item,index)=>(
            <Button key={index} name={item}/>
        ))}  
    </div>
  )
}

export default Buttonlist;