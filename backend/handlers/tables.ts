import { Response } from 'express'
import { IReqParams } from '../models/interfaces'
import { client } from '../server'
import { tryCatch } from '../helpers/tryCatch'
import { checkMissingParams } from '../helpers/checkMissingParams'

export const getTables = async (_: IReqParams, res: Response) =>
	await tryCatch(async () => {
		const result = await client.query(`
			SELECT table_schema,table_name
			FROM information_schema.tables
			ORDER BY table_schema,table_name
		`)

		return res
			.status(200)
			.json(result.rows)
	}, res)

export const getTable = async (req: IReqParams, res: Response) =>
	await tryCatch(async () => {
		const { db } = req.params

		checkMissingParams([db])

		const result = await client.query(`
			SELECT *
			FROM ${db}
		`)

		return res
			.status(200)
			.json(result.rows)
	}, res)
