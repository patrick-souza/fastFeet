import { Router } from 'express';
import UserController from './Controllers/UserController';
import SessionController from './Controllers/SessionController';
import Auth from './Middlewares/Auth';
import RecipientController from './Controllers/RecipientController';

const routes = Router();

routes.get('/', (_, res) => res.json('ok'));

routes.post('/session', SessionController.create);

routes.use(Auth);

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);
routes.put('/user', UserController.update);

routes.post('/recipient', RecipientController.create);
routes.put('/recipient/:id', RecipientController.update);

export default routes;
