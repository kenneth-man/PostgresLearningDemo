import config from 'config'
import app from './app.js'
import pg from 'pg'

const client = new pg.Client({
	host: config.get('PG.config.host'),
	port: config.get('PG.config.port'),
	database: config.get('PG.config.name'),
	user: config.get('PG.config.userName'),
	password: config.get('PG.config.password'),
})

await client.connect()
const result = await client.query('SELECT * FROM test WHERE id = 1')
console.log('node pg output:', result)

const server = app.listen(
	config.get('BACKEND.config.port'),
	() => console.log(`App running on port ${config.get('BACKEND.config.port')}`)
)

process.on(
	'unhandledRejection',
	(err) => {
		console.log(`${err}. Exiting application`)

		// callback ran after server is closed
		server.close(() => process.exit(1))
	}
)
