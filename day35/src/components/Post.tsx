import React from "react";
import { PostType } from "../App";

const Post = ({post}:{post : PostType}) => {
    const [isLiked, setIsLiked] = React.useState(false);
    return(
        <div className="card post">
            <div className="card-header">
                <div className="card-title">{post.username}</div>
                <i className="bi bi-three-dots"></i>
            </div>
            <img src={post.post} className="card-img-top" alt="..."/>
            <div className="buttons">
                <i className={isLiked? "bi bi-heart-fill liked" : "bi bi-heart"} onClick={()=>{
                    setIsLiked(!isLiked)
                }}></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-share"></i>
            </div>
        </div>
    )
}
export default Post;