
import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';

/**
 * Componente raíz de la aplicación.
 * Centraliza la configuración del enrutamiento.
 */
export const HeroesApp = () => {
  return (
    <>
      {/* Provee el router para gestionar la navegación de la aplicación. */}
      <RouterProvider router={appRouter} />
    </>
  );
};
