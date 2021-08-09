import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';

import App from './app';
import './styles/index.css';

const hostEl = document.getElementById('root');
render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  hostEl,
);
