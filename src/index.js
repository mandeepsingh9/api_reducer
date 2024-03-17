import React, { Suspense,lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Storehandleprovider from './Store/store';
const App=lazy(()=>import('./App'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Storehandleprovider>
      <Suspense fallback={<h2>Looding......</h2>}>
        <App />

        </Suspense> 

    </Storehandleprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
