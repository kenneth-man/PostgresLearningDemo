import { Response } from 'express'
import { client } from '../server'
import { tryCatch } from '../helpers/tryCatch'
import { InsertRowReq } from '../models/types'
import { badRequestResponse } from '../helpers/errorResponses'

export const insertRow = async (req: InsertRowReq, res: Response) =>
	await tryCatch(async () => {
		if(!req.body || Object.entries(req.body).length === 0) {
			return badRequestResponse(res, 'Empty request body')
		}

		if(!req.body.id) {
			return badRequestResponse(res, 'Missing required primary key "id" in request body')
		}

		const { id } = req.body
		const { rows: [{ max }] } = await client.query(`SELECT MAX(id) from ${req.params.table}`)

		if(id <= max) {
			return badRequestResponse(res, `Invalid "id" integer - Must be above ${max}`)
		}

		await client.query(`
			INSERT INTO ${req.params.table} (${Object.keys(req.body).join(', ')})
			VALUES (${Object.values(req.body).map(val => `'${val}'`).join(', ')})
		`)

		return res
			.status(204)
			.json()
	}, res)
