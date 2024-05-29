import { NavLink } from "react-router-dom";
import { ReactComponent as Home } from "../icons/home.svg";
import { ReactComponent as Explore } from "../icons/explore.svg";
import upload from "../icons/upload.svg";
import { ReactComponent as Reels } from "../icons/reels.svg";

function bottomBar() {

    return (
        <div className='bottomBar'>
            <NavLink to="/" activeClassName="active"><Home id="home" alt="home"/></NavLink>
            <NavLink to="/explore" activeClassName="active"><Explore id="explore" alt="explore"/></NavLink>
            <NavLink to="/upload" activeClassName="active"><img src={upload} alt="upload"/></NavLink>
            <NavLink to="/reels" activeClassName="active"><Reels id="reels" alt="reels"/></NavLink>
            <NavLink to="/profile" activeClassName="active"><img src="https://placehold.co/180" alt="profile" style={{borderRadius:"50%"}}/></NavLink>
        </div>
    )
}

export default bottomBar;