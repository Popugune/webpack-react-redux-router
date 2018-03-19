import React from 'react';
import WebpackIcon from '../../src/img/webpack-icon.svg';
import ReactIcon from '../../src/img/react.svg';
import { ExampleContainer, ExampleHeader, ExampleContent } from './styled';

const Example = () => [
  <ExampleContainer key="ExampleContainer">
    <ExampleHeader>
      <h1><div>🔧</div> WRRench</h1>
    </ExampleHeader>
  </ExampleContainer>,
  <ExampleContent key="ExampleContent">
    <div><img src={WebpackIcon} alt="webpack" /><span>Webpack</span></div>
    <div><img src={ReactIcon} alt="webpack" /><span>React</span></div>
    <div>Other</div>
  </ExampleContent>,
];

export default Example;
