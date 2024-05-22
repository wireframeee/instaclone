import home from "../icons/home.svg";
import explore from "../icons/explore.svg";
import upload from "../icons/upload.svg";
import reels from "../icons/reels.svg";

function bottomBar() {
    return (
        <div className='bottomBar'>
            <a href="/"><img src={home} alt="home"/></a>
            <a href="/explore"><img src={explore} alt="explore"/></a>
            <a href="/upload"><img src={upload} alt="upload"/></a>
            <a href="/reels"><img src={reels} alt="reels"/></a>
            <a href="/profile"><img src="https://placehold.co/180" alt="profile" style={{borderRadius:"50%"}}/></a>
        </div>
    )
}

export default bottomBar;