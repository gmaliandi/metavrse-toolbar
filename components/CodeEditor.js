import React from 'react';
import AceEditor from 'react-ace';

import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/chaos';
import 'brace/ext/language_tools';

import {getDefaultCode} from '../lib/coding';

export default class CodeEditor extends React.Component {
  constructor(props) {
    super(props);

    const savedCode = getDefaultCode(this.props.index + 1);

    this.state = {
      savedCode,
      code: savedCode
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.exit = this.exit.bind(this);
    this.save = this.save.bind(this);
  }

  onChange(code) {
    this.setState({code});
  }

  get isDirty() {
    return this.state.code !== this.state.savedCode;
  }

  exit() {
    if (!this.isDirty || confirm('Are you sure you want to discard your changes?')) {
      this.props.exit();
    }
  }

  save() {
    this.setState({savedCode: this.state.code});
    this.props.save(this.state.code);
  }

  handleKeyPress(e) {
    if (e.key === 'Escape') {
      this.exit();
    } else if (e.key === 's' && e.ctrlKey) {
      this.save();
      e.preventDefault();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  render() {
    return (
      <div>
        <div className="titleBar">
          <span>editing script at position {this.props.index + 1}{this.isDirty ? '*' : ' '}</span>
          <span> | press <kbd onClick={this.save}>control+s</kbd> to save, <kbd onClick={this.exit}>esc</kbd> to go back to scene</span>
          <style jsx>{`
            .titleBar {
              position: absolute;
              top: 0;
              left: 0;
              font-family: monospace;
              font-size: 14px;
              text-align: center;
              color: #ddd;
              width: 100%;
              height: 22px;
              padding-top: 3px;
              background: #111;
            }

            kbd {
              background-color:#f7f7f7;
              border:1px solid #ccc;
              border-radius:3px;
              box-shadow:0 1px 0 rgba(0,0,0,0.2),0 0 0 2px #fff inset;
              color:#333;
              display:inline-block;
              font-family:Arial,Helvetica,sans-serif;
              font-size:11px;
              line-height:1.4;
              margin:0 .1em;
              padding:.1em .6em;
              text-shadow:0 1px 0 #fff;
              cursor: pointer;
            }
          `}</style>
        </div>

        <AceEditor
          style={{
            position: 'absolute',
            top: '25px',
            left: 0,
            opacity: 0.95
          }}
          width="100%"
          height="calc(100% - 25px)"
          focus={true}
          fontSize={16}
          mode="javascript"
          theme="chaos"
          onChange={this.onChange}
          showPrintMargin={false}
          editorProps={{
            $blockScrolling: true
          }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2
          }}
          value={this.state.code}
        />
      </div>
    );
  }
}
