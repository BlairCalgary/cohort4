import React, { Component } from 'react';

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: '',
      isActive: this.props.active,
    }
  }
  handleMouseEnter = () => {
    this.setState({ isHovered: "dodgerBlue" });
  }
  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  }
  onMouseClick() {
    this.props.activateFromParent(this.props.iconName, this.props.icon);
  }
  render() {
    const amIActive = (this.props.active===this.props.iconName?"blue":"");
    return (
        <div
          className="imgWrap"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.onMouseClick.bind(this)}
        >
          <img src={this.props.icon} className={`Om-logo ${this.state.isHovered} ${amIActive}`} alt="logo"/>

        </div>
    )
  }
}

export default Icon;

