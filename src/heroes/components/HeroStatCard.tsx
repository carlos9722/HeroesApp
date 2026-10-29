import type { PropsWithChildren } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// Define las propiedades de la tarjeta y permite recibir contenido mediante children.
interface Props extends PropsWithChildren {
  title: string;
  icon: React.ReactNode;
}

export const HeroStatCard = ({ title, icon, children }: Props) => {
  return (
    <Card>
      {/* Encabezado con el título y el icono alineados horizontalmente. */}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>

      {/* Contenido personalizable de la tarjeta. */}
      <CardContent>{children}</CardContent>
    </Card>
  );
};
