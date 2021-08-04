import { render } from 'react-dom';
import App from './app';
import './styles/index.css';

const hostEl = document.getElementById('root');
render(<App />, hostEl);
