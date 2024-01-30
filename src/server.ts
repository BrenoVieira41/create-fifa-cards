import { config } from 'dotenv';
import { app } from './app';

config();
const appPort = process.env.APP_PORT || 1234;

app.listen(appPort, () => console.log(`Server is running in port: ${appPort}`));
