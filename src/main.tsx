// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
// import './index.css';
import App from './App.tsx'

// const rootEl = document.getElementById('root');
// const reactRoot = createRoot(rootEl!);
// console.log(reactRoot);
// reactRoot.render(<App />);

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    <App />,
    // </StrictMode>
)
