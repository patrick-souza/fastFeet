import { Router } from 'express';
import Auth from './Middlewares/Auth';
import multer from 'multer';
import multerConfig from './Config/multer-config';

import RecipientController from './Controllers/RecipientController';
import UserController from './Controllers/UserController';
import SessionController from './Controllers/SessionController';
import FileController from './Controllers/FileController';
import DeliveryController from './Controllers/DeliveryController';

const routes = Router();
const upload = multer(multerConfig);

routes.get('/', (_, res) => res.json('ok'));

routes.post('/session', SessionController.create);

routes.use(Auth);

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);
routes.put('/user', UserController.update);

routes.post('/recipient', RecipientController.create);
routes.put('/recipient/:id', RecipientController.update);

routes.post('/files', upload.single('file'), FileController.create);

routes.get('/delivery', DeliveryController.index);
routes.get('/delivery/:id', DeliveryController.detail);
routes.post('/delivery', DeliveryController.create);
routes.put('/delivery/:id', DeliveryController.update);
routes.delete('/delivery/:id', DeliveryController.remove);

export default routes;
