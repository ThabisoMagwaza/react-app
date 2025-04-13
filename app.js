import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

// Check if the custom element is already defined before defining it
if (!customElements.get('react-element')) {
  customElements.define('react-element', Mfe4Element);
}
