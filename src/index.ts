import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './Routes';

const App = express();

App.use(express.json());
App.use(cors());
App.use(routes);

export default App;
