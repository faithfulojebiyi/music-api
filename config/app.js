import { json, urlencoded } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

const appConfig = (app) => {
  // integrate winston logger with morgan
  app.use(morgan('combined', { stream: logger.stream }))
  // adds security middleware to handle potential attacks from HTTP requests
  app.use(helmet())
  // adds middleware for cross-origin resource sharing configuration
  app.use(cors())
  // adds middleware that parses requests whose content-type is application/json
  app.use(json())
  // adds middleware that parses requests with x-www-form-urlencoded data encoding
  app.use(urlencoded({ extended: true }))
  // adds a heartbeat route for the culture
  app.get('/', (req, res) => {
    res.send('Hello World v2!')
  })
  const port = process.env.PORT || 4005
  // server listens for connections
  app.listen(port, () => {
    console.log(`${'ORIGINS'} ${port}`)
  })
}

export default appConfig
