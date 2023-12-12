import express from 'express'
import { getById, getOrderedBy } from '../handlers/wildCard'

const router = express.Router()

router
	.get('/:table/:id', getById)
	.get('/:table/:column/:direction', getOrderedBy)

export default router