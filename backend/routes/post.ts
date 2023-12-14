import express from 'express'
import { insertRow } from '../handlers/post'

const router = express.Router()

router
	.post('/row', insertRow)

export default router