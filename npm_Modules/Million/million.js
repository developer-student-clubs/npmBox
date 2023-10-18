import { h, mount } from 'million';

// Define a simple component
function MyComponent() {
  return (
    <div>
      <h1>Hello, Million!</h1>
      <p>This is a demo of the Million.js library.</p>
    </div>
  );
}

// Mount the component to the DOM
mount(MyComponent(), document.getElementById('root'));
