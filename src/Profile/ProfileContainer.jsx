import {addPostActionCreator, updatePostTextActionCreator} from '../redux/posts-reducer';
import StoreContext from '../storeContext';
import Profile from './Profile';

const ProfileContainer = () => {
  return (
    <StoreContext.Consumer>
      { (store) => {
        const state = store.getState();
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChange = (text) => {
          store.dispatch(updatePostTextActionCreator(text));
        };

        return (
          <Profile
            updateNewPostText={onPostChange}
            addPost={addPost}
            postsInfo={state.postsPage.postsInfo}
            newPostText={state.postsPage.newPostText}
          />);
      } }
    </StoreContext.Consumer>
  );
};

export default ProfileContainer;
