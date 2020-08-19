import React from 'react';

import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  const nav = [
      {title: '#zingchart'},
      {title: 'mới phát hành'},
      {title: 'top 100'},
      {title: 'chủ đề'},
      {title: 'mv'},
      {title: 'album'},
      {title: 'nghệ sĩ'},
      {title: 'nhạc cá nhân'},
    ]


  return (
    <div className="App">
      <Header>
        Nhập tên bài hát, ca sĩ, hoặc mv...
      </Header>
      <div className="nav-bar">
        <ul>
          <div className="home">
            <li>trang chủ</li>
          </div>
          {
            nav.map((item, index) =>
            <Navigation key={index}>
              {item.title}
            </Navigation>)
          }
          <div className="vip">
            <button>vip</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
