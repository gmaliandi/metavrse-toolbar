import React from 'react';

export default class ToolbarItem extends React.Component {
  render() {
    return (
      <div style={this.props.style} className="toolbarItem">
        <style jsx>{`
          .toolbarItem {
            outline: 2px dashed #333;
            width: 100px;
            height: 100px;
          }
        `}</style>
      </div>
    );
  }
}
