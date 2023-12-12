import express from 'express'
import { getTables, getTable } from '../handlers/tables'

const router = express.Router()

router
	.get('/', getTables)
	.get('/:table', getTable)

export default router