import { TableHeader } from '../tablasClientes/TablaClientes.styled.js';

const TablaDeClientes = () => {

    const ListaDeCliente = [
        {
          id: 1,
          nombre: "Emilio",
          apellido: "Navarro Torres",
          telefono: "555-951-4863",
          direccion: "Unidad Habitacional 159, Ciudad",
        },
        {
          id: 2,
          nombre: "Silvia",
          apellido: "Ortega Ramírez",
          telefono: "555-369-7531",
          direccion: "Conjunto Residencial 369, Ciudad",
        },
        {
          id: 3,
          nombre: "Héctor",
          apellido: "Sánchez Domínguez",
          telefono: "555-147-8523",
          direccion: "Boulevard Reforma, Ciudad",
        },
        {
          id: 4,
          nombre: "Isabel",
          apellido: "Rodríguez Castillo",
          telefono: "555-321-6549",
          direccion: "Paseo del Valle 741, Ciudad",
        },
        {
          id: 5,
          nombre: "Oscar",
          apellido: "Vargas López",
          telefono: "555-753-9516",
          direccion: "Fraccionamiento Sur, Ciudad",
        },
        {
          id: 6,
          nombre: "Raúl",
          apellido: "Cervantes Pérez",
          telefono: "555-258-1473",
          direccion: "Zona Centro 654, Ciudad",
        },
        {
          id: 7,
          nombre: "Teresa",
          apellido: "Méndez Ruiz",
          telefono: "555-654-2581",
          direccion: "Privada Arboleda, Ciudad",
        },
        {
          id: 8,
          nombre: "Francisco",
          apellido: "Domínguez Salinas",
          telefono: "555-147-3695",
          direccion: "Residencial los Pinos, Ciudad",
        },
        {
          id: 9,
          nombre: "Beatriz",
          apellido: "Hernández Ortega",
          telefono: "555-987-1234",
          direccion: "Plaza del Sol 963, Ciudad",
        },
        {
          id: 10,
          nombre: "Guillermo",
          apellido: "Suárez Gutiérrez",
          telefono: "555-369-8521",
          direccion: "Villas del Lago 753, Ciudad",
        },
        {
          id: 11,
          nombre: "Monica",
          apellido: "Flores Castillo",
          telefono: "555-852-9631",
          direccion: "Carretera Vieja 147, Ciudad",
        },
        {
          id: 12,
          nombre: "Eduardo",
          apellido: "Paredes Nava",
          telefono: "555-321-9874",
          direccion: "Sector 258, Ciudad",
        },
      ];
    
  return (
    <>
      <table className="table table-striped table-hover">
        <TableHeader>
          <tr>
            <td>Nombre</td>
            <td>Apellidos</td>
            <td>Telefono</td>
          </tr>
        </TableHeader>
        <tbody>
          {ListaDeCliente.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellido}</td>
              <td>{cliente.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TablaDeClientes;
