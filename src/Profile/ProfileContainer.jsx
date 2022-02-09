import {addPostActionCreator, updatePostTextActionCreator} from '../redux/posts-reducer';
import Profile from './Profile';

const ProfileContainer = (props) => {
  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    props.dispatch(updatePostTextActionCreator(text));
  };

  return (
    <Profile
      updateNewPostText={onPostChange}
      addPost={addPost}
      postsInfo={props.state.postsPage.postsInfo}
      newPostText={props.state.postsPage.newPostText}
    />
  );
};

export default ProfileContainer;
