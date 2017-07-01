import Lavendimia from '../models/lavendimia';

export function getClientes(req, res) {
  res.json({ clientes: [
    {
      clave: '001',
      nombre: 'Juan Perez',
    },
    {
      clave: '002',
      nombre: 'Pedro Hernandez',
    },
    {
      clave: '003',
      nombre: 'Nohemi Martinez',
    }],
});
}

export function getArticulos(req, res) {
  res.json({ articulos: [
    {
      clave: '001',
      descripcion: 'Mesa para 6 personas color cafe',
    },
    {
      clave: '002',
      descripcion: 'Silla de oficina color negro',
    },
    {
      clave: '003',
      descripcion: 'Cajorenera color madera',
    }],
});
}

export function addCliente(req, res) {}
