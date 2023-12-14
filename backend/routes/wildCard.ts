import express from 'express'
import { getById, getOrderedBy } from '../handlers/wildCard'

const router = express.Router()

router
	.get('/getById/:table/:id', getById)
	.get('/getOrderedBy/:table/:column/:direction?', getOrderedBy)

export default router