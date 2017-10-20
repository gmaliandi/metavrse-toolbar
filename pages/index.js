import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Toolbar from '../components/Toolbar';

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
  }

  setSelected(selectedIndex) {
    this.setState({selectedIndex});
  }

  setCoding(codingIndex) {
    this.setState({codingIndex});
  }

  saveCode(code) {
    console.log('code saved', code);
  }

  get isCoding() {
    return this.state.codingIndex !== null;
  }

  render() {
    return (
      <div className="metavrse-root">
        <Head>
          <title>metavrse.io - live coding toolbar</title>
        </Head>

        <DemoAframeScene />
        <Toolbar
          selectedIndex={this.state.selectedIndex}
          setSelected={(i) => this.setSelected(i)}
          style={{position: 'absolute', bottom: '16px'}}
          numberOfItems={9}
          editCode={(i) => this.setCoding(i)}
        />

        {this.isCoding &&
          <CodeEditor
            index={this.state.codingIndex}
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
