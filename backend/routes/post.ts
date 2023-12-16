import express from 'express'
import { insertRow } from '../handlers/post'

const router = express.Router()

router
	.post('/row/:table', insertRow)

export default router