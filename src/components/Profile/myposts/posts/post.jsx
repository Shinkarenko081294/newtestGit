import post from './post.module.css';
import userLog from '../../img/user.png';
import btnLike from '../../img/like.png';
import btnDlike from '../../img/dlike.png';

const Post = (props) =>{
    return(
        <div className={post.item}>
            <img src={userLog}></img>
            <div className={post.postText}>
                <div className={post.time}>{props.time}</div>
                <p className={post.text}>{props.message}</p>
            </div>
            <div className={post.btnGrup}>
                <div className={post.likeGrup}>
                    <button className={post.dlike}><img src={btnDlike}></img></button>
                    <p className={post.numberLikeTop}>100</p>
                </div>
                <div className={post.likeGrup}>
                    <button className={post.like}><img src={btnLike}></img></button>
                    <p className={post.numberLikeBott}>20</p>
                </div>
            </div>
        </div>
    );
};

export default Post;