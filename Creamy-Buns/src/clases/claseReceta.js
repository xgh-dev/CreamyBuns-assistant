import { eliminarRecetaApi } from "../apiAcces";

export class Receta {
  constructor(
    id,
    nombre,
    precio,
    ingredientes,
    procedimiento,
    observaciones,
    imagen
  ) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
    this.procedimiento = procedimiento;
    this.observaciones = observaciones;
    this.imagen = imagen;
  }
  mostrarDatos() {
    console.log("método mostrar datos", this.nombre);
    return this.nombre; // <-- Ahora devuelve el nombre
  }

  eliminarReceta() {
    eliminarRecetaApi(this.id);
    console.log("receta eliminada: ", this.nombre);
  }
  retornarDatos() {
    return {
      id: this.id,
      nombre: this.nombre,
      precio: this.precio,
      ingredientes: this.ingredientes,
      procedimiento: this.procedimiento,
      observaciones: this.observaciones,
      imagen: this.imagen,
    };
  }
}
