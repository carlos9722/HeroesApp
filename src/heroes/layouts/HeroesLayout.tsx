import { CustomMenu } from '@/components/custom/CustomMenu';
import { Outlet } from 'react-router';

/**
 * Layout principal del módulo de héroes.
 * Define la estructura compartida por las rutas hijas.
 */
export const HeroesLayout = () => {
  return (
    // Contenedor global con altura mínima y fondo degradado.
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Limita el ancho del contenido y establece el espaciado general. */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Navegación principal del módulo. */}
        <CustomMenu />

        {/* Renderiza el contenido de la ruta hija correspondiente. */}
        <Outlet />
      </div>
    </div>
  );
};
