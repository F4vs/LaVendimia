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

export function getVentas(req, res) {
  res.json({ ventas: [
    {
      clave: '0001',
      clavecliente: '001',
      nombre: 'Jesus Valdez',
      total: '3000',
      fecha: '30/06/2017',
      status: 'Activa',
    },
    {
      clave: '0002',
      clavecliente: '002',
      nombre: 'Jorge Campos',
      total: '3500',
      fecha: '29/05/2017',
      status: 'Activa',
    },
    {
      clave: '0003',
      clavecliente: '003',
      nombre: 'Manuel Valennzuela',
      total: '2000',
      fecha: '28/06/2017',
      status: 'Activa',
    }],
});
}

export function addCliente(req, res) {}
