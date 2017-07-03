import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const articuloSchema = new Schema({
  clave: { type: 'Number', required: true },
  descripcion: { type: 'String', required: true },
  modelo: { type: 'String', required: true },
  precio: { type: 'Number', required: true },
  existencia: { type: 'Number', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('articulo', articuloSchema);
