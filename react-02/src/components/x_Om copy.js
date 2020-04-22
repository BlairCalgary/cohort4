import React from 'react';
import om from '../om.svg';
// import './App.css';

function Om(props) {
  return (
    <div className="imgWrap">
      <img src={om} className={`Om-logo ${props.logofilter}`} alt="logo"/>
    </div>
  );
}

export default Om;