import { Response } from 'express'
import { GetByIdReq, GetOrderedByReq } from '../models/types'
import { client } from '../server'
import { tryCatch } from '../helpers/tryCatch'
import { convertQueryParams } from '../helpers/convertQueryParams'
import { Direction } from '../models/types'
import { badRequestResponse } from '../helpers/errorResponses'

export const getById = async (req: GetByIdReq, res: Response) =>
	await tryCatch(async () => {
		const { table, id } = req.params

		// Databases generally don't let you use placeholders for identifiers (table names, column names, ...)
		// so not using a placeholder for the table name here is fine
		const result = await client.query(`SELECT * FROM ${table} WHERE id = $1`, [id])

		return res
			.status(200)
			.json(result.rows)
	}, res)

export const getOrderedBy = async (req: GetOrderedByReq, res: Response) =>
	await tryCatch(async () => {
		const { table, column, direction = 'DESC' } = req.params

		const upperCaseDirection = direction.toUpperCase()

		if (!Direction.safeParse(upperCaseDirection).success) {
			return badRequestResponse(res, 'Invalid direction - Must be either `ASC` or `DESC`')
		}

		const result = await client.query(`SELECT * FROM ${table} ${convertQueryParams(req.query)} ORDER BY ${column} ${upperCaseDirection}`)

		return res
			.status(200)
			.json(result.rows)
		}, res)