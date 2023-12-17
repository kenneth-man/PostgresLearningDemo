import { Response } from 'express'
import { client } from '../server'
import { DeleteRowByIdReq } from '../models/types'
import { tryCatch } from '../helpers/tryCatch'
import { badRequestResponse } from '../helpers/errorResponses'
import { rowExistsById } from '../helpers/rowExistsById'

export const deleteRowById = async (req: DeleteRowByIdReq, res: Response) =>
	await tryCatch(async () => {
		const { table, id } = req.params
		
		if(!await rowExistsById(table, id)) {
			return badRequestResponse(res, `No row found to delete with "id": ${id}`)
		}

		await client.query(`DELETE FROM ${table} WHERE id = $1`, [id])

		return res
			.status(204)
			.json()
	}, res)
