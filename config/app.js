import { json, urlencoded } from 'express'

const appConfig = (app) => {
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
