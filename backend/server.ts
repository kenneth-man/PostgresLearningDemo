import config from 'config'
import app from './app'
import pg from 'pg'
import { tryCatch } from './handlers/tryCatch'

export const client = new pg.Client({
	host: config.get('PG.config.host'),
	port: config.get('PG.config.port'),
	database: config.get('PG.config.name'),
	user: config.get('PG.config.userName'),
	password: config.get('PG.config.password'),
})

tryCatch(async () => await client.connect())

const server = app.listen(
	config.get('BACKEND.config.port'),
	async () => {
		console.log(`App running on port: ${config.get('BACKEND.config.port')}`)
		const test = await client.query('SELECT * FROM test WHERE id = 1')
		console.log(`Testing pg query success: ${!!test}`)
	}
)

process.on(
	'unhandledRejection',
	(err) => {
		console.log(`${err}. Exiting application`)

		// callback ran after server is closed
		server.close(() => process.exit(1))
	}
)



// TODO
// - figure out paramaterized queries in node-postgres
// - test if any hanging if failed response/error thrown in postman (e.g. using res.status(400)... is reusable functions)