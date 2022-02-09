import { updateMessageTextAC, sendMessageCreator } from '../redux/dialogs-reducer';
import Messages from './Messages';

const MessagesContainer = (props) => {
  const btnClicked = () => {
    props.dispatch(sendMessageCreator());
  };

  const msgChanged = (text) => {
    props.dispatch(updateMessageTextAC(text))
  }

  return (
    <Messages
      btnClicked={btnClicked}
      msgChanged={msgChanged}
      namesData={props.state.dialogsPage.namesData}
      messagesData={props.state.dialogsPage.messagesData}
      newMessageText={props.state.dialogsPage.newMessageText}
    />
  );
};

export default MessagesContainer;
