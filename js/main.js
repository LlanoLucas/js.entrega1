const TALITA = 600;

alert(`Bienvenido a Donatto`);

let usuario = prompt(
  `Eres una persona o una empresa?\nResponde: "persona" o "empresa"`
).toLocaleLowerCase();

while (usuario != `persona` && usuario != `empresa`) {
  usuario = prompt(
    `Ingresa un valor valido, eres una persona o una empresa?\nResponde: "persona" o "empresa"`
  ).toLocaleLowerCase();
}

let sabores = parseInt(
  prompt(`Cuantos sabores de talitas vas a pedir?\nTenemos 5 sabores`)
);

while (
  sabores != 1 &&
  sabores != 2 &&
  sabores != 3 &&
  sabores != 4 &&
  sabores != 5
) {
  sabores = parseInt(
    prompt(
      `Ingresa un valor valido, Cuantos sabores de talitas vas a pedir?\nTenemos 5 sabores`
    )
  );
}

let sabor;
let sabor2;
let sabor3;
let sabor4;
let sabor5;

let cantidad;
let cantidad2;
let cantidad3;
let cantidad4;
let cantidad5;

let cantidadTotal = 0;

function definirSabor(tipo) {
  tipo = prompt(
    `Elije tu sabor:\nOriginal, Jamon, Queso, Oregano o Cebolla`
  ).toLowerCase();
  while (
    tipo != `original` &&
    tipo != `jamon` &&
    tipo != `queso` &&
    tipo != `oregano` &&
    tipo != `cebolla`
  ) {
    tipo = prompt(
      `Elije un sabor valido:\nOriginal, Jamon, Queso, Oregano o Cebolla`
    ).toLowerCase();
  }

  return tipo;
}

function pedirCantidad(unidades, tipo) {
  unidades = parseInt(prompt(`Cuantas talitas de ${tipo} vas a querer?`));

  while (Number.isInteger(unidades) == false) {
    unidades = parseInt(
      prompt(`Ingresa un numero, cuantas talitas de ${tipo} vas a querer?`)
    );
  }

  cantidadTotal += unidades;

  return console.log(`${tipo}: ${unidades} unidades\n`);
}

switch (sabores) {
  case 1:
    console.log(`Resumen de compra`);

    sabor = definirSabor(sabor);

    pedirCantidad(cantidad, sabor);

    break;

  case 2:
    console.log(`Resumen de compra`);

    sabor = definirSabor(sabor);

    pedirCantidad(cantidad, sabor);

    sabor2 = definirSabor(sabor2);

    pedirCantidad(cantidad2, sabor2);

    break;

  case 3:
    console.log(`Resumen de compra`);

    sabor = definirSabor(sabor);

    pedirCantidad(cantidad, sabor);

    sabor2 = definirSabor(sabor2);

    pedirCantidad(cantidad2, sabor2);

    sabor3 = definirSabor(sabor3);

    pedirCantidad(cantidad3, sabor3);

    break;

  case 4:
    console.log(`Resumen de compra`);

    sabor = definirSabor(sabor);

    pedirCantidad(cantidad, sabor);

    sabor2 = definirSabor(sabor2);

    pedirCantidad(cantidad2, sabor2);

    sabor3 = definirSabor(sabor3);

    pedirCantidad(cantidad3, sabor3);

    sabor4 = definirSabor(sabor4);

    pedirCantidad(cantidad4, sabor4);

    break;

  case 5:
    sabor = `original`;
    sabor2 = `jamon`;
    sabor3 = `queso`;
    sabor4 = `oregano`;
    sabor5 = `cebolla`;

    console.log(`Resumen de compra`);
    pedirCantidad(cantidad, sabor);
    pedirCantidad(cantidad2, sabor2);
    pedirCantidad(cantidad3, sabor3);
    pedirCantidad(cantidad4, sabor4);
    pedirCantidad(cantidad5, sabor5);

    break;
}

// let cantidadTotal = cantidad + cantidad2 + cantidad3 + cantidad4 + cantidad5;

const IVA = 1.21;

let subtotal = cantidadTotal * TALITA;

let total = cantidadTotal * (TALITA * IVA);

let porcentajeDescEmpresa = 0.35;

let descuentoEmpresa = total * porcentajeDescEmpresa;

let totalEmpresa = total - total * porcentajeDescEmpresa;

if (usuario == `empresa`) {
  console.log(`Subtotal sin IVA: $${subtotal}\n
    Total con IVA: $${total}\n
    Descuento Empresa: $${descuentoEmpresa.toFixed(2)}\n
    Total Empresa: $${totalEmpresa.toFixed(2)}`);
} else {
  console.log(`Subtotal sin IVA: $${subtotal}\n
    Total con IVA: $${total}`);
}

console.log(`Gracias por tu compra!`);
