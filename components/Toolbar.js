import React from 'react';
import ToolbarItem from './ToolbarItem';
import _ from 'lodash';

export default class Toolbar extends React.Component {
  render() {
    return (
      <div style={this.props.style} className="toolbar">
        {_.range(this.props.numberOfItems).map((i) => (
          <ToolbarItem
            key={i}
            selected={this.props.selectedIndex === i}
            onClick={() => this.props.setSelected(i)}
            onContextMenu={() => this.props.editCode(i)}
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
