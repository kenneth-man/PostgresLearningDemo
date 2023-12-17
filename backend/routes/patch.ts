import express from 'express'
import { updateRowById } from '../handlers/patch'

const router = express.Router()

router
	.patch('/row/:table/:id', updateRowById)

export default router
