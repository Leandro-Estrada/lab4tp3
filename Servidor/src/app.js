import Express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import CONFIG from './config';
import DB from './db';
import Productos from './routes/productos';
import Clientes from './routes/clientes';
import Facturas from './routes/facturas';

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(morgan('dev'));

app.use('/clientes', Clientes);
app.use('/productos', Productos);
app.use('/facturas', Facturas);

DB.sync({
	force: CONFIG.db_force_sync,
	logging: CONFIG.log_sql,
}).then(() => {
	console.info('Sincronizacion Exitosa');
}).catch(err => {
	console.error('Error al intentar sincronizar');
	console.error(err);
});

export default app;
