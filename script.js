class Cliente {
  constructor(nombre, direccion, telefono, pais) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.pais = pais;
  }
}

class Exportador extends Cliente {
  constructor(nombre, direccion, telefono, pais) {
    super(nombre, direccion, telefono, pais);
  }
}

class Operador extends Cliente {
  constructor(nombre, direccion, telefono, pais) {
    super(nombre, direccion, telefono, pais);
  }
}

class Importador extends Cliente {
  constructor(nombre, direccion, telefono, pais) {
    super(nombre, direccion, telefono, pais);
  }
}

class Mercancia {
  constructor(
    descripcion,
    peso,
    volumen,
    numBultos,
    numUnidades,
    dimensiones,
    marcas,
    tipoEmbalaje,
    paisOrigen,
    ciudadEntrega
  ) {
    this.descripcion = descripcion;
    this.peso = peso;
    this.volumen = volumen;
    this.numBultos = numBultos;
    this.numUnidades = numUnidades;
    this.dimensiones = dimensiones;
    this.marcas = marcas;
    this.tipoEmbalaje = tipoEmbalaje;
    this.paisOrigen = paisOrigen;
    this.ciudadEntrega = ciudadEntrega;
  }
}

class Buque {
  constructor(nombre, naviera, fechaZarpe, fechaArribo) {
    this.nombre = nombre;
    this.naviera = naviera;
    this.fechaZarpe = fechaZarpe;
    this.fechaArribo = fechaArribo;
  }
}

class Naviera {
  constructor(nombre, direccion, telefono, pais) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.pais = pais;
  }
}

class Terminal {
  constructor(nombre, pais) {
    this.nombre = nombre;
    this.pais = pais;
  }
}

class OperacionImportacion {
  constructor(
    referencia,
    bl,
    cliente,
    expedidor,
    destinatario,
    operador,
    paisExportador,
    puertoEmbarque,
    puertoDesembarque,
    aduanaIngreso,
    paisDestino,
    tipoMercancia,
    estatus,
    buque,
    naviera,
    fechaZarpe,
    fechaArribo,
    flete,
    formaPago,
    mercancia,
    numBooking,
    terminal,
    recargos
  ) {
    this.referencia = referencia;
    this.bl = bl;
    this.cliente = cliente;
    this.expedidor = expedidor;
    this.destinatario = destinatario;
    this.operador = operador;
    this.paisExportador = paisExportador;
    this.puertoEmbarque = puertoEmbarque;
    this.puertoDesembarque = puertoDesembarque;
    this.aduanaIngreso = aduanaIngreso;
    this.paisDestino = paisDestino;
    this.tipoMercancia = tipoMercancia;
    this.estatus = estatus;
    this.buque = buque;
    this.naviera = naviera;
    this.fechaZarpe = fechaZarpe;
    this.fechaArribo = fechaArribo;
    this.flete = flete;
    this.formaPago = formaPago;
    this.mercancia = mercancia;
    this.numBooking = numBooking;
    this.terminal = terminal;
    this.recargos = recargos;
  }

  cambiarEstatus(nuevoEstatus) {
    // Verificar que el nuevo estatus sea progresivo
    if (nuevoEstatus > this.estatus) {
      this.estatus = nuevoEstatus;
      console.log(
        `La operación ${this.referencia} ha sido actualizada al estatus ${nuevoEstatus}`
      );
    } else {
      console.log("El nuevo estatus debe ser mayor que el estatus actual.");
    }
  }
}

// Ejemplo de uso:

// Crear instancias de las clases necesarias
const exportador1 = new Exportador(
  "Exportador 1",
  "Dirección Exportador 1",
  "123456789",
  "País Exportador 1"
);
const operador1 = new Operador(
  "Operador 1",
  "Dirección Operador 1",
  "987654321",
  "País Operador 1"
);
const importador1 = new Importador(
  "Importador 1",
  "Dirección Importador 1",
  "567891234",
  "País Importador 1"
);
const mercancia1 = new Mercancia(
  "Descripción Mercancia 1",
  100,
  200,
  3,
  5,
  "Dimensiones Mercancia 1",
  "Marcas Mercancia 1",
  "Embalaje Mercancia 1",
  "País Origen Mercancia 1",
  "Ciudad Entrega Mercancia 1"
);
const buque1 = new Buque("Buque 1", "Naviera 1", "2024-03-01", "2024-03-05");
const naviera1 = new Naviera(
  "Naviera 1",
  "Dirección Naviera 1",
  "456789123",
  "País Naviera 1"
);
const terminal1 = new Terminal("Terminal 1", "País Terminal 1");

// Crear operación de importación
const operacion1 = new OperacionImportacion(
  "1620024-00",
  "BL123",
  importador1,
  exportador1,
  "Destinatario 1",
  operador1,
  "País Exportador 1",
  "Puerto Embarque 1",
  "Puerto Desembarque 1",
  43,
  "País Destino 1",
  mercancia1,
  1,
  buque1,
  naviera1,
  "2024-03-01",
  "2024-03-05",
  "Flete 1",
  "Forma de Pago 1",
  "Booking 123",
  terminal1,
  "Recargos 1"
);

// Cambiar estatus de la operación
operacion1.cambiarEstatus(2); // Cambiar a "En espera de Zarpe"
operacion1.cambiarEstatus(4); // Cambiar a "En Atraque"
operacion1.cambiarEstatus(2); // No debería cambiar porque el nuevo estatus es menor al actual
