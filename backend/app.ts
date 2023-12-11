import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import config from 'config'
import cors from 'cors'
import wildCardRouter from './routes/wildCard'
import tablesRouter from './routes/tables'

const app = express()

// Enable CORS; allow requests from any domain (e.g. localhost:3000)
app.use(cors());

// adding Security HTTP Headers to req and res
app.use(helmet())

// limit requests from the same IP address per hour
app.use(
	'/api',
	rateLimit({
		max: config.get('BACKEND.limits.max'),
		windowMs: config.get('BACKEND.limits.windowMs'),
		message: 'Too many requests from this IP, please try again in an hour'
	})
)

// body parser to read data from body into req.body
app.use(
	express.json({
		limit: config.get('BACKEND.limits.reqBody')
	})
)

app.use('/wildCard/', wildCardRouter)
app.use('/tables/', tablesRouter)

export default app;
