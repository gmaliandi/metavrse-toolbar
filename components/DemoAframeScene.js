import 'aframe';
import React from 'react';

export default class DemoAframeScene extends React.Component {
  attachEventHandlers(objects) {
    for (let object of objects) {
      object.addEventListener('mouseenter', this.props.handleMouseEnter);
      object.addEventListener('mouseleave', this.props.handleMouseLeave);
    }
  }

  componentDidMount() {
    this.attachEventHandlers([this._box, this._sphere, this._cylinder]);
  }

  render() {
    return (
      <a-scene cursor="rayOrigin: mouse">
        <a-box
          ref={box => { this._box = box; }}
          onClick={this.props.handleClick}
          position="-1 0.5 -3"
          rotation="0 45 0"
          color="#4CC3D9"
        />
        <a-sphere
          ref={sphere => { this._sphere = sphere; }}
          onClick={this.props.handleClick}
          position="0 1.25 -5"
          radius="1.25"
          color="#EF2D5E"
        ></a-sphere>
        <a-cylinder
          ref={cylinder => { this._cylinder = cylinder; }}
          onClick={this.props.handleClick}
          position="1 0.75 -3"
          radius="0.5"
          height="1.5"
          color="#FFC65D"
        />
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
        />
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    );
  }
}
