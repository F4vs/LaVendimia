import { Router } from 'express';
import * as LavendimiaController from '../controllers/lavendimia.controller';

const router = new Router();

router.route('/ventas').get(LavendimiaController.getVentas);
// router.route('/venta').get(LavendimiaController.getSomething);
router.route('/clientes').get(LavendimiaController.getClientes);
router.route('/cliente').post(LavendimiaController.addCliente);
router.route('/articulos').get(LavendimiaController.getArticulos);
// router.route('/articulo').get(LavendimiaController.getArticulo);
// router.route('/configuracion').get(LavendimiaController.getSomething);


export default router;
