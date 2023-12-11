import { Response } from 'express'
import { IReqParams } from '../models/interfaces'
import { client } from '../server'
import { tryCatch } from '../helpers/tryCatch'
import { checkMissingParams } from '../helpers/checkMissingParams'

export const getById = async (req: IReqParams, res: Response) =>
	await tryCatch(async () => {
		const { db, id } = req.params

		checkMissingParams([db, id])

		const result = await client.query(`SELECT * FROM ${db} WHERE id = ${id}`)

		return res
			.status(200)
			.json(result.rows)
	}, res)
