const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  namesData: [
    {
      name: 'Ernest',
      id: '1',
      img: "data:image/jpeg;base64,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"
    },
    {
      name: 'Maris',
      id: '2',
      img: "data:image/jpeg;base64,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"
    },
    {
      name: 'Angelina',
      id: '3',
      img: "data:image/jpeg;base64,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"
    },
    {
      name: 'Alla',
      id: '4',
      img: "data:image/jpeg;base64,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"
    },
    {
      name: 'Edward',
      id: '5',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4zGSr25cTfr__JnNBlxju18g9geM7uir_g&usqp=CAU"
    }
  ],

  messagesData: [
    {message: 'Hello, how r u?'},
    {message: 'Looser'},
    {message: 'Shut up'},
  ],

  newMessageText: '',
};

export const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT: {
      const stateCopy = { ...state };
      stateCopy.newMessageText = action.dialogText;
      return stateCopy;
    }
    case SEND_MESSAGE:
      const stateCopy = { ...state };
      const body = stateCopy.newMessageText;
      stateCopy.newMessageText = '';
      stateCopy.messagesData = [...state.messagesData];
      stateCopy.messagesData.push(
        {
          id: 6,
          message: body,
        }
      );
      return stateCopy;
    default:
      return state;
  };
};

export const updateMessageTextAC = (text) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    dialogText: text,
  };
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
