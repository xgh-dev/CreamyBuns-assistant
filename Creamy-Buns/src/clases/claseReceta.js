import { eliminarRecetaApi } from "../apiAcces";
//import { destroyImage } from "../cloudinary";

export class Receta {
  constructor(
    id,
    nombre,
    precio,
    ingredientes,
    procedimiento,
    observaciones,
    imagen,
    public_id
  ) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
    this.procedimiento = procedimiento;
    this.observaciones = observaciones;
    this.imagen = imagen;
    this.public_id = public_id;
  }
  mostrarDatos() {
    console.log("método mostrar datos", this.nombre);
    return this.nombre; // <-- Ahora devuelve el nombre
  }

  eliminarReceta() {
    //console.log(this.id, this.public_id)
    eliminarRecetaApi(this.id,this.public_id);
    //console.log(this.public_id)
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
