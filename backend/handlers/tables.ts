import { Request, Response } from 'express'
import { GetTableReq } from '../models/types'
import { client } from '../server'
import { tryCatch } from '../helpers/tryCatch'
import { checkMissingParams } from '../helpers/checkMissingParams'

export const getTables = async (_: Request, res: Response) =>
	await tryCatch(async () => {
		const result = await client.query(`
			SELECT table_schema,table_name
			FROM information_schema.tables
			ORDER BY table_schema,table_name
		`)

		const publicTables = result.rows.filter((table) => table.table_schema === 'public')

		return res
			.status(200)
			.json(publicTables)
	}, res)

export const getTable = async (req: GetTableReq, res: Response) =>
	await tryCatch(async () => {
		const { table } = req.params

		checkMissingParams([table])

		const result = await client.query(`
			SELECT *
			FROM ${table}
		`)

		return res
			.status(200)
			.json(result.rows)
	}, res)
