import express from 'express'
import { deleteRowById } from '../handlers/delete'

const router = express.Router()

router
	.delete('/row/:table/:id', deleteRowById)

export default router