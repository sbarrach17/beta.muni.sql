import express from "express";
import cors from "cors";
import { obtenerContratos, agregarContrato, eliminarContrato} from "./src/models/consultas.js";

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get('/contratos', async (req, res) => {
  try {
    const contratos = await obtenerContratos();
    res.json(contratos);
  } catch (error) {
    console.error('Error al obtener los contratos:', error);
    res.status(500).json({ error: 'Error al obtener los contratos' });
  }
});

app.post('/contratos', async (req, res) => {
  const { empresa, rut, licitacion, contacto, correo, telefono, direccion, tipo, estado, monto, inicio, fin, notas } = req.body;
  try {
    const nuevoContrato = await agregarContrato(empresa, rut, licitacion, contacto, correo, telefono, direccion, tipo, estado, monto, inicio, fin, notas);
    res.status(201).json(nuevoContrato);
  } catch (error) {
    console.error('Error al agregar contrato:', error);
    res.status(500).json({ error: 'Error al agregar contrato' });
  }
});

app.delete('/contratos/:id', async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    await eliminarContrato(postId);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error al eliminar contrato:', error);
    res.status(500).json({ error: 'Error al eliminar contrato' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
