import Cliente from '../models/cliente';

export function getClientes(req, res) {
  Cliente.find().sort('-dateAdded').exec((err, clientes) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ clientes });
  });
}

export function addCliente(req, res) {
  if (!req.body.cliente.nombre || !req.body.cliente.primerapellido || !req.body.cliente.segundoapellido || !req.body.cliente.rfc) {
    res.status(403).end();
  }
  Cliente.find().sort('-dateAdded').exec((errCliente, clientes) => {
    if (errCliente) {
      res.status(500).send(errCliente);
    } else {
      let clave = 1;
      if (clientes.length) {
        const primero = clientes[0];
        clave = primero.clave + 1;
      }
      const newCliente = new Cliente(req.body.cliente);
      newCliente.clave = clave;
      newCliente.save((err, saved) => {
        if (err) {
          res.status(500).send(err);
        }
        res.json({ cliente: saved });
      });
    }
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
