import { eliminarClienteApi,actualizarCliente } from "../apiAcces.js";

export class Cliente {
  constructor(id, nombre, apellidos, telefono, correo, direccion) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.correo = correo;
    this.direccion = direccion;
  }
  mostrar_nombre() {
    console.log("mostando el dato:", this.nombre);
    return this.nombre;
  }
  retornarDatos() {
    return {
      nombre: this.nombre,
      apellidos: this.apellidos,
      telefono: this.telefono,
      correo: this.correo,
      direccion: this.direccion,
    };
  }
  retornarId(){
    return this.id
  }
  actualizarDatos(datosNuevos){
    //ejecutar la api que actualice los datos
    console.log('nuevos datos',datosNuevos)
    //definir la api
    this.nombre = datosNuevos.nombre
    this.apellidos = datosNuevos.apellidos
    this.telefono = datosNuevos.telefono
    this.correo = datosNuevos.correo
    this.direccion = datosNuevos.direccion
    actualizarCliente(this.id,datosNuevos)
  }
  eliminarCliente() {
    //llamada a la api que elimine clientes
    eliminarClienteApi(this.id)
  }
}

/*
  actualizarNombre(nuevoNombre) {
    //agregar la consulta que actualice al usuario
    this.nombre = nuevoNombre;
    return this.nombre;
  }
  actualizarApellidos(nuevosApellidos) {
    //agregar la consulta que actualice al usuario
    this.apellidos = nuevosApellidos;
    return this.apellidos;
  }
  actualizarTelefono(nuevoTelefono) {
    //agregar la consulta que actualice al usuario
    this.telefono = nuevoTelefono;
    return this.telefono;
  }
  actualizarDireccion(nuevaDireccion) {
    //agregar la consulta que actualice al usuario
    this.direccion = nuevaDireccion;
    return this.direccion;
  }
*/