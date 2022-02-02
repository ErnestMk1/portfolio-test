import st from './Profile.module.css';
import MyPosts from '../MyPosts/MyPosts';
import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from '../state';

const Profile = (props) => {

  const postInput = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let text = postInput.current.value;
    props.dispatch(updatePostTextActionCreator(text));
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
