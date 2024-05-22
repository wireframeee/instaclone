import instagram from '../icons/instagram.svg';
import messages from '../icons/messages.svg';
import like from '../icons/like.svg';
import comments from '../icons/comments.svg';
import share from '../icons/share.svg';
import save from '../icons/save.svg';
import _ from 'lodash';

export default function home() {
    let lastScrollTop = 0;

    window.addEventListener("scroll", _.throttle(function() {
    let st = window.scrollY;
    if (st > lastScrollTop){
        document.querySelector('.topBar').classList.remove('scrollUp');
    } else {
        document.querySelector('.topBar').classList.add('scrollUp');
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, 500), false);

    return (
        <div className="home">
        <div className='topBar scrollUp'>
            <img src={instagram} style={{height:"50px"}} alt='logo'></img>
            <img src={messages} alt='messages'></img>
        </div>
        <div className='stories'>
            {Array.from({ length: 10 }).map((_, index) => (
                <div className="story" key={index}>
                    <img src="https://placehold.co/180" alt="pfp"></img>
                </div>
            ))}
        </div>
        <div className='posts'>
            {Array.from({ length: 10 }).map((_, index) => (
                <div className="post" key={index}>
                    <div className="pHeader">
                        <img src="https://placehold.co/180" alt="pfp"></img>
                        <div className="username" style={{fontWeight:"550"}}>username</div>
                        <div className="uploadTime" style={{fontWeight:"lighter"}}>• 1 d</div>
                        <div className="options"></div>
                    </div>
                    <img className="media" src="https://placehold.co/1080x1350" alt="media"></img>
                    <div className="actions">
                        <div>
                        <img src={like} alt='like'/>
                        <img src={comments} alt='comments'/>
                        <img src={share} alt='share'/>
                        </div>
                        <img src={save} alt='save'/>
                    </div>
                    <div className="likes">10 likes</div>
                    <div className="caption">username caption</div>
                    <div className="comments">view 10 comments</div>
                    <textarea rows={1} className="comment" placeholder="add a comment..."></textarea>
                </div>
            ))}
        </div>
        </div>
    )
}