import app from './app.js';
import CONFIG from './config';

const PUERTO = CONFIG.app.puerto;

async function main() {
	console.info('Iniciando Servidor...');

	app.listen(PUERTO, () => {
		console.info(`Servidor escuchando en puerto ${PUERTO}`);
	}).on('error', err => {
		console.error('Error al iniciar', err);
	});
}

main().catch(err => {
	console.error('ERROR:', err);
});
