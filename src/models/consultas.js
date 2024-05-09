import pg from 'pg';
import 'dotenv/config';
const { Pool } = pg;
const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

const agregarContrato = async (empresa, rut, licitacion, contacto, correo, telefono, direccion, tipo, estado, monto, inicio, fin, notas) => {
  try {
    const consulta =
      "INSERT INTO contratos(empresa, rut, licitacion, contacto, correo, telefono, direccion, tipo, estado, monto, inicio, fin, notas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *";
    const values = [empresa, rut, licitacion, contacto, correo, telefono, direccion, tipo, estado, monto, inicio, fin, notas]; 
    const result = await pool.query(consulta, values);
    console.log("Contrato agregado:", result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error("Error al agregar contrato:", error);
    throw error;
  }
};



const obtenerContratos = async () => {
  try {
    const consulta = "SELECT * FROM contratos";
    const result = await pool.query(consulta);
    console.log("Contratos obtenidos:", result.rows);
    return result.rows;
  } catch (error) {
    console.error("Error al obtener los contratos:", error);
    throw error;
  }
};

const eliminarContrato = async (id) => {
  try {
    const consulta = "DELETE FROM contratos WHERE id = $1 RETURNING *";
    const values = [id];
    const result = await pool.query(consulta, values);
    console.log("Contrato Eliminado:", result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error("Error al eliminar Contrato:", error);
    throw error;
  }
};



export { obtenerContratos, agregarContrato, eliminarContrato };
