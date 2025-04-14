import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/globals.css';

class ReactApp extends HTMLElement {
  private mountPoint: HTMLDivElement | null = null;
  private shadow: ShadowRoot | null = null;
  private static instanceCount = 0;

  constructor() {
    super();
    ReactApp.instanceCount++;
    // Only create shadow DOM for the first instance
    if (ReactApp.instanceCount === 1) {
      this.shadow = this.attachShadow({ mode: 'open' });
      this.mountPoint = document.createElement('div');
      this.mountPoint.setAttribute('class', 'root');
      this.shadow.appendChild(this.mountPoint);
    }
  }

  connectedCallback() {
    // Only render for the first instance
    if (ReactApp.instanceCount === 1 && this.mountPoint && this.shadow) {
      // Wait for styles to be loaded
      requestAnimationFrame(() => {
        // Get all style elements from document head
        const styles = document.head.querySelectorAll('style');
        styles.forEach((style) => {
          if (this.shadow) {
            // Clone the style element
            const styleClone = style.cloneNode(true);
            // Insert at the beginning of shadow DOM
            this.shadow.insertBefore(styleClone, this.shadow.firstChild);
          }
        });

        ReactDOM.render(<App />, this.mountPoint);
      });
    }
  }

  disconnectedCallback() {
    if (this.mountPoint) {
      ReactDOM.unmountComponentAtNode(this.mountPoint);
      ReactApp.instanceCount--;
    }
  }
}

customElements.define('react-element', ReactApp);

export default ReactApp;
