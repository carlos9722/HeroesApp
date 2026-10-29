import { ChevronLeft, MoreHorizontal, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface Props {
  totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
  // Página actual; por ahora, el valor es estático.
  const page = 1;

  return (
    // Controles de navegación entre páginas.
    <div className="flex items-center justify-center space-x-2">
      {/* Deshabilita la navegación hacia atrás en la primera página. */}
      <Button variant="outline" size="sm" disabled={page === 1}>
        <ChevronLeft className="h-4 w-4" />
        Anteriores
      </Button>

      {/* Genera un botón por cada página disponible. */}
      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          key={index}
          variant={page === index + 1 ? 'default' : 'outline'}
          size="sm"
        >
          {index + 1}
        </Button>
      ))}

      {/* Botón de página adicional, conservado como referencia. */}
      {/* <Button variant="outline" size="sm">
        2
      </Button> */}
      {/* 
      Indicador visual para representar páginas omitidas.
      <Button variant="ghost" size="sm" disabled>
        <MoreHorizontal className="h-4 w-4" />
      </Button> */}

      {/* Deshabilita la navegación hacia delante en la última página. */}
      <Button variant="outline" size="sm" disabled={page === totalPages}>
        Siguientes
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
