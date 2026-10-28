
import { Outlet } from 'react-router';

/**
 * Layout principal del módulo de héroes.
 * Define la estructura visual compartida por sus rutas hijas.
 */
export const HeroesLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Renderiza el contenido de la ruta hija correspondiente. */}
        <Outlet />
      </div>
    </div>
  );
};
