import { updateMessageTextAC, sendMessageCreator } from '../redux/dialogs-reducer';
import StoreContext from '../storeContext';
import Messages from './Messages';

const MessagesContainer = () => {
  return (
    <StoreContext.Consumer>
      { (store) => {
        const state = store.getState();
        const btnClicked = () => {
          store.dispatch(sendMessageCreator());
        };

        const msgChanged = (text) => {
          store.dispatch(updateMessageTextAC(text))
        };

        return (
          <Messages
            btnClicked={btnClicked}
            msgChanged={msgChanged}
            namesData={state.dialogsPage.namesData}
            messagesData={state.dialogsPage.messagesData}
            newMessageText={state.dialogsPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
