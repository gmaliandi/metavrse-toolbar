import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Toolbar from '../components/Toolbar';

const DemoAframeScene = dynamic(import('../components/DemoAframeScene'), {
  ssr: false,
  loading: () => <p>Loading a-frame scene...</p>
});

export default class Index extends React.Component {
  render() {
    return (
      <div className="metavrse-root">
        <Head>
          <title>metavrse.io - live coding toolbar</title>
        </Head>

        <DemoAframeScene />
        <Toolbar
          style={{position: 'absolute', bottom: '16px'}}
          numberOfItems={9}
        />

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
