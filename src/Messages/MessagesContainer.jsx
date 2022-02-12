import { connect } from 'react-redux';
import { updateMessageTextAC, sendMessageCreator } from '../redux/dialogs-reducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    namesData: state.dialogsPage.namesData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    btnClicked() {
      dispatch(sendMessageCreator());
    },
    msgChanged(text) {
      dispatch(updateMessageTextAC(text))
    },
  };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;
