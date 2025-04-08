import { useSelector } from "react-redux";

const Sidebar = () => {
const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg w-48 p-5">
        <ul>
              <li>Trendings</li>
              <li>Shorts</li>
              <li>Live</li>
              <li>Cap Cut</li>
        </ul>
        <h1 className="font-bold text-lg pt-5">Subscriptions</h1>
        <ul>
              <li>Home</li>
              <li>Shorts</li>
              <li>Gaming</li>
              <li>Movies</li>
        </ul>
        <h1 className="font-bold text-lg pt-5">Liked Videos</h1>
        <ul>
              <li>Tmkoc</li>
              <li>Hollywood</li>
              <li>Bollywood</li>
              <li>Supershit</li>
        </ul>
        <h1 className="font-bold text-lg pt-5">Watch Later</h1>
        <ul>
              <li>Music</li>
              <li>Listning</li>
        </ul>
    </div>
  )
}

export default Sidebar;