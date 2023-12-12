import { Response } from 'express'
import { GetByIdReq, GetOrderedByReq } from '../models/types'
import { client } from '../server'
import { tryCatch } from '../helpers/tryCatch'
import { checkMissingParams } from '../helpers/checkMissingParams'

export const getById = async (req: GetByIdReq, res: Response) =>
	await tryCatch(async () => {
		const { table, id } = req.params

		checkMissingParams([table, id])

		// Databases generally don't let you use placeholders for identifiers (table names, column names, ...)
		// so not using a placeholder for the table name here is fine
		const result = await client.query(`SELECT * FROM ${table} WHERE id = $1`, [id])

		return res
			.status(200)
			.json(result.rows)
	}, res)

export const getOrderedBy = async (req: GetOrderedByReq, res: Response) =>
	await tryCatch(async () => {
		const { table, column, direction } = req.params

		const upperCaseDirection = direction.toUpperCase()

		checkMissingParams([table, upperCaseDirection])

		if (upperCaseDirection !== 'ASC' && upperCaseDirection !== 'DESC') throw new Error('Invalid direction')

		const result = await client.query(`SELECT * FROM ${table} ORDER BY ${column} ${upperCaseDirection}`)

		return res
			.status(200)
			.json(result.rows)
		}, res)