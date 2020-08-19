import React from 'react';
import '../App.css';
import logo from '../img/logo.svg';
import userImg from '../img/react.svg';
import searchImg from '../img/search.svg';
import uploadImg from '../img/upload.svg';
import notiImg from '../img/noti.svg';


function Header(props) {
  const { children } = props;

  return (
    <div className="Header">
      <div className="h-child">
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="searchbox">
          <img src={searchImg} alt="search"/>
          <input type="text" placeholder={children}/>
        </div>
        <div className="tools">
          <button>
            <img src={uploadImg} alt="upload"/>
          </button>
          <button>
            <img src={notiImg} alt="noti"/>
          </button>
          <div className="user">
            <img src={userImg} alt=""/>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Header;
