const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

export const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesInfo: '0',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8kTnp3ZUx6MNsVhDbfsHRun5kVo5GVbCsWiI6JK0lTuSV6lG9dIvagZYB0bbjPtLkn0&usqp=CAU",
      };
      state.postsInfo.push(newPost);
      state.newPostText = '';
      break;
    case UPDATE_POST_TEXT:
      state.newPostText = action.postMessage;
      break;
    default:
      console.log('some issues here...');
  }

  return state;
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updatePostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    postMessage: text,
  };
};
