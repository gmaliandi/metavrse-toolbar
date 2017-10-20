import React from 'react';
import AceEditor from 'react-ace';

import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/chaos';
import 'brace/ext/language_tools';

export default class CodeEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '// Code what you want here!'
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  onChange(code) {
    this.setState({code});
  }

  handleKeyPress(e) {
    if (e.key === 'Escape') {
      this.props.exit();
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
        <AceEditor
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0.95
          }}
          width="100%"
          height="100%"
          focus={true}
          fontSize={16}
          mode="javascript"
          theme="chaos"
          onChange={this.onChange.bind(this)}
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
