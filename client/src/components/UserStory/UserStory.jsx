
import "./UserStory.scss"

const UserStory = ({storyImg, userImg, userName}) => {
  return (
    <>
        <div className="story-area">
            <div className="story-image">
                <img className="story" src={storyImg} alt="" />

            <div className="friend-auth-img">
                <img src={userImg} alt="" />
            </div>
            <div className="friend-auth-name">
                <h4>{userName}</h4>
            </div>
            </div>
        </div>
    </>
  )
}

export default UserStory