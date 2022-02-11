import { connect } from 'react-redux';
import {addPostActionCreator, updatePostTextActionCreator} from '../redux/posts-reducer';
import Profile from './Profile';

const mapStateToProps = (state) => {
  return {
    postsInfo: state.postsPage.postsInfo,
    newPostText: state.postsPage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText(text) {
      dispatch(updatePostTextActionCreator(text));
    },
    addPost() {
      dispatch(addPostActionCreator());
    }
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
