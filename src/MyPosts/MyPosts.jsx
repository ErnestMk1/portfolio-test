import st from './MyPosts.module.css';
import Post from '../Post/Post'

const MyPosts = (props) => {
  let postsArray = props.postsInfo.map((a) => {
    return (
      <Post
        img={a.img}
        likesInfo={a.likesInfo}
        message={a.message}
      />
    )
  });

  return (
    <div className={st.mainDiv}>
      {postsArray}
    </div>
  )
};

export default MyPosts;
