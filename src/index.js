import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlProvider } from "react-intl";
import registerServiceWorker from './registerServiceWorker';
import Spanish from "./i18n/es-AR.json";
import English from "./i18n/en-US.json"; 

const local = navigator.language;

let lang;
if( local === "en-US"){
    lang = English; 
}else{
    lang = Spanish;
}

ReactDOM.render(<IntlProvider locale={local} messages={lang}><App /></IntlProvider>, document.getElementById('root'));
registerServiceWorker();
