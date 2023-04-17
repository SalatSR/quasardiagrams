import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Я не видел точный текст задания, но исходя из README
// компонент должен быть переиспользуемым.
// Посмотри как src организованы в других открытых компонентах:
// https://github.com/zpao/qrcode.react
// или
// https://github.com/nkbt/react-collapse
// В обоих примерах index только экспортирует объекты и ничего не выводит на экран.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
