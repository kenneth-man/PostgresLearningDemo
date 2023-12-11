import express from 'express'
import { getById } from '../handlers/wildCard'

const router = express.Router()

router
	.get('/:db/:id', getById)

export default router