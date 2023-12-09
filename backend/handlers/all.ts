import { Response } from 'express'
import { IReqParams } from '../models/interfaces'
import { client } from '../server'
import { tryCatch } from './tryCatch'

export const getAllById = async (req: IReqParams, res: Response) =>
	await tryCatch(async () => {
		const { db, id } = req.params

		if (!db || !id) throw new Error('Missing parameters')

		const result = await client.query(`SELECT * FROM ${db} WHERE id = ${id}`)

		return res
			.status(200)
			.json(result.rows)
	}, res)