import { Request, Response } from 'express'
import { client } from '../server'
import { tryCatch } from '../helpers/tryCatch'

export const insertRow = async (req: Request, res: Response) =>
	await tryCatch(async () => {
		// const { table, id } = req.body

		// const result = await client.query(`SELECT * FROM ${table} WHERE id = $1`, [id])

		// return res
		// 	.status(200)
		// 	.json(result.rows)
	}, res)
