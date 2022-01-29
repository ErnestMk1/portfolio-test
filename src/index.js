import reportWebVitals from './reportWebVitals';
import store from './state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        updatePostText={store.updatePostText.bind(store)}
        addPost={store.addPost.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscriber(rerenderEntireTree);

reportWebVitals();
