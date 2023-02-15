// Ejercicio 1

/*

1) Se desea realizar una estadística de los pesos de los alumnos de un colegio, de acuerdo a la siguiente tabla:

Alumnos de menos de 40 Kg.

Alumnos entre 40 y 50 Kg.

Alumnos de más de 50 y menos de 60 Kg.

Alumnos de más o igual a 60 Kg



*/
function isNum(val) {
  return !isNaN(val);
} // permite verificar si es un numero 

alert("Ejercicio 1");
const menosde40 = [];
const entre40y50 = [];
const entre50y60 = [];
const mas60 = [];

var na = prompt("cuantos alumnos hay? ");
if (isNum(na) == false) {
  alert("error no es numero");
} else {
  if (isNum(ap) == false) {
    alert("error no es numero");
  } else {
    for (i = 1; i <= na; i++) {
      var ap = prompt("Agrega el peso del estudiante:  " + i);

      if (ap < 40) {
        menosde40.push("1");
      } else if (ap >= 40 && ap <= 50) {
        entre40y50.push("1");
      } else if (ap > 50 && ap < 60) {
        entre50y60.push("1");
      } else {
        mas60.push("1");
      }
    }

    document.write(" <h1> Ejercicio 1 </h1> <br />");
    document.write(
      "Hay un total de " +
        menosde40.length +
        " alumno(s) con un peso menor de 40kg" +
        "<br />"
    );

    document.write(
      "Hay un total de " +
        entre40y50.length +
        " alumno(s) con un peso entre 40kg y 50kg " +
        "<br />"
    );

    document.write(
      "Hay un total de " +
        entre50y60.length +
        " alumno(s) con un peso de mayor a 50kg y menos a 60kg" +
        "<br />"
    );

    document.write(
      "Hay un total de " +
        mas60.length +
        " alumno(s) con un peso mayor a 60kg" +
        "<br />" +
        "<br />" +
        "<br />"
    );
  }
}

// Ejercicio 2

/*

2) Calcular el interés que tiene una cuenta de ahorros a fin de año, sabiendo que:

La cuenta genera un interés del 15% anual, lo que equivale a 1.25% mensual.

• El monto inicial se ingresa en el mes de enero y mensualmente se ingresan 250,00 Bs.

• El cálculo se requiere hasta el mes de diciembre.


*/

alert("Ejercicio 2");
const im = 250;
const interes = 15;

var ingresoi = parseInt(prompt("cuanto dinero desea depositar ? "));

if (isNum(ingresoi) == false) {
  alert("error no es numero");
} else {
  const itm = im * 11; // 2750

  const it = itm + ingresoi;

  const total_de_interes = (interes * it) / 100;
  const id = it + total_de_interes;

  document.write(" <h1> Ejercicio 2 </h1> <br /> <br />");
  document.write("el total es: " + id + "<br />");
}

// Ejercicio 3

/*

3) Haga un programa que lea N tarjetas de datos A, B, C, D, E.

A = Número de cédula de identidad del alumno.

B = Nombre del Alumno

C = Nota de matemáticas

D = Nota de física

E = Nota de programación

Hallar:

Nota promedio de cada materia.

Número de alumnos aprobados en cada materia.

Número de alumnos aplazados en cada materia. Número de alumnos que aprobaron todas las materias.

Número de alumnos que aprobaron una sola materia.

Número de alumnos que aprobaron dos materias.

Nota máxima en cada materia.


*/

alert("Ejercicio 3");
const ncedula = [];
const nestudiantes = [];
const nmate = [];
const nfisi = [];
const nprogra = [];

var nat = prompt("cuantos alumnos hay? ");

