import express from 'express'
import { getAllById } from '../handlers/all'

const allRouter = express.Router()

allRouter.get('/:db/:id', getAllById)

export default allRouter