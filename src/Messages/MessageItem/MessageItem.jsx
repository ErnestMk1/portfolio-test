import st from './MessageItem.module.css';

const MessageItem = (props) => {
  return (
    <div className={st.mainDiv}>
      {props.message}
    </div>
  );
};

export default MessageItem;
