let config;

try {
	config = require('../config.json');
} catch (err) {
	console.error('fallo al cargar el archivo "config.json"');
	console.error(err);
	process.exit(1);
}

if (typeof config.db_force_sync === 'undefined') {
	console.error('Se debe configurar "db_force_sync"');
	process.exit(1);
}

export default config;