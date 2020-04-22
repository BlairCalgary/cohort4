import React, { Component } from 'react';
// import om from '../om.svg';

class Icons extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: ''
    }

  }
  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  }
  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  }
  onMouseClick() {
    const propName = (Object.values(this.props.iconsArr[1].icon));
    console.log(propName);
    //  this.props.activateFromParent(this.props.iconName, this.props.icon);
  }
  render() {
  
    const triggered =
    (this.props.active===this.props.iconName
      ? "blue"
      : (this.state.isHovered
        ? "dodgerBlue"
        : ""
      )
    )
    
    return (
      this.props.iconsArr.map((icon, i) => (
        <div
          key={i}
          className="imgWrap"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.onMouseClick.bind(this)}
        >
          <img src={Object.values(this.props.iconsArr[i].icon)} className={`Om-logo ${triggered}`} alt="logo"/>

        </div>
      ))
     
    )
  }
}

export default Icons;

// render: function() {
//   const elements = ['one', 'two', 'three'];
//   return (
//     <ul>
//       {elements.map((value, index) => {
//         return <li key={index}>{value}</li>
//       })}
//     </ul>
//   )
// }

