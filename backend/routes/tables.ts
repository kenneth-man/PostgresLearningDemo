import express from 'express'
import { getTables, getTable } from '../handlers/tables'

const router = express.Router()

router
	.get('/', getTables)
	.get('/:db', getTable)

export default router