import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/app';




/* eslint-disable  @typescript-eslint/no-non-null-assertion */
const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(

<App />

);
