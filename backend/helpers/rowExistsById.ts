import { client } from '../server'

// Used to check if a  row with a specified id exists in the db,
// because postgres doesn't throw an error if you try to delete a non-existent row
export const rowExistsById = async (table: string, id: string) => {
	if (!client) throw new Error('Postgres client not initialized')

	const { rowCount } = await client.query(`SELECT FROM ${table} WHERE id = $1`, [id])

	return rowCount
}