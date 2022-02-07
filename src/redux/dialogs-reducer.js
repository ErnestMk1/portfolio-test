const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.dialogText;
      break;
    case SEND_MESSAGE:
      const body = state.newMessageText;
      state.newMessageText = '';
      state.messagesData.push(
        {
          id: 6,
          message: body,
        }
      );
      break;
    default:
      console.log('just to make it default');
      break;
  }

  return state;
};

export const updateMessageTextAC = (text) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    dialogText: text,
  };
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
