import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Toolbar from '../components/Toolbar';
import {
  getCode,
  registerScript,
  hasCode,
  getItemText,
  loadFromLocalStorage as loadScriptsFromLocalStorage,
  handleEvent,
  validEventNames
} from '../lib/coding';

const CodeEditor = dynamic(import('../components/CodeEditor'), {
  ssr: false,
  loading: () => <p>Loading code editor...</p>
});

const DemoAframeScene = dynamic(import('../components/DemoAframeScene'), {
  ssr: false,
  loading: () => <p>Loading a-frame scene...</p>
});

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      codingIndex: null
    };

    this.onSceneObjectClicked = this.onSceneObjectClicked.bind(this);
    this.onSceneObjectMouseEnter = this.onSceneObjectMouseEnter.bind(this);
    this.onSceneObjectMouseLeave = this.onSceneObjectMouseLeave.bind(this);
  }

  setSelected(selectedIndex) {
    this.setState({selectedIndex});
  }

  setCoding(codingIndex) {
    this.setState({codingIndex});
  }

  async saveCode(code) {
    await registerScript(this.state.codingIndex, code);
    // HACK this forces the code prop to be updated in the code editor.
    // Would be way better to use redux to handle this.
    this.forceUpdate();
  }

  get isCoding() {
    return this.state.codingIndex !== null;
  }

  async componentDidMount() {
    await loadScriptsFromLocalStorage();
    // HACK same as above
    this.forceUpdate();
  }

  onSceneObjectClicked(e) {
    const obj = e.target;
    handleEvent(this.state.selectedIndex, validEventNames.CLICK, {e, obj});
    this.forceUpdate();
  }

  onSceneObjectMouseLeave(e) {
    const obj = e.target;
    handleEvent(this.state.selectedIndex, validEventNames.HOVER_END, {e, obj});
    this.forceUpdate();
  }

  onSceneObjectMouseEnter(e) {
    const obj = e.target;
    handleEvent(this.state.selectedIndex, validEventNames.HOVER, {e, obj});
    this.forceUpdate();
  }

  render() {
    return (
      <div className="metavrse-root">
        <Head>
          <title>metavrse.io - live coding toolbar</title>
          <script src="https://jspm.io/system@0.19.js"></script>
          <script type="text/javascript">
            window.jspmSystem = System;
          </script>
        </Head>

        <DemoAframeScene
          handleClick={this.onSceneObjectClicked}
          handleMouseEnter={this.onSceneObjectMouseEnter}
          handleMouseLeave={this.onSceneObjectMouseLeave}
        />

        <Toolbar
          selectedIndex={this.state.selectedIndex}
          setSelected={(i) => this.setSelected(i)}
          style={{position: 'absolute', bottom: '16px'}}
          numberOfItems={9}
          editCode={(i) => this.setCoding(i)}
          hasCode={hasCode}
          getItemText={getItemText}
        />

        {this.isCoding &&
          <CodeEditor
            index={this.state.codingIndex}
            code={getCode(this.state.codingIndex)}
            exit={() => this.setCoding(null)}
            save={(code) => this.saveCode(code)}
          />
        }

        <style jsx>{`
          .metavrse-root {
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}
