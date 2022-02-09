import st from './Messages.module.css';
import MessageItem from './MessageItem/MessageItem';
import Name from './Name/Name';
import React from 'react';

const Messages = (props) => {
  const namesArray = props.namesData.map((d) => {
    return (
      <Name
        img={d.img}
        name={d.name}
        id={d.id}
      />
    )
  });

  const messagesArray = props.messagesData.map((m) => {
    return (
      <MessageItem message={m.message}/>
    )
  });

  const textarea = React.createRef();
  const onButClick = () => {
    if (textarea.current.value.length > 0) {
      props.btnClicked();
    } else {
      alert('You\'re dumb. Input smth');
    }
  };

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.msgChanged(text);
  }

  return (
    <div className={st.mainDiv}>
      <div className={st.names}>
        {namesArray}
      </div>
      <div className={st.messages}>
        {messagesArray}
      </div>

      <div className={st.input_message}>
        <textarea
          name="textarea"
          id="inputMess"
          cols="30"
          rows="10"
          ref={textarea}
          className={st.textarea}
          value={props.newMessageText}
          onChange={onMessageChange}
          placeholder='Enter your message'
        ></textarea>
        <button onClick={ onButClick } className={st.sendButton}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
