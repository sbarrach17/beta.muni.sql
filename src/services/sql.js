// npm install mssql

import sql from 'mssql';

const config = {
  user: 'juzgado',
  password: 'juzgado',
  server: '172.16.200.8',
  database: 'ITS_CONTRATOS',
  options: {
    trustedConnection: true,
    enableArithAbort: true
  }
};

async function conectarBD() {
  try {
    await sql.connect(config);
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

conectarBD();

async function obtenerContratos() {
  try {
    const result = await sql.query`SELECT * FROM Contratos`;
    return result.recordset;
  } catch (error) {
    console.error('Error al obtener los contratos:', error);
    throw error;
  }
}

async function agregarContrato(params) {
  try {
    const request = new sql.Request();
    const result = await request.query`
      INSERT INTO Contratos (empresa, rut, licitacion, contacto, correo, telefono, direccion, tipo, estado, monto, inicio, fin, notas)
      VALUES (${params.empresa}, ${params.rut}, ${params.licitacion}, ${params.contacto}, ${params.correo}, ${params.telefono}, ${params.direccion}, ${params.tipo}, ${params.estado}, ${params.monto}, ${params.inicio}, ${params.fin}, ${params.notas});
      SELECT SCOPE_IDENTITY() AS newContractId;`;
    return result.recordset[0];
  } catch (error) {
    console.error('Error al agregar contrato:', error);
    throw error;
  }
}

async function eliminarContrato(id) {
  try {
    const request = new sql.Request();
    await request.query`DELETE FROM Contratos WHERE id = ${id}`;
  } catch (error) {
    console.error('Error al eliminar contrato:', error);
    throw error;
  }
}

export { obtenerContratos, agregarContrato, eliminarContrato };




//   CREATE PROCEDURE obtenerContratos
// AS
// BEGIN
//     SELECT * FROM Contratos;
// END;



// CREATE PROCEDURE agregarContrato
//     @empresa VARCHAR(100),
//     @rut VARCHAR(20),
//     @licitacion VARCHAR(100),
//     @contacto VARCHAR(100),
//     @correo VARCHAR(100),
//     @telefono VARCHAR(20),
//     @direccion VARCHAR(100),
//     @tipo VARCHAR(50),
//     @estado VARCHAR(50),
//     @monto DECIMAL(18, 2),
//     @inicio DATE,
//     @fin DATE,
//     @notas VARCHAR(MAX)
// AS
// BEGIN
//     INSERT INTO Contratos (empresa, rut, licitacion, contacto, correo, telefono, direccion, tipo, estado, monto, inicio, fin, notas)
//     VALUES (@empresa, @rut, @licitacion, @contacto, @correo, @telefono, @direccion, @tipo, @estado, @monto, @inicio, @fin, @notas);
// END;


// CREATE PROCEDURE eliminarContrato
//     @id INT
// AS
// BEGIN
//     DELETE FROM Contratos WHERE id = @id;
// END;



// Ejemplo de llamada a procedimientos almacenados desde Node.js utilizando mssql:


// async function obtenerContratos() {
//     try {
//       const result = await sql.query`EXEC obtenerContratos`;
//       return result.recordset;
//     } catch (error) {
//       console.error('Error al obtener los contratos:', error);
//       throw error;
//     }
//   }
  
//   async function agregarContrato(params) {
//     try {
//       const result = await sql.query`
//         EXEC agregarContrato 
//           @empresa = ${params.empresa},
//           @rut = ${params.rut},
//           @licitacion = ${params.licitacion},
//           @contacto = ${params.contacto},
//           @correo = ${params.correo},
//           @telefono = ${params.telefono},
//           @direccion = ${params.direccion},
//           @tipo = ${params.tipo},
//           @estado = ${params.estado},
//           @monto = ${params.monto},
//           @inicio = ${params.inicio},
//           @fin = ${params.fin},
//           @notas = ${params.notas}`;
//       return result.recordset[0];
//     } catch (error) {
//       console.error('Error al agregar contrato:', error);
//       throw error;
//     }
//   }
  
//   async function eliminarContrato(id) {
//     try {
//       await sql.query`EXEC eliminarContrato @id = ${id}`;
//     } catch (error) {
//       console.error('Error al eliminar contrato:', error);
//       throw error;
//     }
//   }