import React, { Component } from 'react';
import { ReactComponent as Logo } from '../lotus.svg';

class Lotus extends Component {
  render() {
    const triggered = (this.props.isHovered?"logoFillBlue":"logoFillGreen")
    const mouseEnter = this.props.mouseEnter;
    const mouseLeave = this.props.mouseLeave;
    return (
        <div className="imgWrap" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <Logo 
            className={`Om-logo ${triggered}`}
            alt="logo"
          />
        </div>
    )
  }
}

export default Lotus;

