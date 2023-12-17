import { Response } from 'express'
import { client } from '../server'
import { UpdateRowByIdReq } from '../models/types'
import { tryCatch } from '../helpers/tryCatch'
import { badRequestResponse } from '../helpers/errorResponses'
import { rowExistsById } from '../helpers/rowExistsById'

export const updateRowById = async (req: UpdateRowByIdReq, res: Response) =>
	await tryCatch(async () => {
		if(!req.body || Object.entries(req.body).length === 0) {
			return badRequestResponse(res, 'Empty request body')
		}

		if(req.body.id) {
			return badRequestResponse(res, 'Cannot include primary key "id" in request body as it is immutable')
		}

		const { table, id } = req.params

		if(!await rowExistsById(table, id)) {
			return badRequestResponse(res, `No row found to update with "id": ${id}`)
		}

		await client.query(`
			UPDATE ${table}
			SET ${Object.entries(req.body).map(([key, val]) => `${key}='${val}'`).join(', ')}
			WHERE id = $1
		`, [id])

		return res
			.status(204)
			.json()
	}, res)
