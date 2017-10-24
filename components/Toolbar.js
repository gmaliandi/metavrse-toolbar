import React from 'react';
import ToolbarItem from './ToolbarItem';
import _ from 'lodash';

export default (props) => (
  <div style={props.style} className="toolbar">
    {_.range(props.numberOfItems).map((i) => (
      <ToolbarItem
        key={i}
        selected={props.selectedIndex === i}
        onClick={() => props.setSelected(i)}
        onContextMenu={() => props.editCode(i)}
        style={{marginRight: '2px'}}
        hasCode={props.hasCode(i)}
        text={props.getItemText(i)}
      />
    ))}

    <style jsx>{`
      .toolbar {
        display: flex;
      }
    `}</style>
  </div>
);
