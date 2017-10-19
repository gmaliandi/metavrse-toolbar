import React from 'react';

export default class ToolbarItem extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} style={this.props.style} className="toolbarItem">
        <div className="content">

        </div>

        <style jsx>{`
          .toolbarItem {
            outline: 2px ${this.props.selected ? 'solid' : 'dashed'} #333;
            width: 7vw;
            height: 7vw;
            cursor: pointer;
          }

          .toolbarItem:hover {
            outline: 3px ${this.props.selected ? 'solid' : 'dashed'} #222;
          }

          .content {
            width: 100%;
            height: 100%;
            background: ${this.props.selected ? '#aaa' : 'transparent'}
            opacity: 0.7;
          }
        `}</style>
      </div>
    );
  }
}