if (isNum(nat) == false) {
  alert("error no es numero");
} else {
  for (i = 1; i <= nat; i++) {
    var cedula = parseInt(prompt("cedula del estudiante " + i));
    ncedula.push(cedula);

    var nombre = parseInt(prompt("nombre del estudiante " + i));
    nestudiantes.push(nombre);

    var mate = parseInt(prompt("nota de matematica del estudiante " + i));
    nmate.push(mate);

    var fisi = parseInt(prompt("nota de fisica del estudiante " + i));
    nfisi.push(fisi);

    var progra = parseInt(prompt("nota de programcion del estudiante " + i));
    nprogra.push(progra);
  }
  if (
    isNum(cedula) == false &&
    isNum(mate) == false &&
    isNum(fisi) == false &&
    isNum(progra) == false
  ) {
    alert("error no es numero");
  } else {
    document.write(" <h1> Ejercicio 3 </h1> <br /> <br />");
    //-----------------------------------nota promedio
    let summate = 0;

    for (let i = 0; i < nmate.length; i++) {
      summate += nmate[i];
    }
    document.write(
      "nota promedio de matematica : " + summate / nmate.length + "<br />"
    );

    let sumfisi = 0;

    for (let i = 0; i < nfisi.length; i++) {
      sumfisi += nfisi[i];
    }
    document.write(
      "nota promedio de fisica : " + sumfisi / nfisi.length + "<br />"
    );

    let sumprogra = 0;

    for (let i = 0; i < nprogra.length; i++) {
      sumprogra += nprogra[i];
    }
    document.write(
      "nota promedio de programcion : " +
        sumprogra / nprogra.length +
        "<br /> <br /> <br />"
    );

    //------------------------------------------------------alumnos que apobaron
    let aamate = 0;

    for (let i = 0; i < nmate.length; i++) {
      if (nmate[i] >= 10) {
        aamate += 1;
      } else {
        aamate += 0;
      }
    }
    document.write("alumnos que aprobaron matematica : " + aamate + "<br />");

    let aafisi = 0;

    for (let i = 0; i < nfisi.length; i++) {
      if (nfisi[i] >= 10) {
        aafisi += 1;
      } else {
        aafisi += 0;
      }
    }
    document.write("alumnos que aprobaron fisica : " + aafisi + "<br />");

    let aaprogre = 0;

    for (let i = 0; i < nprogra.length; i++) {
      if (nprogra[i] >= 10) {
        aaprogre += 1;
      } else {
        aaprogre += 0;
      }
    }
    document.write(
      "alumnos que aprobaron programcion : " + aaprogre + "<br /><br /><br />"
    );

    //------------------------------------------------------alumnos que reproados
    let armate = 0;

    for (let i = 0; i < nmate.length; i++) {
      if (nmate[i] <= 10) {
        armate += 1;
      } else {
        armate += 0;
      }
    }
    document.write("alumnos que aplazaron matematica : " + armate + "<br />");

    let arfisi = 0;

    for (let i = 0; i < nfisi.length; i++) {
      if (nfisi[i] <= 10) {
        arfisi += 1;
      } else {
        arfisi += 0;
      }
    }
    document.write("alumnos que aplazaron fisica : " + arfisi + "<br />");

    let arprogre = 0;

    for (let i = 0; i < nprogra.length; i++) {
      if (nprogra[i] <= 10) {
        arprogre += 1;
      } else {
        arprogre += 0;
      }
    }
    document.write(
      "alumnos que aplazaron programacion : " + arprogre + "<br /><br /><br />"
    );

    //------------------------------------------------------alumnos que aprobaron todo

    let at = 0;

    for (let i = 0; i < ncedula.length; i++) {
      if (nmate[i] >= 10 && nfisi[i] >= 10 && nprogra[i] >= 10) {
        at += 1;
      } else {
        at += 0;
      }
    }
    document.write("alumnos que aprobaron todo : " + at + "<br /><br /><br />");
    //---------------------------------------------------------------alumnos que aprobaron 1

    let ua = 0;

    for (let i = 0; i < ncedula.length; i++) {
      if (
        (nmate[i] < 10 && nfisi[i] < 10 && nprogra[i] >= 10) ||
        (nmate[i] >= 10 && nfisi[i] < 10 && nprogra[i] < 10) ||
        (nmate[i] < 10 && nfisi[i] >= 10 && nprogra[i] < 10)
      ) {
        ua += 1;
      } else {
        ua += 0;
      }
    }
    document.write(
      "alumnos que aprobaron 1 materia : " + ua + "<br /><br /><br />"
    );

    //---------------------------------------------------------------alumnos que aprobaron 2

    let da = 0;

    for (let i = 0; i < ncedula.length; i++) {
      if (
        (nmate[i] < 10 && nfisi[i] >= 10 && nprogra[i] >= 10) ||
        (nmate[i] >= 10 && nfisi[i] >= 10 && nprogra[i] < 10) ||
        (nmate[i] >= 10 && nfisi[i] < 10 && nprogra[i] >= 10)
      ) {
        da += 1;
      } else {
        da += 0;
      }
    }
    document.write(
      "alumnos que aprobaron 2 materias : " + da + "<br /><br /><br />"
    );

    //---------------------------------------------------------------nota maxima en cada materia
    var m = Math.max(...nmate);
    document.write("nota maxima matematica  : " + m + "<br />");

    var f = Math.max(...nfisi);
    document.write("nota maxima fisica: " + f + "<br />");

    var p = Math.max(...nprogra);
    document.write("nota maxima programacion  : " + p + "<br />");
  }
}

// realizado por evanan semprun