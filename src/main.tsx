
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { HeroesApp } from './HeroesApp';

import './index.css';

/**
 * Inicializa la aplicación React y la monta en el elemento raíz del DOM.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroesApp />
  </StrictMode>,
);
