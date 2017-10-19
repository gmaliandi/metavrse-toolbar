import React from 'react';
import ToolbarItem from './ToolbarItem';
import _ from 'lodash';

export default class Toolbar extends React.Component {
  render() {
    return (
      <div style={this.props.style} className="toolbar">
        {_.range(this.props.numberOfItems).map(() => (
          <ToolbarItem style={{margin: '1px'}} />
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
