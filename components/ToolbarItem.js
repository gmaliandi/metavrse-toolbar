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
          <div className="codeIcon">
            {this.props.hasCode && `{}`}
          </div>
          {this.props.selected && this.props.text &&
            <p className="text">{this.props.text}</p>
          }
        </div>

        <style jsx>{`
          .toolbarItem {
            outline: 2px ${this.props.selected ? 'solid' : 'dashed'} #333;
            width: 7vw;
            height: 7vw;
            cursor: pointer;
          }

          .toolbarItem:hover {
            outline: 3px solid #222;
          }

          .content {
            user-select: none;
            width: 100%;
            height: 100%;
            background-color: ${this.props.selected ? 'rgba(0, 174, 239, 0.7)' : 'transparent'}
          }

          .codeIcon {
            opacity: 0.75;
            font-size: 48px;
            font-family: monospace;
            text-align: center;
            padding-top: 32px;
            opacity: 0.7;
          }

          .text {
            margin-top: 10px;
            text-align: center;
            font-family: monospace;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}
