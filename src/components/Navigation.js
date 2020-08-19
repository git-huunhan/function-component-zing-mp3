import React from 'react';
import '../App.css';

function Navigation(props) {
  const { children } = props;
  
  return (
    <div className="Navigation">
        <li>{children}</li>
    </div>
  );
}

export default Navigation;
