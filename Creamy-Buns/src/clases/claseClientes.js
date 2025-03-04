export class Cliente {
  constructor(id, nombre, apellidos, telefono, mail, direccion) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.mail = mail;
    this.direccion = direccion;
  }
  mostrar_nombre() {
    console.log("mostando el dato:", this.nombre);
    return this.nombre;
  }
  retornarDatos() {
    return {
      id: this.id,
      nombre: this.nombre,
      apellidos: this.apellidos,
      telefono: this.telefono,
      direccion: this.direccion,
    };
  }
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
}
