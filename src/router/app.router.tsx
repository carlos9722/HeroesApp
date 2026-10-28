
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';

import { AdminLayout } from '@/admin/layouts/AdminLayout';
import { AdminPage } from '@/admin/pages/AdminPage';
import { HeroesLayout } from '@/heroes/layouts/HeroesLayout';
import { HomePage } from '@/heroes/pages/home/HomePage';

// Carga las páginas bajo demanda para optimizar la carga inicial.
const HeroPage = lazy(() => import('@/heroes/pages/hero/HeroPage'));
const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));

/**
 * Define las rutas principales de la aplicación y sus respectivos layouts.
 */
export const appRouter = createBrowserRouter([
  {
    // Rutas públicas relacionadas con los héroes.
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        // Página principal del módulo de héroes.
        index: true,
        element: <HomePage />,
      },
      {
        // Detalle del héroe con carga diferida.
        path: 'heroes/1',
        element: (
          <Suspense fallback={<div>Cargando héroe...</div>}>
            <HeroPage />
          </Suspense>
        ),
      },
      {
        // Búsqueda de héroes con carga diferida.
        path: 'search',
        element: (
          <Suspense fallback={<div>Cargando búsqueda...</div>}>
            <SearchPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    // Rutas del módulo de administración.
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        // Página principal de administración.
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
