import express from 'express'
import { getTables, getTable } from '../handlers/tables'

const router = express.Router()

router
	.get('/getTables/', getTables)
	.get('/getTable/:table', getTable)

export default router