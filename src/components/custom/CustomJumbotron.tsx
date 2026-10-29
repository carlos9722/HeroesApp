// Define las propiedades del componente y establece la descripción como opcional.
interface Props {
  title: string;
  description?: string;
}

export const CustomJumbotron = ({ title, description }: Props) => {
  return (
    // Contenedor centrado del encabezado principal.
    <div className="text-center mb-8">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
        {title}
      </h1>

      {/* Muestra la descripción únicamente cuando tiene un valor. */}
      {description && <p className="text-gray-600 text-lg">{description}</p>}
    </div>
  );
};
