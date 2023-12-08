import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import config from 'config'
import allRouter from './routes/all'

const app = express()

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

app.use('/all/', allRouter)

export default app;
