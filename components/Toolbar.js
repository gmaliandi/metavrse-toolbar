import React from 'react';
import ToolbarItem from './ToolbarItem';
import _ from 'lodash';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };
  }

  setSelected(selectedIndex) {
    this.setState({selectedIndex});
  }

  openCodeWindow(index) {
    console.log('codiiiiing')
  }

  render() {
    return (
      <div style={this.props.style} className="toolbar">
        {_.range(this.props.numberOfItems).map((i) => (
          <ToolbarItem
            key={i}
            selected={this.state.selectedIndex === i}
            onClick={() => this.setSelected(i)}
            onContextMenu={() => this.openCodeWindow(i)}
            style={{marginRight: '2px'}}
          />
        ))}

        <style jsx>{`
          .toolbar {
            display: flex;
          }
        `}</style>
      </div>
    );
  }
}
