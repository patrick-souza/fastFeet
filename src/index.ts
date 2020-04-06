import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './Routes';
import { resolve } from 'path';

const App = express();

App.use(express.json());
App.use(cors());
App.use(express.json());
App.use('/files', express.static(resolve(__dirname, '..', 'tmp', 'uploads')));

App.use(routes);

export default App;
