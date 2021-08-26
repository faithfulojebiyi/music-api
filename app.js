import express from 'express'
import appConfig from './config'

const app = express()

appConfig(app)

export default app
