
//var globales

let personaGenerada;

// 
const formulario = document.getElementById('formulario');
console.log(formulario);
formulario.addEventListener('submit', generarPersona);

const alert = document.getElementById('alertResultados');

const mostrarGeneracion = document.getElementById('btnMostrarGeneracion');
console.log(mostrarGeneracion);
//mostrarGeneracion.addEventListener('click', mostrarGeneracion);

const verPersona = document.getElementById('btnVerPersona');
console.log(verPersona);
//verPersona.addEventListener('click', mostrarDatos);

const esMayor = document.getElementById('btnEsMayor');
console.log(esMayor);
//esMayor.addEventListener('click', esMayorDeEdad );


class Persona {
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #nacimiento;
    #generacion;
    #cualidad;
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
      this.#nombre = nombre;
      this.#edad = edad;
      this.#dni = dni;
      this.#altura = altura;
      this.#sexo = sexo;
      this.#peso = peso;
      this.#nacimiento = nacimiento;
    }
    // getters y setters
    get nombre() {
      return this.#nombre;
    }
    set nombre(nuevoNombre) {
      if (nuevoNombre.lenght > 0) {
        this.#nombre = nuevoNombre;
      }
    }
  
    get edad() {
      return this.#edad;
    }
    set edad(nuevaEdad) {
      if (nuevaEdad > 0) {
        this.#edad = nuevaEdad;
      }
    }
  
    get dni() {
      return this.#dni;
    }
    set dni(nuevoDni) {
      if (nuevoDni > 0 && nuevoDni <= 99999999) {
        this.#dni = nuevoDni;
      }
    }
  
    get sexo() {
      return this.#sexo;
    }
    set sexo(nuevoSexo) {
      if (
        nuevoSexo === "F" ||
        nuevoSexo === "M" ||
        nuevoSexo === "f" ||
        nuevoSexo === "m"
      ) {
        this.#sexo = nuevoSexo;
      }
    }
  
    get peso() {
      return this.#peso;
    }
    set peso(nuevoPeso) {
      if (nuevoPeso > 0) {
        this.#peso = nuevoPeso;
      }
    }
  
    get altura() {
      return this.#altura;
    }
    set altura(nuevaAltura) {
      if (nuevaAltura > 0) {
        this.#altura = nuevoaAltura;
      }
    }
  
    get nacimiento() {
      return this.#nacimiento;
    }
    set nacimiento(nuevoNacimiento) {
      if (nuevoNacimiento > 0 && nuevoNacimiento <= 2023) {
        this.#nacimiento = Nacimiento;
      }
    }
  
    get generacion() {
      return this.#generacion;
    }
    set generacion(nuevaGeneracion) {
      this.#generacion = nuevaGeneracion;
    }
  
    get cualidad() {
      return this.#cualidad;
    }
  
    set cualidad(nuevaCualidad) {
      this.#cualidad = nuevaCualidad;
    }
  
    // MÉTODOS
    mostrarGeneracion() {
      console.log('boton mostrar gen');
      let anioNac = this.nacimiento;
      if (anioNac >= 1930 && anioNac <= 1948) {
        this.generacion = "Silent Generation";
        this.cualidad = "austeridad";
        document.write(
          `<p>${this.nombre} es de la generación '${this.generacion}', y su cualidad principal es la ${this.cualidad}.</p>`
        );
      } else if (anioNac >= 1949 && anioNac <= 1968) {
        this.generacion = "Baby Boom";
        this.cualidad = "ambición";
        document.write(
          `<p>${this.nombre} es de la generación '${this.generacion}', y su cualidad principal es la ${this.cualidad}.</p>`
        );
      } else if (anioNac >= 1969 && anioNac <= 1980) {
        this.generacion = "Generación X";
        this.cualidad = "obsesión por el éxito";
        document.write(
          `<p>${this.nombre} es de la generación '${this.generacion}', y su cualidad principal es la ${this.cualidad}.</p>`
        );
      }
  else if (anioNac >= 1981 && anioNac <= 1993) {
      this.generacion = "Generación Y (Millennial)";
      this.cualidad = "frustración";
      document.write(
        `<p>${this.nombre} es de la generación '${this.generacion}', y su cualidad principal es la ${this.cualidad}.</p>`
      );
    }
    else if (anioNac >= 1994 && anioNac <= 2010) {
      this.generacion = "Generación Z";
      this.cualidad = "irreverencia";
      document.write(
        `<p>${this.nombre} es de la generación '${this.generacion}', y su cualidad principal es la ${this.cualidad}.</p>`
      );
    }
    }
  
    esMayorDeEdad () {
      console.log('boton mayor edad');
      if (this.edad >= 18 ) {
  document.write(`<p>${this.nombre} es mayor de edad.</p>`);
      } else {
          document.write(`<p>${this.nombre} es menor de edad.</p>`);
              }
    }
  

  
  mostrarDatos() {
    console.log('boton mostrar datos');
      document.write(`<ul>
      <li>Nombre: ${this.nombre}</li>
      <li>Edad: ${this.edad}</li>
      <li>DNI: ${this.dni}</li>
      <li>Sexo: ${this.sexo}</li>
      <li>Peso: ${this.peso}</li>
      <li>Talla: ${this.altura}</li>
      <li>Nacimiento: ${this.nacimiento}</li>
      <li>Generación: ${this.generacion}</li>
      <li>Cualidad de su generación: ${this.cualidad}</li>
      
      </ul>`);
  }
    
  }

  function generarPersona(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const edad = document.getElementById('edad');
    const dni = document.getElementById('dni');
    const sexo = document.getElementById ('sexo');
    const peso = document.getElementById ('peso');
    const altura = document.getElementById('altura');
    const anioNacimiento = document.getElementById('anioNacimiento');
  personaGenerada = new Persona(nombre.value, edad.value, dni.value, sexo.value, peso.value, altura.value, anioNacimiento.value);

  
  }

