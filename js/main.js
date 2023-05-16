let talita = 600;

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

let cantidad = 0;
let cantidad2 = 0;
let cantidad3 = 0;
let cantidad4 = 0;
let cantidad5 = 0;

function pedirCantidad(unidades, tipo) {
  unidades = parseInt(prompt(`Cuantas talitas de ${tipo} vas a querer?`));

  while (Number.isInteger(unidades) == false) {
    unidades = parseInt(
      prompt(`Ingresa un numero, cuantas talitas de ${tipo} vas a querer?`)
    );
  }
}

function definirSabor(tipo) {
  console.log(tipo);
  tipo = prompt(
    `Elije tu sabor:\nOriginal, Jamon, Queso, Oregano y Cebolla`
  ).toLowerCase();
  while (
    tipo != `original` &&
    tipo != `jamon` &&
    tipo != `queso` &&
    tipo != `oregano` &&
    tipo != `cebolla`
  ) {
    tipo = prompt(
      `Elije un sabor valido:\nOriginal, Jamon, Queso, Oregano y Cebolla`
    ).toLowerCase();
  }
}

switch (sabores) {
  case 1:
    sabor = prompt(
      `Elije tu sabor:\nOriginal, Jamon, Queso, Oregano y Cebolla`
    ).toLowerCase();
    while (
      sabor != `original` &&
      sabor != `jamon` &&
      sabor != `queso` &&
      sabor != `oregano` &&
      sabor != `cebolla`
    ) {
      sabor = prompt(
        `Elije un sabor valido:\nOriginal, Jamon, Queso, Oregano y Cebolla`
      ).toLowerCase();
    }

    cantidad = parseInt(prompt(`Cuantas talitas de ${sabor} vas a querer?`));

    while (Number.isInteger(cantidad) == false) {
      cantidad = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor} vas a querer?`)
      );
    }

    console.log(`Resumen de compra\n
    ${sabor}: ${cantidad} unidades\n`);

    break;

  case 2:
    sabor = prompt(
      `Elije tu primer sabor:\nOriginal, Jamon, Queso, Oregano y Cebolla`
    ).toLowerCase();
    while (
      sabor != `original` &&
      sabor != `jamon` &&
      sabor != `queso` &&
      sabor != `oregano` &&
      sabor != `cebolla`
    ) {
      sabor = prompt(
        `Elije un sabor valido:\nOriginal, Jamon, Queso, Oregano y Cebolla`
      ).toLowerCase();
    }

    cantidad = parseInt(prompt(`Cuantas talitas de ${sabor} vas a querer?`));

    while (Number.isInteger(cantidad) == false) {
      cantidad = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor} vas a querer?`)
      );
    }

    sabor2 = prompt(
      `Elije tu segundo sabor:\nOriginal, Jamon, Queso, Oregano y Cebolla`
    ).toLowerCase();
    while (
      sabor2 != `original` &&
      sabor2 != `jamon` &&
      sabor2 != `queso` &&
      sabor2 != `oregano` &&
      sabor2 != `cebolla`
    ) {
      sabor2 = prompt(
        `Elije un sabor valido:\nOriginal, Jamon, Queso, Oregano y Cebolla`
      ).toLowerCase();
    }

    cantidad2 = parseInt(prompt(`Cuantas talitas de ${sabor2} vas a querer?`));

    while (Number.isInteger(cantidad2) == false) {
      cantidad2 = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor2} vas a querer?`)
      );
    }

    console.log(`Resumen de compra\n
    ${sabor}: ${cantidad} unidades\n
    ${sabor2}: ${cantidad2} unidades\n`);

    break;

  case 3:
    sabor = prompt(
      `Elije tu primer sabor:\nOriginal, Jamon, Queso, Oregano y Cebolla`
    ).toLowerCase();
    while (
      sabor != `original` &&
      sabor != `jamon` &&
      sabor != `queso` &&
      sabor != `oregano` &&
      sabor != `cebolla`
    ) {
      sabor = prompt(
        `Elije un sabor valido:\nOriginal, Jamon, Queso, Oregano y Cebolla`
      ).toLowerCase();
    }

    cantidad = parseInt(prompt(`Cuantas talitas de ${sabor} vas a querer?`));

    while (Number.isInteger(cantidad) == false) {
      cantidad = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor} vas a querer?`)
      );
    }

    sabor2 = prompt(
      `Elije tu segundo sabor:\nOriginal, Jamon, Queso, Oregano y Cebolla`
    ).toLowerCase();
    while (
      sabor2 != `original` &&
      sabor2 != `jamon` &&
      sabor2 != `queso` &&
      sabor2 != `oregano` &&
      sabor2 != `cebolla`
    ) {
      sabor2 = prompt(
        `Elije un sabor valido:\nOriginal, Jamon, Queso, Oregano y Cebolla`
      ).toLowerCase();
    }

    cantidad2 = parseInt(prompt(`Cuantas talitas de ${sabor2} vas a querer?`));

    while (Number.isInteger(cantidad2) == false) {
      cantidad2 = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor2} vas a querer?`)
      );
    }

    sabor3 = prompt(
      `Elije tu tercer sabor:\nOriginal, Jamon, Queso, Oregano y Cebolla`
    ).toLowerCase();
    while (
      sabor3 != `original` &&
      sabor3 != `jamon` &&
      sabor3 != `queso` &&
      sabor3 != `oregano` &&
      sabor3 != `cebolla`
    ) {
      sabor3 = prompt(
        `Elije un sabor valido:\nOriginal, Jamon, Queso, Oregano y Cebolla`
      ).toLowerCase();
    }

    cantidad3 = parseInt(prompt(`Cuantas talitas de ${sabor3} vas a querer?`));

    while (Number.isInteger(cantidad3) == false) {
      cantidad3 = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor3} vas a querer?`)
      );
    }

    console.log(`Resumen de compra\n
    ${sabor}: ${cantidad} unidades\n
    ${sabor2}: ${cantidad2} unidades\n
    ${sabor3}: ${cantidad3} unidades\n`);

    break;

  case 4:
    sabor = prompt(
      `Elije tu primer sabor:\nOriginal, Jamon, Queso, Oregano y Cebolla`
    ).toLowerCase();
    while (
      sabor != `original` &&
      sabor != `jamon` &&
      sabor != `queso` &&
      sabor != `oregano` &&
      sabor != `cebolla`
    ) {
      sabor = prompt(
        `Elije un sabor valido:\nOriginal, Jamon, Queso, Oregano y Cebolla`
      ).toLowerCase();
    }

    cantidad = parseInt(prompt(`Cuantas talitas de ${sabor} vas a querer?`));

    while (Number.isInteger(cantidad) == false) {
      cantidad = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor} vas a querer?`)
      );
    }

    sabor2 = prompt(
      `Elije tu segundo sabor:\nOriginal, Jamon, Queso, Oregano y Cebolla`
    ).toLowerCase();
    while (
      sabor2 != `original` &&
      sabor2 != `jamon` &&
      sabor2 != `queso` &&
      sabor2 != `oregano` &&
      sabor2 != `cebolla`
    ) {
      sabor2 = prompt(
        `Elije un sabor valido:\nOriginal, Jamon, Queso, Oregano y Cebolla`
      ).toLowerCase();
    }

    cantidad2 = parseInt(prompt(`Cuantas talitas de ${sabor2} vas a querer?`));

    while (Number.isInteger(cantidad2) == false) {
      cantidad2 = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor2} vas a querer?`)
      );
    }

    sabor3 = prompt(
      `Elije tu tercer sabor:\nOriginal, Jamon, Queso, Oregano y Cebolla`
    ).toLowerCase();
    while (
      sabor3 != `original` &&
      sabor3 != `jamon` &&
      sabor3 != `queso` &&
      sabor3 != `oregano` &&
      sabor3 != `cebolla`
    ) {
      sabor3 = prompt(
        `Elije un sabor valido:\nOriginal, Jamon, Queso, Oregano y Cebolla`
      ).toLowerCase();
    }

    cantidad3 = parseInt(prompt(`Cuantas talitas de ${sabor3} vas a querer?`));

    while (Number.isInteger(cantidad3) == false) {
      cantidad3 = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor3} vas a querer?`)
      );
    }

    sabor4 = prompt(
      `Elije tu cuarto sabor:\nOriginal, Jamon, Queso, Oregano y Cebolla`
    ).toLowerCase();
    while (
      sabor4 != `original` &&
      sabor4 != `jamon` &&
      sabor4 != `queso` &&
      sabor4 != `oregano` &&
      sabor4 != `cebolla`
    ) {
      sabor4 = prompt(
        `Elije un sabor valido:\nOriginal, Jamon, Queso, Oregano y Cebolla`
      ).toLowerCase();
    }

    cantidad4 = parseInt(prompt(`Cuantas talitas de ${sabor4} vas a querer?`));

    while (Number.isInteger(cantidad4) == false) {
      cantidad4 = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor4} vas a querer?`)
      );
    }

    console.log(`Resumen de compra\n
    ${sabor}: ${cantidad} unidades\n
    ${sabor2}: ${cantidad2} unidades\n
    ${sabor3}: ${cantidad3} unidades\n
    ${sabor4}: ${cantidad4} unidades\n`);

    break;

  case 5:
    sabor = `original`;
    sabor2 = `jamon`;
    sabor3 = `queso`;
    sabor4 = `oregano`;
    sabor5 = `cebolla`;

    cantidad = parseInt(prompt(`Cuantas talitas de ${sabor} vas a querer?`));

    while (Number.isInteger(cantidad) == false) {
      cantidad = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor} vas a querer?`)
      );
    }

    cantidad2 = parseInt(prompt(`Cuantas talitas de ${sabor2} vas a querer?`));

    while (Number.isInteger(cantidad2) == false) {
      cantidad2 = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor2} vas a querer?`)
      );
    }

    cantidad3 = parseInt(prompt(`Cuantas talitas de ${sabor3} vas a querer?`));

    while (Number.isInteger(cantidad3) == false) {
      cantidad3 = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor3} vas a querer?`)
      );
    }

    cantidad4 = parseInt(prompt(`Cuantas talitas de ${sabor4} vas a querer?`));

    while (Number.isInteger(cantidad4) == false) {
      cantidad4 = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor4} vas a querer?`)
      );
    }

    cantidad5 = parseInt(prompt(`Cuantas talitas de ${sabor5} vas a querer?`));

    while (Number.isInteger(cantidad5) == false) {
      cantidad5 = parseInt(
        prompt(`Ingresa un numero, cuantas talitas de ${sabor5} vas a querer?`)
      );
    }

    console.log(`Resumen de compra\n
    ${sabor}: ${cantidad} unidades\n
    ${sabor2}: ${cantidad2} unidades\n
    ${sabor3}: ${cantidad3} unidades\n
    ${sabor4}: ${cantidad4} unidades\n
    ${sabor5}: ${cantidad5} unidades\n`);

    break;
}

let cantidadTotal = cantidad + cantidad2 + cantidad3 + cantidad4 + cantidad5;

const IVA = 1.21;

let subtotal = cantidadTotal * talita;

let total = cantidadTotal * (talita * IVA);

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
