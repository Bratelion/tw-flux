import './styles.css';
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Test} from 'components/Test';

const App: React.FC = () => (
  <div className="p-4">
    <Test>Testing new component again</Test>
  </div>
);

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);