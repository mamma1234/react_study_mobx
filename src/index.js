import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
// import CounterStore from './stores/counter'; // 방금 만든 스토어 불러와줍니다.
// import MarketStore from './stores/market';
import RootStore from './stores';

// const counter = new CounterStore(); // 스토어 인스턴스를 만들고
// const market = new MarketStore();
const root = new RootStore(); // *** 루트 스토어 생성


ReactDOM.render(
    // <Provider counter={counter} market={market}>
    <Provider {...root}> {/* *** ...root 으로 스토어 모두 자동으로 설정 */}
      {/* Provider 에 props 로 넣어줍니다. */}
      <App />
    </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
