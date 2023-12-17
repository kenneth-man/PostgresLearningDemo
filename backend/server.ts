import config from 'config'
import app from './app'
import pg from 'pg'

export const client = new pg.Client({
	host: config.get('PG.config.host'),
	port: config.get('PG.config.port'),
	database: config.get('PG.config.name'),
	user: config.get('PG.config.userName'),
	password: config.get('PG.config.password'),
});

(async () => await client.connect())()

app.listen(
	config.get('BACKEND.config.port'),
	async () => {
		console.log(`App running on port: ${config.get('BACKEND.config.port')}`)
		const test = await client.query('SELECT * FROM test WHERE id = 1')
		console.log(`Testing pg query success: ${!!test}`)
	}
)

// TODO
// - add delete, post, patch, put endpoints
// - use safeParse to validate zod interfaces based on table name in req.params? enum?

// - build some basic frontend ui to call endpoints
// - add more complex endpoints (see - https://www.w3schools.com/sql/default.asp)
//    - e.g. freetext query but prevent mutatating operations like fauna playground
//    - e.g. delete, post, put, patch (require auth as middleware in the route?)
