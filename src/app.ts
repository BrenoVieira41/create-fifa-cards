import express, { Router, Request, Response } from 'express';
import Cards from './index';

const app = express();
const routes = Router();

app.use(express.json());
routes.get('/', () => console.log('Server is Up'));
routes.post('/card', async (req: Request, res: Response) => {
  try {
    let values = req.body;
    const position = req.body.position;
    const name = req.body.name;
    delete values.position;
    delete values.name;
    new Cards(name, values, position).printImage();
    res.status(200).send('Imagem baixada.');
  } catch (error) {
    console.error(error);
    return res.status(400).send(`Erro: ${error}`);
  }
});

app.use(routes);

export { app };
