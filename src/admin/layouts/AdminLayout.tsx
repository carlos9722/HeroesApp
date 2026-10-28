
import { Outlet } from 'react-router';

/**
 * Layout principal del módulo de administración.
 * Proporciona la estructura visual compartida por sus rutas hijas.
 */
export const AdminLayout = () => {
  return (
    <div className="bg-indigo-500">
      {/* Renderiza el contenido de la ruta hija correspondiente. */}
      <Outlet />
    </div>
  );
};
