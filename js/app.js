let personaGenerada, nombre, edad, dni, sexo, peso, altura, anioNacimiento;
const alertResultados = document.getElementById("alertResultados");
console.log(alertResultados);
const divVerPersona = document.getElementById("divVerPersona");
const divVerGeneracion = document.getElementById("divVerGeneracion");
const divMayorEdad = document.getElementById("divMayorEdad");

//

class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #anioNacimiento;
  #generacion;
  #cualidad;
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#dni = dni;
    this.#altura = altura;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#anioNacimiento = anioNacimiento;
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

  get anioNacimiento() {
    return this.#anioNacimiento;
  }
  set anioNacimiento(nuevoAnioNacimiento) {
    if (nuevoAnioNacimiento > 0 && nuevoAnioNacimiento <= 2023) {
      this.#anioNacimiento = nuevoAnioNacimiento;
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
}

const formulario = document.getElementById("formulario");
console.log(formulario);
formulario.addEventListener("submit", generarPersona);
//const btnForm = document.getElementById('btnForm');
function generarPersona(e) {
  e.preventDefault();
  nombre = document.getElementById("nombre");
  edad = document.getElementById("edad");
  dni = document.getElementById("dni");
  sexo = document.getElementById("sexo");
  peso = document.getElementById("peso");
  altura = document.getElementById("altura");
  anioNacimiento = document.getElementById("anioNacimiento");
  personaGenerada = new Persona(
    nombre.value,
    edad.value,
    dni.value,
    sexo.value,
    peso.value,
    altura.value,
    anioNacimiento.value
  );
  alertResultados.className = "my-3 container";
}

const btnMostrarGeneracion = document.getElementById("btnMostrarGeneracion");
btnMostrarGeneracion.addEventListener("click", mostrarGeneracion);

const btnVerPersona = document.getElementById("btnVerPersona");
btnVerPersona.addEventListener("click", mostrarDatos);

const btnEsMayor = document.getElementById("btnEsMayor");
btnEsMayor.addEventListener("click", esMayorDeEdad);

function mostrarGeneracion() {
  console.log("boton mostrar gen");
  divVerGeneracion.className = "d-3";
  if (
    personaGenerada.anioNacimiento >= 1930 &&
    personaGenerada.anioNacimiento <= 1948
  ) {
    personaGenerada.generacion = "Silent Generation";
    personaGenerada.cualidad = "austeridad";
    divVerGeneracion.innerText = `<h3>Generación:</h3>
      <p>${personaGenerada.nombre} es de la generación '${personaGenerada.generacion}', y su cualidad principal es la ${personaGenerada.cualidad}.</p>`;
  } else if (
    personaGenerada.anioNacimiento >= 1949 &&
    personaGenerada.anioNacimiento <= 1968
  ) {
    personaGenerada.generacion = "Baby Boom";
    personaGenerada.cualidad = "ambición";
    divVerGeneracion.innerHTML = `<h3>Generación:</h3><p>${personaGenerada.nombre} es de la generación '${personaGenerada.generacion}', y su cualidad principal es la ${personaGenerada.cualidad}.</p>`;
  } else if (
    personaGenerada.anioNacimiento >= 1969 &&
    personaGenerada.anioNacimiento <= 1980
  ) {
    personaGenerada.generacion = "Generación X";
    personaGenerada.cualidad = "obsesión por el éxito";
    divVerGeneracion.innerHTML = `<h3>Generación:</h3><p>${personaGenerada.nombre} es de la generación '${personaGenerada.generacion}', y su cualidad principal es la ${personaGenerada.cualidad}.</p>`;
  } else if (
    personaGenerada.anioNacimiento >= 1981 &&
    personaGenerada.anioNacimiento <= 1993
  ) {
    personaGenerada.generacion = "Generación Y (Millennial)";
    personaGenerada.cualidad = "frustración";
    divVerGeneracion.innerHTML = `<h3>Generación:</h3><p>${personaGenerada.nombre} es de la generación '${personaGenerada.generacion}', y su cualidad principal es la ${personaGenerada.cualidad}.</p>`;
  } else if (
    personaGenerada.anioNacimiento >= 1994 &&
    personaGenerada.anioNacimiento <= 2010
  ) {
    personaGenerada.generacion = "Generación Z";
    personaGenerada.cualidad = "irreverencia";
    divVerGeneracion.innerHTML = `<h3>Generación:</h3><p>${personaGenerada.nombre} es de la generación '${personaGenerada.generacion}', y su cualidad principal es la ${personaGenerada.cualidad}.</p>`;
  }
}

function esMayorDeEdad() {
  console.log("boton mayor edad");
  divMayorEdad.className = "d-3";
  if (personaGenerada.edad >= 18) {
    divMayorEdad.innerHTML = `<h3>¿Es Mayor de Edad?</h3><p>${personaGenerada.nombre} es mayor de edad.</p>`;
  } else {
    divMayorEdad.innerHTML = `
    <h3>¿Es Mayor de Edad?</h3><p>${personaGenerada.nombre} es menor de edad.</p>`;
  }
}

function mostrarDatos() {
  console.log("boton mostrar datos");
  divVerPersona.className = "d-3";
  divVerPersona.innerHTML = `<h3>Persona generada:</h3>
  <ul>
  <li>Nombre: ${personaGenerada.nombre}</li>
  <li>Edad: ${personaGenerada.edad}</li>
  <li>DNI: ${personaGenerada.dni}</li>
  <li>Sexo: ${personaGenerada.sexo}</li>
  <li>Peso: ${personaGenerada.peso}</li>
  <li>Talla: ${personaGenerada.altura}</li>
  <li>Nacimiento: ${personaGenerada.anioNacimiento}</li>
    </ul>`;
}
