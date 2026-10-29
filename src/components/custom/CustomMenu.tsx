import { Link, useLocation } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu';
import { cn } from '@/lib/utils';

export const CustomMenu = () => {
  // Obtiene la ruta actual para determinar qué opción está activa.
  const { pathname } = useLocation();

  // Comprueba si la ruta actual coincide con la ruta indicada.
  const isActive = (path: string) => pathname === path;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Enlace de navegación a la página principal. */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              'p-2 rounded-md',
              isActive('/') && 'bg-slate-200'
            )}
            onClick={() => {
              // Navega a la ruta principal mediante una recarga completa.
              window.location.href = '/';
            }}
          >
            Inicio
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Enlace de navegación a la página de búsqueda. */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              'p-2 rounded-md',
              isActive('/search') && 'bg-slate-200'
            )}
            onClick={() => {
              // Navega a la ruta de búsqueda mediante una recarga completa.
              window.location.href = '/search';
            }}
          >
            Buscar superhéroes
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
