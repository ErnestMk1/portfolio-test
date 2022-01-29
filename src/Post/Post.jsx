import st from './Post.module.css';

const Create_post = (props) => {
  return (
    <div className={st.mainDiv}>
      <img
        src={props.img}
        alt="postImg"
        className={st.postImage}
      />
      <div className={st.postInfo}>
        <div className={st.topicInfo}>
          <h2>topic:</h2>
          <p>{props.message}</p>
        </div>

        <div className={st.likesInfo}>
          <h2>likes:</h2>
          <p>{props.likesInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default Create_post;
