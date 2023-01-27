import './NavBar.css'
import { AiOutlineHome } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className='container-navbar'>
      <div className='navBar'>
        <button><a href='#skills'>Skills</a></button>
        <button className='icon-home'><a href='#home'><AiOutlineHome/></a></button>
        <button><a href='#portfolio'>Portfolio</a></button>
      </div>
    </div>
  );
}

export default NavBar;