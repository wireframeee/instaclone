import instagram from '../icons/instagram.svg';
import messages from '../icons/messages.svg';
import like from '../icons/like.svg';
import comments from '../icons/comments.svg';
import share from '../icons/share.svg';
import save from '../icons/save.svg';
import _ from 'lodash';
import { useState } from 'react';

export default function Home() {
    let lastScrollTop = 0;

    window.addEventListener("scroll", _.throttle(function () {
        let st = window.scrollY - 50;
        if (st > lastScrollTop) {
            document.querySelector('.topBar').classList.remove('scrollUp');
        } else {
            document.querySelector('.topBar').classList.add('scrollUp');
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, 500), false);

    let users = 10;
    const userData = Array.from({ length: users }, (_, index) => ({
        username: "username",
        image: "https://placehold.co/1080x1350",
        pfp: "https://placehold.co/180",
    }));
    const [postsData, setPostsData] = useState(Array.from({ length: users }, (_, index) => ({
        likes: Math.floor(Math.random() * 999),
        liked: false,
    })));

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(null);

    const storyIndex = (index) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
        //setTimeout(closeStory, 4000);
    }

    const closeStory = () => {
        setCurrentIndex(null);
        setIsModalOpen(false);
    }

    const likeCounter = (index) => {
        const newPostsData = [...postsData];
        if (newPostsData[index].liked) {
            newPostsData[index].likes -= 1;
        } else {
            newPostsData[index].likes += 1;
        }
        newPostsData[index].liked = !newPostsData[index].liked;
        setPostsData(newPostsData);
    };

    return (
        <div className="home">

            <div className='topBar scrollUp'>
                <img src={instagram} style={{ height: "50px" }} alt='logo'></img>
                <img src={messages} alt='messages'></img>
            </div>
            
            <div className='stories'>
                {userData.map((_, index) => (
                    <div className="story" onClick={() => storyIndex(index)} key={index}>
                        <img src={userData[index].pfp} alt="pfp" className='storyPfp' style={{border: "solid 4px white"}}></img>
                    </div>
                ))}
            </div>
            
            {isModalOpen && <div className='storyModal' onTouchMove={closeStory} onDragEnd={closeStory}>
                {currentIndex !== null && (
                    <div className='storyWrapper'>
                        <img className='storyImage' src={userData[currentIndex].image} alt='story image' />
                        <div class="gradientOverlay" />
                        <div className='storyHeader'>
                            <img src={userData[currentIndex].pfp} alt="pfp" />
                            <div style={{color:"white"}}>{userData[currentIndex].username}</div>
                        </div>
                        <div className="storyBar">
                            <div className='storyFill' />
                        </div>
                    </div>
                )}
            </div>}
            
            <div className='posts'>
                {postsData.map((post, index) => ((
                    <div className="post" key={index}>
                        <div className="pHeader">
                            <img src="https://placehold.co/180" alt="pfp"></img>
                            <div style={{ fontWeight: "550" }}>{userData[index].username}</div>
                            <div style={{ fontWeight: "lighter" }}>• 1 d</div>
                            <div className="options"></div>
                        </div>
                        <img className="media" src="https://placehold.co/1080x1350" alt="media"></img>
                        <div className="actions">
                            <div>
                                <img src={like} onClick={() => likeCounter(index)} alt='like' />
                                <img src={comments} alt='comments' />
                                <img src={share} alt='share' />
                            </div>
                            <img src={save} alt='save' />
                        </div>
                        <div className="likes"> {post.likes} likes</div>
                        <div className="caption">username caption</div>
                        <div className="comments">view 10 comments</div>
                        <textarea rows={1} className="comment" placeholder="add a comment..."></textarea>
                    </div>
                )
                ))}
            </div>
        </div>
    )
}