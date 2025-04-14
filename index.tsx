import './styles/globals.css';
import './app';

// Create a container for the web component
const container = document.createElement('div');
container.id = 'react-app-container';
document.body.appendChild(container);

// Create and append the web component
const reactApp = document.createElement('react-element');
container.appendChild(reactApp);
