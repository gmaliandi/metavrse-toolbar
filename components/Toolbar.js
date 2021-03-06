import React from 'react';
import ToolbarItem from './ToolbarItem';
import _ from 'lodash';
import ReactTooltip from 'react-tooltip';

export default (props) => (
  <div style={props.style} className="toolbar">
    {_.range(props.numberOfItems).map((i) => (
      <div key={i} data-tip="Right-click to hack!">
        <ToolbarItem
          key={i}
          selected={props.selectedIndex === i}
          onClick={() => props.setSelected(i)}
          onContextMenu={() => props.editCode(i)}
          style={{marginRight: '2px'}}
          hasCode={props.hasCode(i)}
          text={props.getItemText(i)}
        />
        <ReactTooltip className="customTooltip" effect="solid" />
      </div>
    ))}

    <style jsx>{`
      .toolbar {
        display: flex;
      }
    `}</style>

    <style jsx global>{`
      .customTooltip {
        font-family: monospace !important;
      }
    `}</style>
  </div>
);
