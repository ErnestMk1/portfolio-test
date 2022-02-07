import st from './Profile.module.css';
import MyPosts from '../MyPosts/MyPosts';
import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from '../redux/posts-reducer';

const Profile = (props) => {
  const textarea = React.createRef();
  const addPost = () => {
    if (textarea.current.value.length > 0) {
      props.dispatch(addPostActionCreator());
    } else {
      alert('input something');
    }
  };

  const onPostChange = (e) => {
    let text = e.target.value;
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
          value={props.newPostText}
          ref={textarea}
          onChange={onPostChange}
          placeholder='Input topic of your post'
        ></textarea>
        <button onClick={addPost} className={st.sendPost}>Add post</button>
      </div>

      <MyPosts postsInfo={props.postsInfo}/>
    </div>
  );
};

export default Profile;
