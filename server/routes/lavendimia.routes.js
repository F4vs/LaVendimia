import { Router } from 'express';
import * as LavendimiaController from '../controllers/lavendimia.controller';

const router = new Router();

router.route('/ventas').get(LavendimiaController.getSomething);
router.route('/ventas/registrosventas').get(LavendimiaController.getSomething);
router.route('/clientes').get(LavendimiaController.getSomething);
router.route('/articulos').get(LavendimiaController.getSomething);
router.route('/configuracion').get(LavendimiaController.getSomething);


export default router;
