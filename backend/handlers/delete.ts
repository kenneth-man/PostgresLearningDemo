import { Response } from 'express'
import { client } from '../server'
import { tryCatch } from '../helpers/tryCatch'
import { DeleteRowById } from '../models/types'
import { badRequestResponse } from '../helpers/errorResponses'

export const deleteRowById = async (req: DeleteRowById, res: Response) =>
	await tryCatch(async () => {
		const { table, id } = req.params

		const { rowCount } = await client.query(`SELECT FROM ${table} WHERE id = $1`, [id])
		
		if(rowCount === 0) {
			return badRequestResponse(res, `No row found to delete with "id": ${id}`)
		}

		await client.query(`DELETE FROM ${table} WHERE id = $1`, [id])

		return res
			.status(204)
			.json()
	}, res)
