import { Router } from 'express';
import * as LavendimiaController from '../controllers/lavendimia.controller';

const router = new Router();

router.route('/ventas').get(LavendimiaController.getVentas);
// router.route('/ventas/registrosventas').get(LavendimiaController.getSomething);
router.route('/clientes').get(LavendimiaController.getClientes);
router.route('/cliente').post(LavendimiaController.addCliente);
router.route('/articulos').get(LavendimiaController.getArticulos);
// router.route('/configuracion').get(LavendimiaController.getSomething);


export default router;
