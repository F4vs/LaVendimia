import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  clave: { type: 'Number', required: true },
  nombre: { type: 'String', required: true },
  primerapellido: { type: 'String', required: true },
  segundoapellido: { type: 'String', required: true },
  rfc: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('cliente', clienteSchema);
