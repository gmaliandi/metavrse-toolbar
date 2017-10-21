import 'aframe';
import React from 'react';

export default class DemoAframeScene extends React.Component {
  constructor(props) {
    super(props);

    this.interactableObjects = [];
  }

  attachEventHandlers(objects) {
    for (let object of objects) {
      object.addEventListener('mouseenter', this.props.handleMouseEnter);
      object.addEventListener('mouseleave', this.props.handleMouseLeave);
      object.addEventListener('click', this.props.handleClick);
    }
  }

  componentDidMount() {
    this.attachEventHandlers(this.interactableObjects);
  }

  render() {
    return (
      <a-scene cursor="rayOrigin: mouse">
        <a-box
          ref={obj => { this.interactableObjects.push(obj); }}
          position="-1 0.5 -3"
          rotation="0 45 0"
          color="#4CC3D9"
        />
        <a-sphere
          ref={obj => { this.interactableObjects.push(obj); }}
          position="0 1.25 -5"
          radius="1.25"
          color="#EF2D5E"
        />
        <a-cylinder
          ref={obj => { this.interactableObjects.push(obj); }}
          position="1 0.75 -3"
          radius="0.5"
          height="1.5"
          color="#FFC65D"
        />
        <a-plane
          ref={obj => { this.interactableObjects.push(obj); }}
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
