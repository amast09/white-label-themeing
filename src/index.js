import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import ReduxStore from "./ReduxStore";

ReactDOM.render(<Provider store={ReduxStore}><App /></Provider>, document.getElementById('root'));
