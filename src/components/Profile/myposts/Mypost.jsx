import postStyle from './mypost.module.css';
import Post from './posts/post';

const MyPost = () =>{
    return(
        <div className={postStyle.wrapPost}>
            <div className={postStyle.myPost}>
                <textarea></textarea>
                <div className={postStyle.newPost}>
                    <button className={postStyle.savePost}>Save Post</button>
                </div>
            </div>
            <div className={postStyle.thePost}>
                <Post message="hi roman!" time="12.03.2022"/>
                <Post message="good day!" time="12.03.2022"/>
            </div>
        </div>
    );
};

export default MyPost;