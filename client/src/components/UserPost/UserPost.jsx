import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import { FaRegComment, FaUserFriends } from "react-icons/fa"
import { HiDotsHorizontal } from "react-icons/hi"
import { LiaTimesSolid } from "react-icons/lia"
import { PiShareFatThin } from "react-icons/pi"

import "./UserPost.scss"

const UserPost = ({postContent, postImages}) => {
  return (
    <>
        <div className="user-post-area">
            <div className="post-items-lists">
                <div className="user-post-fild">
                <div className="user-post-area-header">
                    <div className="post-user-info">
                    <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                    <div className="post-user-content">
                        <h3><a href="">Mamun Mirdha</a></h3>
                        <span>18 hours ago· </span>
                        <a href=""><FaUserFriends /></a>
                    </div>
                    </div>
                    <div className="post-future-info">
                    <a href=""><HiDotsHorizontal /></a>
                    <a href=""><LiaTimesSolid /></a>
                    </div>
                </div>
                <div className="post-wraper">
                    <p>{postContent}</p>
                    <div className="new-post-imagess">
                    <img src={postImages} alt="" />
                    </div>
                </div>
                <div className="post-full-reactions-area">
                    <div className="post-reactions">
                    <div className="post-like">
                        <a href="">
                        <span className="likes"><AiFillLike /></span>
                        <span>10</span>
                        </a>
                    </div>
                    <div className="post-comment">
                        <a href=""> 25 comments</a>
                    </div>
                    </div>
                    <div className="post-reactions-info">
                    <a href=""><AiOutlineLike /> Like</a>
                    <a href=""><FaRegComment /> Comment</a>
                    <a href=""><PiShareFatThin /> Share</a>
                    </div>
                    <div className="view-all-comment">
                    <a href="">View more comments</a>
                    </div>
                    <div className="post-comment-box">
                    <div className="comments-people-info">
                        <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />

                        <div className="people-comments-detels">
                        <div className="personal-details">
                            <a href="">Mamun Mirdha</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, iure.</p>
                        </div>
                        <div className="comment-updated-info">
                            <span>4d</span>
                            <a href="">Like</a>
                            <a href="">Reply</a>
                        </div>
                        </div>
                    </div>
                    <div className="create-new-comment">
                        <div className="current-auth-photo">
                        <img src="https://www.shareicon.net/data/256x256/2016/09/15/829466_man_512x512.png" alt="" />
                        </div>
                        <div className="current-auth-comment-box">
                        <form action="">
                            <textarea placeholder="Write a comment..." ></textarea>
                            <div className="comment-future-icons">
                            <div className="reaction-icons">
                                <a href="">
                                <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/3d442HB9oLN.png)", backgroundPosition: "0px -1095px", backgroundSize: "21px 1444px", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                                </a>
                                <a href="">
                                <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/3d442HB9oLN.png)", backgroundPosition: "0px -1197px", backgroundSize: "21px 1444px", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                                </a>
                                <a href="">
                                <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/3d442HB9oLN.png)", backgroundPosition: "0px -1129px", backgroundSize: "21px 1444px", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                                </a>
                                <a href="">
                                <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/3d442HB9oLN.png)", backgroundPosition: "0px -1231px", backgroundSize: "21px 1444px", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                                </a>
                                <a href="">
                                <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/3d442HB9oLN.png)", backgroundPosition: "0px -1333px", backgroundSize: "21px 1444px", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                                </a>
                            </div>
                            <div className="comment-submit-button">
                                <button type="submit">
                                <i data-visualcompletion="css-img" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/3d442HB9oLN.png)", backgroundPosition: "0px -1282px", backgroundSize: "21px 1444px", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                                </button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserPost