import st from './Profile.module.css';
import MyPosts from '../MyPosts/MyPosts';
import React from 'react';

const Profile = (props) => {

  const postInput = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    props.updatePostText(postInput.current.value);
  };

  return (
    <div className={st.mainDiv}>
      <div className={st.input_div}>
        <textarea
          name="Post"
          id="textarea"
          cols="30"
          rows="10"
          className={st.post_input}
          ref={postInput}
          value={props.newPostText}
          onChange={onPostChange}
        ></textarea>
        <button onClick={addPost} className={st.sendPost}>Add post</button>
      </div>

      <MyPosts postsInfo={props.postsInfo}/>
    </div>
  );
};

export default Profile;
