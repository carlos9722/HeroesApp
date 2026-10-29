import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useState } from 'react';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';

export const HomePage = () => {
  // Estado tipado que controla la pestaña seleccionada.
  const [activeTab, setActiveTab] = useState<
    'all' | 'favorites' | 'heroes' | 'villains'
  >('all');

  return (
    <>
      <>
        {/* Encabezado principal de la página. */}
        <CustomJumbotron
          title="Universo de SuperHéroes"
          description="Descubre, explora y administra super héroes y villanos"
        />

        {/* Navegación jerárquica de la página actual. */}
        <CustomBreadcrumbs currentPage="Super Héroes" />

        {/* Resumen estadístico de los personajes. */}
        <HeroStats />

        {/* Navegación por categorías mediante pestañas controladas. */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab('favorites')}
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab('villains')}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          {/* Contenido correspondiente a cada categoría. */}
          <TabsContent value="all">
            {/* Lista de todos los personajes. */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Lista de personajes favoritos. */}
            <h1>Favoritos!!!</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Lista de superhéroes. */}
            <h1>Héroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            {/* Lista de villanos. */}
            <h1>Villanos</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Controles de navegación entre páginas de resultados. */}
        <CustomPagination totalPages={3} />
      </>
    </>
  );
};
