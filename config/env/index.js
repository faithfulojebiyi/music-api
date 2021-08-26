import rootPath from 'app-root-path'
import production from './production'
import development from './development'
import test from './test'

const {
  MUSIC_PORT: PORT,
  MUSIC_SECRET: SECRET,
  MUSIC_NODE_ENV: NODE_ENV,
  MUSIC_AWS_ACCESS_KEY: AWS_ACCESS_KEY,
  MUSIC_AWS_SECRET_KEY: AWS_SECRET_KEY,
  MUSIC_BUCKET: AWS_BUCKET_NAME
} = process.env

const currentEnv = {
  production,
  development,
  test
}[NODE_ENV || 'development']

export default {
  ...process.env,
  ...currentEnv,
  rootPath,
  PORT,
  SECRET,
  NODE_ENV,
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY,
  AWS_BUCKET_NAME
}
