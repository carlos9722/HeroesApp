import { HeroGridCard } from './HeroGridCard';

export const HeroGrid = () => {
  return (
    // Cuadrícula adaptable para organizar las tarjetas de personajes.
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {/* Tarjeta con la información de un personaje. */}
      <HeroGridCard />
    </div>
  );
};
