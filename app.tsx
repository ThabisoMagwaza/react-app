import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

class ReactApp extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      mountPoint
    );
  }
}

customElements.define('react-element', ReactApp);

export default ReactApp;
