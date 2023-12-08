import { Response } from 'express'
import { IReqParams } from '../models/interfaces'
import { client } from '../server'
import { tryCatch } from './tryCatch'

export const getAllById = async (req: IReqParams, res: Response) =>
	tryCatch(async () => {
		const { db, id } = req.params

		if (!db || !id) throw new Error('Missing parameters')

		// const result = await client.query('SELECT * FROM $1 WHERE id = $2', [db, id])
		const result = await client.query('SELECT * FROM test WHERE id = 1')

		return res
			.status(200)
			.json(result.rows)
	})