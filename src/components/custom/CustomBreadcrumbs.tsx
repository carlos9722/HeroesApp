import { SlashIcon } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { Link } from 'react-router';

// Define cada elemento de navegación con su etiqueta y ruta de destino.
interface Breadcrumb {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadcrumbs?: Breadcrumb[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcrumbs = [] }: Props) => {
  return (
    // Contenedor de navegación jerárquica de la página.
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        {/* Enlace inicial a la página principal. */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Inicio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Genera los enlaces intermedios de la ruta. */}
        {breadcrumbs.map((crumb) => (
          <div className="flex items-center">
            <BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbLink asChild>
                <Link to={crumb.to}>{crumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}

        {/* Separa los enlaces de navegación de la página actual. */}
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>

        {/* Identifica la página actual sin convertirla en un enlace. */}
        <BreadcrumbItem>
          <BreadcrumbLink className="text-black">{currentPage}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
