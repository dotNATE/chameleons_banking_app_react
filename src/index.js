import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import AccountsPage from "./Components/App/AccountsPage"
import Modal from "./Components/App/Utilities/Modal";

ReactDOM.render(
  <React.StrictMode>
    <AccountsPage />
      <Modal/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
