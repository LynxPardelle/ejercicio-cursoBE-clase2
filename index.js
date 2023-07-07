class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }
  countMascotas() {
    return this.mascotas.length;
  }
  addBook(book, autor) {
    this.libros.push({ nombre: book, autor: autor });
  }
  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
  getBooks() {
    return this.getBookNames();
  }
}
const usuario = new Usuario(
  "Elon",
  "Musk",
  [
    { nombre: "El señor de las moscas", autor: "William Golding" },
    { nombre: "Fundacion", autor: "Isaac Asimov" },
  ],
  ["Perro", "Gato"]
);
console.log(usuario.getBooks());
console.log(usuario.getFullName());
