import React from 'react';

export default class ToolbarItem extends React.Component {
  handleContextMenu(e) {
    e.preventDefault();

    this.props.onContextMenu();
  }

  render() {
    return (
      <div
        onClick={this.props.onClick}
        onContextMenu={(e) => this.handleContextMenu(e)}
        style={this.props.style}
        className="toolbarItem"
      >
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
